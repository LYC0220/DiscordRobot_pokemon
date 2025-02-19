import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { pokemon_list } from 'pokemon_list.js'

const fs = require('fs');
const path = require('path');

const MAX_POKEMON_COUNT = 5;

export const command = new SlashCommandBuilder()
    .setName('gift')
    .setDescription('查看其他用户的队伍')
    .addStringOption(option =>option
    .setName('pokemon_id')
    .setDescription('給予的神奇寶貝ID')
    .setRequired(true))
    .addUserOption(option =>option
    .setName('user')
    .setDescription('玩家ID')
    .setRequired(true));
    
    
export const action = async (ctx) => {

    function savePokemonData(url, userId ,x_id,rarity) {

        const count = getPokemonDataCount(userId);
        if (count >= MAX_POKEMON_COUNT) {
            return false; // 达到最大数量，不保存
        }
      
        let pokemonData = { 'id': userId, 'url': url, 'p_id':x_id, 'rarity':rarity};
        let dirt = JSON.stringify(pokemonData) + '\n';

            // 将 Pokémon 数据追加到文件中
        const filePath = path.join(__dirname, 'pokemon_data.txt');
        fs.appendFileSync(filePath, dirt);

        return true;
        

    }

    function getPokemonDataCount(userId) {
        // 读取文件并解析为 JSON 格式
        const filePath = path.join(__dirname,'pokemon_data.txt');
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            if (fileContent) {
                const data = fileContent.split('\n').filter(Boolean).map(JSON.parse);

                return data.filter(item => item.id === userId).length;
            }
        }
        return 0;
    }
    
    const user = ctx.user
    const iuser = ctx.options.getUser('user');
    let pokemomID = ctx.options.getString('pokemon_id')
    const search = pokemomID
    pokemomID = pokemomID.toString().padStart(3,'0');

    function deleteLinesMatchingPatternAndId(id ,search) {
        // 读取文件内容并将其拆分成行
        const filePath = path.join(__dirname, 'pokemon_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
        if (fileContent) {
            // 将文件内容按行拆分成数组
            let lines = fileContent.split('\n').filter(Boolean);
            
            // 使用正则表达式进行匹配
            let regexp = new RegExp(search);
            
            // 查找匹配的行，并记住最后一个匹配行的索引
            let lastMatchingIndex = -1;
            for (let i = lines.length - 1; i >= 0; i--) {
                // 判断当前行是否匹配正则表达式
                if (regexp.test(lines[i])) {
                    // 将匹配的行解析为对象
                    let pokemonData = JSON.parse(lines[i]);
                    // 检查 id 是否符合条件
                    if (pokemonData.id === id) {
                        if (pokemonData.p_id === search) {
                            lastMatchingIndex = i;
                            break;
                        }
                    }
                }
            }
            
            // 如果找到了匹配的行，则删除该行
            if (lastMatchingIndex !== -1) {
                lines.splice(lastMatchingIndex, 1);
                
                // 如果删除了行，则重新组合剩余的行并写回文件
                fileContent = lines.join('\n');
                fs.writeFileSync(filePath, fileContent + '\n');
                
                return true; // 返回删除成功的信息
            } else {
                return false; // 返回没有找到匹配行的信息
            }
        }
        return false; // 如果文件不存在或者内容为空，返回删除失败的信息
    }

    let pokemonname = pokemon_list(pokemomID);
    let rarity;

    let check_safe = false;
    function check(id,search){
        const filePath = path.join(__dirname, 'pokemon_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let lines = fileContent.split('\n').filter(Boolean);
            
            // 使用正则表达式进行匹配
            let regexp = new RegExp(search);
            
            // 查找匹配的行，并记住最后一个匹配行的索引
            for (let i = lines.length - 1; i >= 0; i--) {
                // 判断当前行是否匹配正则表达式
                if (regexp.test(lines[i])) {
                    // 将匹配的行解析为对象
                    let pokemonData = JSON.parse(lines[i]);
                    // 检查 id 是否符合条件
                    if (pokemonData.id === id) {
                        if (pokemonData.p_id === search) {
                            rarity = pokemonData.rarity
                            check_safe = true;
                            break;
                        }
                    }
                }
            }
    }

    let url = `https://s1.52poke.com/assets/sprite/gen5/${pokemomID}.gif`
    check(user.id,search)
    if(check_safe){
        if(savePokemonData(url, iuser.id ,search,rarity)){
            if(deleteLinesMatchingPatternAndId(user.id,search)){
                await ctx.reply(`已將 ${pokemonname.name} 送給 <@${iuser.id}>`)
            }else{
                await ctx.reply(`發生錯誤`)
            }
        }else{
            await ctx.reply('對方隊伍已滿')
        }
    }else{
        await ctx.reply(`你的隊伍中沒有此(ID:${search})`)
    }


};

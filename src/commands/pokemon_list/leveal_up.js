import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { user_coin_check,update_user_lv,update_user_coin } from './user_save/pokemon_user.js'
const fs = require('fs');
const path = require('path');

const MAX_POKEMON_COUNT = 5;

export const command = new SlashCommandBuilder()
    .setName('lv')
    .setDescription('提升品質(1000元)')
    .addStringOption(option => option // 添加玩家1參數
    .setName('pockemon_id') // 參數名稱
    .setDescription('請輸入編號') // 參數描述
    .setRequired(true)) // 參數是否必需

    
export const action = async (ctx) => {

    let user = ctx.user
    const search = ctx.options.getString('pockemon_id');

    let pokemon_pid;
    let pokemon_url;
    let pokemon_rarity;
    let err = false;

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
                            pokemon_rarity = pokemonData.rarity
                            pokemon_pid = pokemonData.p_id
                            pokemon_url = pokemonData.url
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

    function savePokemonData(url, userId ,x_id,rarity) {

        const count = getPokemonDataCount(userId);
        if (count >= MAX_POKEMON_COUNT) {
            return false;
        }


        let pokemonData = { 'id': userId, 'url': url, 'p_id':x_id, 'rarity':rarity};
        let dirt = JSON.stringify(pokemonData) + '\n';

    
        const filePath = path.join(__dirname, 'pokemon_data.txt');
        fs.appendFileSync(filePath, dirt);

    }
    
    let x = Math.floor(Math.random() *20 + 1)
    if(user_coin_check(user.id,1000)){
        update_user_coin(user.id,-1000)
        if(deleteLinesMatchingPatternAndId(user.id,search)){

            switch(pokemon_rarity){

                case '劣質':
                    pokemon_rarity = '一般'
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    break;
                case '一般':
                    pokemon_rarity = '高級'
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    break;
                case '高級':
                    pokemon_rarity = '稀有'
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    break;
                case '稀有':
                    pokemon_rarity = '傳奇'
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    break;
                case '傳奇':
                    pokemon_rarity = '傳奇+'
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    break;
                case '傳奇+':
                    pokemon_rarity = '傳奇++'
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    break;
                case '傳奇++':
                    pokemon_rarity = '不可能的傳說'
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    break;
                case '不可能的傳說':
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    update_user_coin(user.id,1000)
                    err = true
                    break;
                case 'BOSS':
                    savePokemonData(pokemon_url,user.id,pokemon_pid,pokemon_rarity)
                    update_user_coin(user.id,1000)
                    err = true
                    break;
                        
            }
            
            if(err){
                await ctx.reply(`神奇寶貝品質無法再提升`)
            }else{
                await ctx.reply(`已將神奇寶貝品質提升為(${pokemon_rarity})`)
            }

        }else{
            update_user_coin(user.id,1000)
            await ctx.reply(`隊伍中沒有此寶可夢`)
        }
    }else{
        await ctx.reply('金錢不足(需要1000元)')
    }





};

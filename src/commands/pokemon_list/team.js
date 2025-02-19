import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { user_love } from './user_save/pokemon_user.js'
import { pokemon_list } from 'pokemon_list.js'
import { pid } from 'process';
const fs = require('fs');
const path = require('path');

export const command = new SlashCommandBuilder()
    .setName('team')
    .setDescription('列出已捕獲的神奇寶貝');
    
    
export const action = async (ctx) => {

    let len = []
    let p_id = []
    let rar = []

    function getPokemonData(userId) {

            const filePath = path.join(__dirname, 'pokemon_data.txt');

            let pokemonData
            const fileContent = fs.readFileSync(filePath, 'utf8');
            if (fileContent) {
                // 将文件内容按行拆分，并去除空行，然后将 JSON 字符串解析为对象数组
                const lines = fileContent.split('\n').filter(Boolean);
                pokemonData = lines.map(line => JSON.parse(line));
                // 返回与当前用户 ID 匹配的 Pokémon 数据
                for(let i=0;i<pokemonData.length;i++){
                    if(pokemonData[i].id === userId){
                        len.push(pokemonData[i].url)
                        p_id.push(pokemonData[i].p_id)
                        rar.push(pokemonData[i].rarity)
                    }
                }
            }

   
        return [];
    }
    
    const user = ctx.user;

    console.log(`${user.globalName} 正在查看隊伍`)

    getPokemonData(user.id);

    let img1 = '無捕獲'
    let img2 = '無捕獲'
    let img3 = '無捕獲'
    let img4 = '無捕獲'
    let img5 = '無捕獲'

    console.log(len)

    let name = user_love(user.id)
    name = name.toString().padStart(3,'0');


    if(len.length === 1){

        img1 = len[0]
        await ctx.reply(`${user}的隊伍:\n上鎖神奇寶貝:${pokemon_list(name).name}\n![編號:${p_id[0]}(${rar[0]})](${img1})`)
        
    }else if(len.length === 2){

        img1 = len[0]
        img2 = len[1]
        await ctx.reply(`${user}的隊伍:\n上鎖神奇寶貝:${pokemon_list(name).name}\n![編號:${p_id[0]}(${rar[0]})](${img1})\n![編號:${p_id[1]}(${rar[1]})](${img2})`);
    }else if(len.length === 3){

        img1 = len[0]
        img2 = len[1]
        img3 = len[2]
        await ctx.reply(`${user}的隊伍:\n上鎖神奇寶貝:${pokemon_list(name).name}\n![編號:${p_id[0]}(${rar[0]})](${img1})\n![編號:${p_id[1]}(${rar[1]})](${img2})\n![編號:${p_id[2]}(${rar[2]})](${img3})`);

    }else if(len.length === 4){

        img1 = len[0]
        img2 = len[1]
        img3 = len[2]
        img4 = len[3]
        await ctx.reply(`${user}的隊伍:\n上鎖神奇寶貝:${pokemon_list(name).name}\n![編號:${p_id[0]}(${rar[0]})](${img1})\n![編號:${p_id[1]}(${rar[1]})](${img2})\n![編號:${p_id[2]}(${rar[2]})](${img3})\n![編號:${p_id[3]}(${rar[3]})](${img4})`);

    }else if(len.length === 5){

        img1 = len[0]
        img2 = len[1]
        img3 = len[2]
        img4 = len[3]
        img5 = len[4]
        await ctx.reply(`${user}的隊伍:\n上鎖神奇寶貝:${pokemon_list(name).name}\n![編號:${p_id[0]}(${rar[0]})](${img1})\n![編號:${p_id[1]}(${rar[1]})](${img2})\n![編號:${p_id[2]}(${rar[2]})](${img3})\n![編號:${p_id[3]}(${rar[3]})](${img4})\n![編號:${p_id[4]}(${rar[4]})](${img5})`);
        
    }else{
        await ctx.reply('無捕獲任何一隻神奇寶貝')
    }




};

import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { user_love_check,user_coin_check,update_user_love,update_user_coin } from './user_save/pokemon_user.js'
import { pokemon_list } from 'pokemon_list.js'
const fs = require('fs');
const path = require('path');

export const command = new SlashCommandBuilder()
    .setName('lock')
    .setDescription('上鎖神奇寶貝(扣100)')
    .addStringOption(option => option // 添加玩家1參數
    .setName('pokemon_id') // 參數名稱
    .setDescription('請輸入編號') // 參數描述
    .setRequired(true)) // 參數是否必需

    
export const action = async (ctx) => {

    let pokemon_id;

    let user = ctx.user
    let search = ctx.options.getString('pokemon_id')

    function pokemon_search(id ,search) {

        const filePath = path.join(__dirname, 'pokemon_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
       
           
        let lines = fileContent.split('\n').filter(Boolean);
            

        let regexp = new RegExp(search);
            
        for (let i = lines.length - 1; i >= 0; i--) {
                
            if (regexp.test(lines[i])) {
                    
                let pokemonData = JSON.parse(lines[i]);
                if (pokemonData.id === id) {
                    if (pokemonData.p_id === search) {
                        pokemon_id = pokemonData.p_id
                        pokemon_id = pokemon_id.toString().padStart(3,'0');

                        return true
                    }
                }
            }
        }

        return false
    }
    
    let name = search.toString().padStart(3,'0');
    console.log(name)

    if(pokemon_search(user.id,search)){
        if(user_coin_check(user.id,100)){
            if(user_love_check(user.id,search)){
                await ctx.reply(`你以將 ${pokemon_list(name).name} 上鎖`)
            }else{
                update_user_love(user.id,search)
                update_user_coin(user.id,-100)
                await ctx.reply(`${pokemon_list(name).name} 上鎖成功`)
            }
        }else{
            await ctx.reply('金錢不足(需要100元)')
        }
    }else{
        await ctx.reply(`你隊伍中沒有 ${pokemon_list(name).name}`)
    }

};

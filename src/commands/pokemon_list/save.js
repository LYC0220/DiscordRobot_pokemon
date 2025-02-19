import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { update_user_save,update_user_lv,user_coin_check,update_user_coin } from './user_save/pokemon_user.js'
const fs = require('fs');
const path = require('path');

// 定义最大允许保存的 Pokémon 数量
const MAX_POKEMON_COUNT = 5;

export const command = new SlashCommandBuilder()
    .setName('save')
    .setDescription('抓取神奇寶貝');

export const action = async(ctx) => {


    const user = ctx.user;

    console.log(`${user.globalName} 正在抓神奇寶貝`)

    let err;
    if(user_coin_check(user.id,10)){
        update_user_coin(user.id,-10)
        err = true
    }else{
        err = false
    }

    let reply = false
    let n_save = false
    let run = false

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

        if(url === ''){
            reply = true
            return false
        }

        const count = getPokemonDataCount(userId);
        if (count >= MAX_POKEMON_COUNT) {
            return false; // 达到最大数量，不保存
        }

        let rarity_x
        switch(rarity){
            case '劣質':
                rarity_x = 3
                break;
            case '一般':
                rarity_x = 4
                break;
            case '高級':
                rarity_x = 5
                break;
            case '稀有':
                rarity_x = 6
                break;
            case '傳奇':
                rarity_x = 7
                break;
        }

        
        let x = Math.floor(Math.random() * 10 + 1)
        if(x > rarity_x){
            
            update_user_save(user.id,1)
            update_user_lv(user.id,5)
            update_user_coin(user.id,10)


            let pokemonData = { 'id': userId, 'url': url, 'p_id':x_id, 'rarity':rarity};
            let dirt = JSON.stringify(pokemonData) + '\n';

            // 将 Pokémon 数据追加到文件中
            const filePath = path.join(__dirname, 'pokemon_data.txt');
            fs.appendFileSync(filePath, dirt);

            return true;
        }else{
            n_save = true

            let y = Math.floor(Math.random() * 10 + 1)
            if(y>7){
                process.env.LAST_P = ''
                run = true
            }


            return false;
        }

    }


    let x = process.env.LAST_P;
    let x_id = process.env.LAST_ID;
    let rarity = process.env.RARITY;

    if(err){

    if(savePokemonData(x, user.id ,x_id,rarity)) {
        let embed;
        process.env.LAST_P = ''
        embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle(`捕獲神奇寶貝!!!`)
            .setImage(`${x}`);

        await ctx.reply({ embeds: [embed] });
    }else {

        if(n_save){
            if(run){
                await ctx.reply('捕捉失敗 神奇寶貝已逃走了~')
            }else{
                await ctx.reply(`捕捉失敗 神奇寶貝尚未逃走!`)
            }
        }else{
            if(reply){
                await ctx.reply(`神奇寶貝被抓走或逃走了`)
            }else{
                await ctx.reply(`<@${user.id}>已經捕獲了最大数量的神奇寶貝（${MAX_POKEMON_COUNT}只）。`);
            }
        }


    }
    }else{
        await ctx.reply('金額不足(丟一顆球需要10元)')
    }
};

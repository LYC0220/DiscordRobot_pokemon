import { SlashCommandBuilder,EmbedBuilder } from 'discord.js';
import { pokemon_list } from 'pokemon_list.js'

// 創建斜線指令
export const command = new SlashCommandBuilder()
    .setName('search')
    .setDescription('查詢神奇寶貝')
    .addStringOption(option =>option
    .setName('pokemon_id')
    .setDescription('神奇寶貝ID')
    .setRequired(true))

// 定義斜線指令的動作
export const action = async (ctx) => {
    // 圖片路徑（使用絕對或相對路徑）

    let pokemomID = ctx.options.getString('pokemon_id')          
    pokemomID = pokemomID.toString().padStart(3,'0');

    let pokemonData = pokemon_list(pokemomID);
    let id;
    let name;
    let jname;
    if (pokemonData) {
        id = pokemonData.id;
        name = pokemonData.name;
        jname = pokemonData.japaneseName;
     }

    let embed
    embed = new EmbedBuilder()
            .setColor('#ffffff')
            .setTitle(`${name} ID:${id}`)
            .setImage(`https://s1.52poke.com/assets/sprite/gen5/${pokemomID}.gif`)
            .setTimestamp()
    await ctx.reply({ embeds: [embed] });
    

};

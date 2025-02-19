import { SlashCommandBuilder,EmbedBuilder } from 'discord.js';
import { pokemon_list } from 'pokemon_list.js'

// 創建斜線指令
export const command = new SlashCommandBuilder()
    .setName('help')
    .setDescription('所有指令');

// 定義斜線指令的動作
export const action = async (ctx) => {
    // 圖片路徑（使用絕對或相對路徑）
    let embed
    embed = new EmbedBuilder()
            .setColor('#15ff09')
            .setTitle(`所有指令`)
            .addFields(
                { name: '/help', value: `所有指令`},
                { name: '/guide', value: `遊玩方式`},
                { name: '/user', value: `查看資料`},
                { name: '/pokemon', value: `發現神奇寶貝`},
                { name: '/save', value: `捕獲神奇寶貝`},
                { name: '/lock {自己神奇寶貝ID}', value: `上鎖神奇寶貝`},
                { name: '/del {神奇寶貝ID}', value: `放生神奇寶貝`},
                { name: '/sell {神奇寶貝ID}', value: `賣神奇寶貝`},
                { name: '/lv {自己神奇寶貝ID}', value: `提升神奇寶貝品質`},
                { name: '/team', value: `查看隊伍`},
                { name: '/viewteam {@user}:', value: `查看別人隊伍`},
                { name: '/gift {自己神奇寶貝ID} {@user}:', value: `將自己的神奇寶貝給別人`},
                { name: '/vs {自己神奇寶貝ID} {@user} {別人神奇寶貝ID}', value: `神奇寶貝對戰`},
                { name: '/fight {自己神奇寶貝ID}', value: `遭遇戰`},
                { name: '/BOSS', value: `挑戰BOSS`},
                { name: '/search {神奇寶貝ID}', value: `查詢神奇寶貝`},
            )
            .setImage(`https://s1.52poke.com/assets/sprite/gen5/094.gif`)

    await ctx.reply({ embeds: [embed] });
};

import { SlashCommandBuilder,EmbedBuilder } from 'discord.js';


// 創建斜線指令
export const command = new SlashCommandBuilder()
    .setName('guide')
    .setDescription('遊玩方式');

// 定義斜線指令的動作
export const action = async (ctx) => {
    // 圖片路徑（使用絕對或相對路徑）
    let embed
    embed = new EmbedBuilder()
            .setColor('#15ff09')
            .setTitle(`遊玩方式`)
            .addFields(
                { name: '錢的用途', value: `1.進行玩家對戰需要(100)元\n2.丟一顆球捕獲需要(10)元\n3.可用(1000)元提升品質[最高:不可能的傳說]\n4.可用(100)元將自己某隻神奇寶貝上鎖`},
                { name: '賺錢方法', value: `1.完成遭遇戰(/fight)\n2.捕獲神奇寶貝(/save)\n3.玩家對戰 挑戰方(贏+150 輸-100) 被挑戰方(贏+50 輸-0)\n4.賣神奇寶貝(看品質 越好錢越高 -5經驗值)`},
                { name: '獲得經驗方法', value: `1.完成遭遇戰+20(/fight)\n2.捕獲神奇寶貝+5(/save)\n3.玩家對戰 挑戰方(贏+150 輸-100) 被挑戰方(贏+100 輸+0)`},
                { name: '稀有度', value: `劣質 < 一般 < 高級 < 稀有 < 傳奇 < 傳奇+ < 傳奇++ < 不可能的傳說 < BOSS\n不同稀有度 捕獲率不同 戰鬥能力也不同`},
                { name: '上鎖神奇寶貝', value: `不會被挑戰 成為玩家最愛的神奇寶貝(只能有一隻)`},
            )
            .setImage(`https://s1.52poke.com/assets/sprite/gen5/094.gif`)

    await ctx.reply({ embeds: [embed] });
};

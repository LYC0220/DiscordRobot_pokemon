import { SlashCommandBuilder,EmbedBuilder, User } from 'discord.js';

const fs = require('fs');
const path = require('path');

// 創建斜線指令
export const command = new SlashCommandBuilder()
    .setName('user')
    .setDescription('查看訓練家資訊')
    .addUserOption(option =>option
    .setName('user_id')
    .setDescription('玩家ID')
    .setRequired(true))

// 定義斜線指令的動作
export const action = async (ctx) => {
    // 圖片路徑（使用絕對或相對路徑）

    const user = ctx.options.getUser('user_id');
    let err = true
    let user_data = []

    function getPokemonData(userId) {

        const filePath = path.join(__dirname,'..','..','..','user_save', 'user_data.txt'); // 第一个参数是目录的路径，使用__dirname获取当前文件所在目录


        let userdata
        const fileContent = fs.readFileSync(filePath, 'utf8');
        if (fileContent) {

            // 将文件内容按行拆分，并去除空行，然后将 JSON 字符串解析为对象数组
            const lines = fileContent.split('\n').filter(Boolean);
            userdata = lines.map(line => JSON.parse(line));
            // 返回与当前用户 ID 匹配的 Pokémon 数据
            for(let i=0;i<userdata.length;i++){
                if(userdata[i].id === userId){
                    user_data = userdata[i];
                    err = false
                }
            }
        }


   
    }

    getPokemonData(user.id)

    if(err){
        await ctx.reply(`<@${user.id}> 還沒成為訓練師`);
    }else{

    let lv = Math.floor(user_data.lv /234)
    let love = user_data.love
    love = love.toString().padStart(3,'0');

    let embed
    embed = new EmbedBuilder()
            .setColor('#000000')
            .setTitle(`${user.globalName} 訓練家`)
            .setThumbnail(`https://s1.52poke.com/assets/sprite/gen5/${love}.gif`)
            .addFields({ name: `訓練家等級:`, value: `${lv}  (總經驗值:${user_data.lv})`})
            .addFields({ name: `持有金錢:`, value: `${user_data.coin}`})
            .addFields({ name: `捕獲次數:`, value: `${user_data.save}`})
            .addFields({ name: `遭遇戰勝利次數:`, value: `${user_data.winf}`})
            .addFields({ name: `玩家對戰勝利次數:`, value: `${user_data.win}`})

    await ctx.reply({ embeds: [embed] });

    if(err){
    }
    }
};

import { SlashCommandBuilder } from 'discord.js';
import { user_love_check } from './user_save/pokemon_user.js'
const fs = require('fs');
const path = require('path');

export const command = new SlashCommandBuilder()
    .setName('del')
    .setDescription('輸入編號刪除神奇寶貝')
    .addStringOption(option => option // 添加玩家1參數
    .setName('pockemon_id') // 參數名稱
    .setDescription('請輸入編號') // 參數描述
    .setRequired(true)) // 參數是否必需

    
export const action = async (ctx) => {

    const user = ctx.user;
    const search = ctx.options.getString('pockemon_id');

if(user_love_check(user.id,search)){
    await ctx.reply('神奇寶貝已上鎖 無法賣出')
}else{


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
    

    if(deleteLinesMatchingPatternAndId(user.id,search)){
        await ctx.reply(`成功刪除編號${search}`)
    }else{
        await ctx.reply(`刪除失敗`)
    }


};
}

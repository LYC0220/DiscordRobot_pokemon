import { SlashCommandBuilder,EmbedBuilder } from 'discord.js';
import { pokemon_list } from 'pokemon_list.js'
import { update_user_lv } from './user_save/pokemon_user.js'

// 創建斜線指令
export const command = new SlashCommandBuilder()
    .setName('pokemon')
    .setDescription('隨機抽神奇寶貝');

// 定義斜線指令的動作
export const action = async (ctx) => {
    // 圖片路徑（使用絕對或相對路徑）
    let x = Math.floor(Math.random() * 649) + 1;
    x = x.toString().padStart(3, '0');
    let user = ctx.user

    console.log(`${user.globalName} 發現神奇寶貝`)

    try {

        // function getRandomColor() {
        //     // 生成随机的 R、G、B 分量
        //     const r = Math.floor(Math.random() * 256); // 生成 0 到 255 之间的随机数
        //     const g = Math.floor(Math.random() * 256);
        //     const b = Math.floor(Math.random() * 256);
        
        //     // 将 R、G、B 分量转换为十六进制，并拼接成颜色代码
        //     const color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        
        //     return color;
        // }
        // const randomColor = getRandomColor();

        let pokemonData = pokemon_list(x);
        let id;
        let name;
        let jname;
        if (pokemonData) {
            id = pokemonData.id;
            name = pokemonData.name;
            jname = pokemonData.japaneseName;
        }

        let rarity = ''
        let y = Math.floor(Math.random() * 10) +1;
        if(y > 9){
            x = `${x}s`
        }
            let color = ''
            let randomNumber = Math.random() * 100
            if (randomNumber < 50) {
                rarity = "劣質";
                color = '#000000'
            } else if (randomNumber < 70) {
                rarity = "一般";
                color = '#ffffff'
            } else if (randomNumber < 85) {
                rarity = "高級";
                color = '#ffbb00'
            } else if (randomNumber < 95) {
                rarity = "稀有";
                color = '#ff00e1'
            } else {
                rarity = "傳奇";
                color = '#ff0000'
            }

        
        process.env.LAST_P = `https://s1.52poke.com/assets/sprite/gen5/${x}.gif`;
        process.env.LAST_ID = parseInt(id)
        process.env.RARITY = `${rarity}`

        let embed;
        if(y > 9){
            update_user_lv(user.id,2)
            embed = new EmbedBuilder()
            .setColor('#ffea61')
            .setTitle(`發現閃光神奇寶貝(${rarity})`)
            .addFields(
                { name: 'ID:', value: `${id}`},
                { name: '中文名稱:', value: `閃光${name}`},
                { name: '日文名稱:', value: `フラッシュ${jname}`},
            )
            .setImage(`https://s1.52poke.com/assets/sprite/gen5/${x}.gif`)
            .setTimestamp()
        }else{
            update_user_lv(user.id,1)
            embed = new EmbedBuilder()
            .setColor(`${color}`)
            .setTitle(`發現神奇寶貝(${rarity})`)
            .addFields(
                { name: 'ID:', value: `${id}`},
                { name: '中文名稱:', value: `${name}`},
                { name: '日文名稱:', value: `${jname}`},
            )
            .setImage(`https://s1.52poke.com/assets/sprite/gen5/${x}.gif`)
            .setTimestamp()
        }

        
        await ctx.reply({ embeds: [embed] });


    } catch (error) {
        console.error('發送圖片訊息時出現錯誤：', error);
    }
};

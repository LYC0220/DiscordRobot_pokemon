import { SlashCommandBuilder,EmbedBuilder } from 'discord.js';
import { pokemon_list } from 'pokemon_list.js'
import { pokemon_skill } from 'pokemon_skill.js'
import { update_user_coin,update_user_winf,update_user_lv,user_coin_check } from './user_save/pokemon_user.js'


const fs = require('fs');
const path = require('path');

// 定義斜線指令
export const command = new SlashCommandBuilder()
    .setName('fight') // 指令名稱
    .setDescription('進行遭遇戰') // 指令描述
    .addStringOption(option =>option
    .setName('my_pokemon_id') // 參數名稱
    .setDescription('你自己的神奇寶貝編號') // 參數描述
    .setRequired(true))

// 定義斜線指令的動作
export const action = async (ctx) => {

    let coin;
    let ans;

    let e = false
    let err = 0

    let url =''

    let text =''

    const user = ctx.user;

    console.log(`${user.globalName} 進行遭遇戰`)

    let user_pokemon_id 

    let search = ctx.options.getString('my_pokemon_id')

    if(search === ''){
        err = 5
    }

    let user_pokemon 

    let user_rarity;
    let pokemon_rarity;


    function user_pokemon_search(id ,search) {
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
                            user_pokemon_id = pokemonData.p_id
                            user_pokemon_id = user_pokemon_id.toString().padStart(3,'0');
                            user_pokemon = pokemon_list(user_pokemon_id)

                            user_rarity = pokemonData.rarity
                            e = true
                            break;
                        }
                    }
                }
            }
            
        }
        if(e){
            e = false
        }else{
            err = 1
        }
    }

    let pokemon_id;
    let pokemon_name;
    let color;
    let pokemon_jname;

    function ctreat_pokemon(){
        let x = Math.floor(Math.random() * 649) + 1;
        x = x.toString().padStart(3, '0');

        let pokemonData = pokemon_list(x);

        if (pokemonData) {
            pokemon_id = pokemonData.id;
            pokemon_name = pokemonData.name;
            pokemon_jname = pokemonData.japaneseName;
        }

        let randomNumber = Math.random() * 100
            if (randomNumber < 50) {
                pokemon_rarity = "劣質";
                color = '#000000'
            } else if (randomNumber < 70) {
                pokemon_rarity = "一般";
                color = '#ffffff'
            } else if (randomNumber < 85) {
                pokemon_rarity = "高級";
                color = '#ffbb00'
            } else if (randomNumber < 95) {
                pokemon_rarity = "稀有";
                color = '#ff00e1'
            } else {
                pokemon_rarity = "傳奇";
                color = '#ff0000'
            }
    }

    user_pokemon_search(user.id,search)
    ctreat_pokemon()

    let x;
    let y;


    let fight = ''
    if(err === 0){
        

        let user_Health = 10;
        let PK_user_Health = 10;

        let user_up = 2
        let PK_user_up = 2

        let user_hp = 0.5
        let PK_user_hp = 0.5

        let user_hide = false
        let PK_user_hide = false

        switch(user_rarity){
            case '劣質':
                x = 10
                user_Health = 10
                break;
            case '一般':
                x = 15
                user_Health = 15
                break;
            case '高級':
                x = 20
                user_Health = 20
                user_hp = 1
                break;
            case '稀有':
                x = 25
                user_Health = 25
                break;
            case '傳奇':
                x = 30
                user_Health = 30
                user_up = 3
                user_hp = 1
                break;
            case '傳奇+':
                x = 40
                user_Health = 40
                user_up = 3
                user_hp = 1.5
                break;
            case '傳奇++':
                x = 50
                user_Health = 50
                user_up = 3
                user_hp = 2
                break;
            case '不可能的傳說':
                x = 60
                user_Health = 60
                user_up = 4
                user_hp = 2
                break;
            case 'BOSS':
                x = 70
                user_Health = 70
                user_up = 5
                user_hp = 2.5
                break;
        }
        switch(pokemon_rarity){
            case '劣質':
                y = 10
                PK_user_Health = 10
                break;
            case '一般':
                y = 15
                PK_user_Health = 15
                break;
            case '高級':
                y = 20
                PK_user_Health = 20
                break;
            case '稀有':
                y = 25
                PK_user_Health = 25
                break;
            case '傳奇':
                y = 30
                PK_user_Health = 30
                PK_user_up = 3
                PK_user_hp = 1
                break;
        }

        // 打印战斗开始消息

        // 进行战斗，直到有一方血量耗尽
        while (user_Health > 0 && PK_user_Health > 0) {
            
        // 用户攻击
            let turn = Math.random() < 0.5;
            if(turn){

                let user_x = pokemon_skill()
                fight += `${user_pokemon.name} 使出 ${user_x}\n`
                switch(user_x){
                    case '(搖尾巴)':
                        PK_user_hp--;
                        fight += `${pokemon_name} 放下了戒心\n\n`
                        break;
                    case '(原地嚇到)':
                        fight += `${user_pokemon.name} 呆了一回合\n\n`
                        break;
                    case '(你媽死了)':
                        PK_user_Health = PK_user_Health -15;
                        fight += `${pokemon_name} 直接難過血量-15[剩餘血量(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(大叫)':
                        user_Health --;
                        fight += `${user_pokemon.name} 叫的喉嚨很痛 血量-1[剩餘血量(${user_Health}/${x})]\n\n`
                        break;
                    case '(大爆炸)':
                        PK_user_Health = 5
                        user_Health = 5
                        fight += `${pokemon_name}跟${user_pokemon.name} 都剩5滴 [${user_pokemon.name}(${user_Health}/${x})][${pokemon_name}(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(自我再生)':
                        if(user_Health === x){
                            fight += `${user_pokemon.name} 血已經滿了\n\n`
                        }else{
                            user_Health = user_Health + 5;
                            fight += `${user_pokemon.name} 補了5滴血[剩餘血量(${user_Health}/${x})]\n\n`
                        }
                        break;
                    case '(被紙割傷)':
                        user_Health = user_Health - 10
                        fight += `${user_pokemon.name} [剩餘血量(${user_Health}/${x})]\n\n`
                        break;
                    case '(劍舞)':
                        user_up = user_up +2;
                        fight += `${user_pokemon.name} 攻擊力+2 [現在攻擊力=${user_up}]\n\n`
                        break;
                    case '(能力增強)':
                        user_up ++;
                        user_hp = user_hp + 0.5;
                        fight += `${user_pokemon.name} 攻擊力+1 防禦力+0.5 [現在攻擊力=${user_up}] [現在防禦力=${user_hp}]\n\n`
                        break
                    case '(變硬)':
                        user_hp = user_hp +0.5
                        fight += `${user_pokemon.name} 防禦力+0.5 [現在防禦力=${user_hp}]\n\n`
                        break;
                    case '(地震)':
                        user_Health = user_Health - user_up;
                        PK_user_Health = PK_user_Health - PK_user_up;
                        fight += `雙方血量減少 [${user_pokemon.name}(${user_Health}/${x})][${pokemon_name}(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(虛張聲勢)':
                        PK_user_hp --
                        PK_user_up ++
                        fight += `${pokemon_name}攻擊力+1 防禦力-1 [現在攻擊力=${user_up}] [現在防禦力=${user_hp}]\n\n`
                        break;
                    case '(緊急治療)':
                        user_Health = user_Health + 10
                        user_hp = user_hp - 2
                        fight += `${user_pokemon.name}血量回滿 防禦力-2 [剩餘血量(${user_Health}/${x})] [現在防禦力=${user_hp}]\n\n`
                        break;
                    case '(血量平衡)':
                        PK_user_Health = y/2
                        user_Health = x/2
                        fight += `雙方血量 = 一半 [${user_pokemon.name}(${x/2}/${x})][${pokemon_name}(${y/2}/${y})]\n\n`
                        break;
                    case '(吸血)':
                        PK_user_Health = PK_user_Health - user_up
                        user_Health = user_Health + user_up
                        fight += `${user_pokemon.name} 吸了對方${user_up}滴血 [${user_pokemon.name}(${user_Health}/${x})][${pokemon_name}(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(守住)':
                        user_hide = true
                        fight += `${user_pokemon.name} 可躲避下次攻擊\n\n`
                        break;
                    case '(硬 就完事了)':
                        user_Health = user_Health/2
                        user_up = user_up - 2
                        user_hp = user_hp + 2
                        fight += `${user_pokemon.name}血量/2 攻擊力-2 防禦力+2 [剩餘血量(${user_Health}/${x})] [現在攻擊力=${user_up}] [現在防禦力=${user_hp}]\n\n`
                        break;
                    default:
                        let userAttack = Math.random() < 0.8; // 80%的命中率
                        if (userAttack && PK_user_hide === false) {
        
                            let number = (user_up - PK_user_hp)
                            if(number<=0){
                                number = 1;
                            }

                            let double_attack = Math.random() < 0.3
                            if(double_attack){
                                number ++;
                                PK_user_Health = PK_user_Health - number;
                                fight += ` ${pokemon_name} 被擊中了要害[剩餘血量(${PK_user_Health}/${y})]\n\n`
                            }else{

                                PK_user_Health = PK_user_Health - number;
                                fight += ` ${pokemon_name} 被擊中了[剩餘血量(${PK_user_Health}/${y})]\n\n`
                            }
        
                        } else {
                            fight += ` ${pokemon_name} 躲開了攻擊\n\n`
                            PK_user_hide = false
                        }
                        break;
                }

            }else{

                let user_x = pokemon_skill()
                fight += `${pokemon_name} 使出 ${user_x}\n`
                switch(user_x){
                    case '(搖尾巴)':
                        user_hp--;
                        fight += `${user_pokemon.name} 放下了戒心\n\n`
                        break;
                    case '(原地嚇到)':
                        fight += `${pokemon_name} 呆了一回合\n\n`
                        break;
                    case '(你媽死了)':
                        user_Health = user_Health -15;
                        fight += `${user_pokemon.name} 直接難過血量-15[剩餘血量(${user_Health}/${x})]\n\n`
                        break;
                    case '(大叫)':
                        PK_user_Health --;
                        fight += `${pokemon_name} 叫的喉嚨很痛 血量-1[剩餘血量(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(大爆炸)':
                        PK_user_Health = 5
                        user_Health = 5
                        fight += `${pokemon_name}跟${user_pokemon.name} 都剩5滴 [${user_pokemon.name}(${user_Health}/${x})][${pokemon_name}(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(自我再生)':
                        if(PK_user_Health === 10){
                            fight += `${pokemon_name} 血已經滿了\n\n`
                        }else{
                            PK_user_Health = PK_user_Health + 2;
                            fight += `${pokemon_name} 補了5滴血[剩餘血量(${PK_user_Health}/${y})]\n\n`
                        }
                        break;
                    case '(被紙割傷)':
                        PK_user_Health = PK_user_Health - 10
                        fight += `${pokemon_name} [剩餘血量(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(劍舞)':
                        PK_user_up = PK_user_up +2;
                        fight += `${pokemon_name} 攻擊力+2 [現在攻擊力=${PK_user_up}]\n\n`
                        break;
                    case '(能力增強)':
                        PK_user_up ++;
                        PK_user_hp = PK_user_hp + 0.5;
                        fight += `${pokemon_name} 攻擊力+1 防禦力+0.5 [現在攻擊力=${PK_user_up}] [現在防禦力=${PK_user_hp}]\n\n`
                        break
                    case '(變硬)':
                        PK_user_hp = PK_user_hp +0.5
                        fight += `${pokemon_name} 防禦力+0.5 [現在防禦力=${PK_user_hp}]\n\n`
                        break;
                    case '(地震)':
                        user_Health = user_Health - user_up;
                        PK_user_Health = PK_user_Health - PK_user_up;
                        fight += `雙方血量減少 [${user_pokemon.name}(${user_Health}/${x})][${pokemon_name}(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(虛張聲勢)':
                        user_hp --
                        user_up ++
                        fight += `${user_pokemon.name}攻擊力+1 防禦力-1 [現在攻擊力=${user_up}] [現在防禦力=${user_hp}]\n\n`
                        break;
                    case '(緊急治療)':
                        PK_user_Health = PK_user_Health + 10
                        PK_user_hp = PK_user_hp - 2
                        fight += `${pokemon_name}血量+10 防禦力-2 [剩餘血量(${PK_user_Health}/${y})] [現在防禦力=${PK_user_hp}]\n\n`
                        break;
                    case '(血量平衡)':
                        PK_user_Health = y/2
                        user_Health = x/2
                        fight += `雙方血量 = 一半 [${user_pokemon.name}(${x/2}/${x})][${pokemon_name}(${y/2}/${y})]\n\n`
                        break;
                    case '(吸血)':
                        PK_user_Health = PK_user_Health + PK_user_up
                        user_Health = user_Health - PK_user_up
                        fight += `${pokemon_name} 吸了對方${PK_user_up}滴血 [${user_pokemon.name}(${user_Health}/${x})][${pokemon_name}(${PK_user_Health}/${y})]\n\n`
                        break;
                    case '(守住)':
                        PK_user_hide = true
                        fight += `${pokemon_name} 可躲避下次攻擊\n\n`
                        break;
                    case '(硬 就完事了)':
                        PK_user_Health = PK_user_Health/2
                        PK_user_up = PK_user_up - 2
                        PK_user_hp = PK_user_hp + 2
                        fight += `${pokemon_name} 血量/2 攻擊力-2 防禦力+2 [剩餘血量(${PK_user_Health}/${y})] [現在攻擊力=${PK_user_up}] [現在防禦力=${PK_user_hp}]\n\n`
                        break;
                    default:
                        let userAttack = Math.random() < 0.8; // 80%的命中率
                        if (userAttack && user_hide === false) {
        
                            let number = (PK_user_up - user_hp)
                            if(number<=0){
                                number = 1;
                            }

                            let double_attack = Math.random() < 0.3
                            if(double_attack){
                                number++;
                                user_Health = user_Health - number;
                                fight += ` ${user_pokemon.name} 被擊中了要害[剩餘血量(${user_Health}/${x})]\n\n`
                            }else{
                                user_Health = user_Health - number;
                                fight += ` ${user_pokemon.name} 被擊中了[剩餘血量(${user_Health}/${x})]\n\n`
                            }
        
                        } else {
                            fight += ` ${user_pokemon.name} 躲開了攻擊\n\n`
                            user_hide = false
                        }
                        break;
                }
            }
        }

    // 判断战斗结果并发送消息
        if (user_Health <= 0 && PK_user_Health <= 0) {
            fight += ` 雙方倒地\n`
            ans = '平手'
            coin = 0
        } else if (user_Health <= 0) {
            fight += ` ${pokemon_name} 獲勝\n`
            url = pokemon_id

            where(pokemon_name,user_pokemon.id)

            let x = Math.floor(Math.random() * 10)+1
            let y = Math.floor(Math.random() * 20)+1
            coin = -(y*x)
            update_user_coin(user.id, coin)
            ans = '失敗'

        } else if(PK_user_Health <=0){
            fight += ` ${user_pokemon.name} 獲勝\n`
            url = user_pokemon.id

            where(user_pokemon.name,pokemon_id)
            update_user_winf(user.id,1)
            ans = '勝利'
            let x = Math.floor(Math.random() * 10)+1

            switch(pokemon_rarity){
                case '劣質':
                    coin = 2 * x
                    update_user_coin(user.id,coin)
                    update_user_lv(user.id,20)
                    break;
                case '一般':
                    coin = 4 * x
                    update_user_coin(user.id,coin)
                    update_user_lv(user.id,40)
                    break;
                case '高級':
                    coin = 6 * x
                    update_user_coin(user.id,coin)
                    update_user_lv(user.id,60)
                    break;
                case '稀有':
                    coin = 7 * x
                    update_user_coin(user.id,coin)
                    update_user_lv(user.id,80)
                    break;
                case '傳奇':
                    coin = 8 * x
                    update_user_coin(user.id,coin)
                    update_user_lv(user.id,100)
                    break;
            }

        }
    }

    function where(name,id){
        let go = Math.floor(Math.random() * 5) + 1
        id = parseInt(id,10).toString()
        switch(go){
            case 1:
                text += `(你跟${name}根本天生一對)`
                break;
            case 2:
                text += `(${name}覺得輕輕鬆鬆)`
                break;
            case 3:
                text += `(${name}覺得無聊)`
                break;
            case 4:
                text += `(${name}:嫩逼??)`
                break;
            case 5:
                text += `(${name}:笑死 就這樣?)`
                break;
        }
    }


    if(err === 1){
        await ctx.reply('我方編號輸入錯誤')
    }
    else if(err === 0){
        let embed
        if(fight.length >= 1024){
            embed = new EmbedBuilder()
            .setColor(`${color}`)
            .setThumbnail(`https://s1.52poke.com/assets/sprite/gen5/${pokemon_id}.gif`)
            .setTitle(`${user.globalName} 遭遇了 ${pokemon_name}(${pokemon_rarity})`)
            .addFields({ name: `${user.globalName}戰隊派出:`, value: `${user_pokemon.name}(${user_rarity})`},)
            .addFields({ name: `對戰規則`, value: `與野生神奇寶貝對戰\n(輸-20元 贏+20元 並獲得經驗值)\n`},)
            .addFields({ name: `血量`, value: `${user_pokemon.name}(${user_rarity}): 血量:${x}\n${pokemon_name}(${pokemon_rarity}): 血量:${y}`},)
            .addFields({ name: `對戰過程`, value: `於對戰過程太激烈 系統發生錯誤\n`},)
            .addFields({ name: `結算:`, value: `挑戰 ${pokemon_name}(${pokemon_rarity}) ${ans} 金錢:${coin}元`},)
            .setImage(`https://s1.52poke.com/assets/sprite/gen5/${url}.gif`)
            .setTimestamp()
            .setFooter({ text: `${text}\n`, iconURL: `https://s1.52poke.com/assets/sprite/gen5/${url}.gif` });
            await ctx.reply({ embeds: [embed] });
        }else{
        embed = new EmbedBuilder()
        .setColor(`${color}`)
        .setThumbnail(`https://s1.52poke.com/assets/sprite/gen5/${pokemon_id}.gif`)
        .setTitle(`${user.globalName} 遭遇了 ${pokemon_name}(${pokemon_rarity})`)
        .addFields({ name: `${user.globalName}戰隊派出:`, value: `${user_pokemon.name}(${user_rarity})`},)
        .addFields({ name: `對戰規則`, value: `與野生神奇寶貝對戰\n(輸-20元 贏+20元 並獲得經驗值)\n`},)
        .addFields({ name: `血量`, value: `${user_pokemon.name}(${user_rarity}): 血量:${x}\n${pokemon_name}(${pokemon_rarity}): 血量:${y}`},)
        .addFields({ name: `對戰過程`, value: `\n${fight}`},)
        .addFields({ name: `結算:`, value: `挑戰 ${pokemon_name}(${pokemon_rarity}) ${ans} 金錢:${coin}元`},)
        .setImage(`https://s1.52poke.com/assets/sprite/gen5/${url}.gif`)
        .setTimestamp()
        .setFooter({ text: `${text}\n`, iconURL: `https://s1.52poke.com/assets/sprite/gen5/${url}.gif` });
        await ctx.reply({ embeds: [embed] });
        }
    }else if(err === 5){
        await ctx.reply('發生錯誤')
    }else(
        await ctx.reply('發生錯誤')
    )
};



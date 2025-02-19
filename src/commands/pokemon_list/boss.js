// 导入必要的模块
import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, ActionRowBuilder, ComponentType,EmbedBuilder } from 'discord.js';
import { update_user_coin,update_user_win,update_user_lv,user_coin_check,user_love_check } from './user_save/pokemon_user.js'
import { pokemon_list } from 'pokemon_list.js'
import { pokemon_skill } from 'pokemon_skill.js'
const fs = require('fs');
const path = require('path');
let MAX_POKEMON_COUNT = 5

// 定义斜杠命令
export const command = new SlashCommandBuilder()
    .setName('boss')
    .setDescription('進行BOSS戰') // 指令描述
    .addStringOption(option => option
        .setName('pokemon_id') // 参数名称
        .setDescription('要挑戰BOSS的ID(自己的)') // 参数描述
        .setRequired(true));

// 定义斜杠命令的动作
export const action = async (ctx) => {
    // 图片路径（使用绝对或相对路径）

    const user = ctx.user;

if(user_coin_check(user.id,500)){
    update_user_coin(user.id,-500)
    const search = ctx.options.getString('pokemon_id');

    let who_win = true

    // 调用 user_pokemon_search 函数，并从返回的对象中提取 id 和 rarity
    const { id: pokemon_id, rarity: pokemon_rarity, name: pokemon_name } = user_pokemon_search(user.id, search);

    const select = new StringSelectMenuBuilder()
        .setCustomId('starter')
        .setPlaceholder('我還沒開發BOSS戰!')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('急凍鳥(BOSS)')
                .setDescription('編號144')
                .setValue('144'),
            new StringSelectMenuOptionBuilder()
                .setLabel('閃電鳥(BOSS)')
                .setDescription('編號145')
                .setValue('145'),
            new StringSelectMenuOptionBuilder()
                .setLabel('火焰鳥(BOSS)')
                .setDescription('編號146')
                .setValue('146'),
            new StringSelectMenuOptionBuilder()
                .setLabel('超夢(BOSS)')
                .setDescription('編號150')
                .setValue('150'),
            new StringSelectMenuOptionBuilder()
                .setLabel('洛奇亞(BOSS)')
                .setDescription('編號249')
                .setValue('249'),
            new StringSelectMenuOptionBuilder()
                .setLabel('鳳王(BOSS)')
                .setDescription('編號251')
                .setValue('251'),
            new StringSelectMenuOptionBuilder()
                .setLabel('雷吉洛克(BOSS)')
                .setDescription('編號377')
                .setValue('377'),
            new StringSelectMenuOptionBuilder()
                .setLabel('雷吉艾斯(BOSS)')
                .setDescription('編號378')
                .setValue('378'),
            new StringSelectMenuOptionBuilder()
                .setLabel('雷吉斯奇魯(BOSS)')
                .setDescription('編號379')
                .setValue('379'),
            new StringSelectMenuOptionBuilder()
                .setLabel('蓋歐卡(BOSS)')
                .setDescription('編號382')
                .setValue('382'),
            new StringSelectMenuOptionBuilder()
                .setLabel('固拉多(BOSS)')
                .setDescription('編號383')
                .setValue('383'),
            new StringSelectMenuOptionBuilder()
                .setLabel('烈空坐(BOSS)')
                .setDescription('編號384')
                .setValue('384'),
            new StringSelectMenuOptionBuilder()
                .setLabel('代歐奇希斯(BOSS)')
                .setDescription('編號386')
                .setValue('386'),
            new StringSelectMenuOptionBuilder()
                .setLabel('帝牙盧卡(BOSS)')
                .setDescription('編號483')
                .setValue('483'),
            new StringSelectMenuOptionBuilder()
                .setLabel('帕路奇亞(BOSS)')
                .setDescription('編號484')
                .setValue('484'),
            new StringSelectMenuOptionBuilder()
                .setLabel('席多藍恩(BOSS)')
                .setDescription('編號485')
                .setValue('485'),
            new StringSelectMenuOptionBuilder()
                .setLabel('雷吉奇卡斯(BOSS)')
                .setDescription('編號486')
                .setValue('486'),
            new StringSelectMenuOptionBuilder()
                .setLabel('騎拉帝納(BOSS)')
                .setDescription('編號487')
                .setValue('487'),
            new StringSelectMenuOptionBuilder()
                .setLabel('克雷色利亞(BOSS)')
                .setDescription('編號488')
                .setValue('488'),
            new StringSelectMenuOptionBuilder()
                .setLabel('達克萊伊(BOSS)')
                .setDescription('編號491')
                .setValue('491'),
            new StringSelectMenuOptionBuilder()
                .setLabel('阿爾宙斯(BOSS)')
                .setDescription('編號493')
                .setValue('493'),
            new StringSelectMenuOptionBuilder()
                .setLabel('萊希拉姆(BOSS)')
                .setDescription('編號643')
                .setValue('643'),
            new StringSelectMenuOptionBuilder()
                .setLabel('捷克羅姆(BOSS)')
                .setDescription('編號644')
                .setValue('644'),
            new StringSelectMenuOptionBuilder()
                .setLabel('酋雷姆(BOSS)')
                .setDescription('編號646')
                .setValue('646'),
            new StringSelectMenuOptionBuilder()
                .setLabel('	蓋諾賽克特(BOSS)')
                .setDescription('編號649')
                .setValue('649'),
        );

    const row = new ActionRowBuilder()
        .addComponents(select);

    const response = await ctx.reply({
        content: 'Choose your starter!',
        components: [row],
    });

    const collector = response.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 300000 });

    
    collector.once('collect', async i => {

        let coin = -500
        let fight;

        let max;
        let fight1;
        let fight2;
        let fight3;
    
        let time = 1
        let x
        let y = 70

        let user_Health = 0;
        let PK_user_Health = 0;

        let user_up = 2
        let PK_user_up = 5

        let user_hp = 0.5
        let PK_user_hp = 2.5

        let user_hide = false
        let PK_user_hide = false

        const selection = i.values[0];
        let boss_name =pokemon_list(selection).name;

        if (pokemon_id) {


            if(time === 1){

                user_Health = 10;
                PK_user_Health = 70;
        
                user_up = 2
                PK_user_up = 5
        
                user_hp = 0.5
                PK_user_hp = 2.5
        
                user_hide = false
                PK_user_hide = false
        
                switch(pokemon_rarity){
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


        
                while (user_Health > 0 && PK_user_Health > 0) {
                    
                // 用户攻击
                    let turn = Math.random() < 0.5;


                    if(turn){
        
                        let user_x = pokemon_skill()
                        fight += `${pokemon_name} 使出 ${user_x}\n`
                        switch(user_x){
                            case '(搖尾巴)':
                                PK_user_hp--;
                                fight += `${boss_name} 放下了戒心\n\n`
                                break;
                            case '(原地嚇到)':
                                fight += `${pokemon_name} 呆了一回合\n\n`
                                break;
                            case '(你媽死了)':
                                PK_user_Health = PK_user_Health -15;
                                fight += `${boss_name} 直接難過血量-15[剩餘血量(${PK_user_Health}/80)]\n\n`
                                break;
                            case '(大叫)':
                                user_Health --;
                                fight += `${pokemon_name} 叫的喉嚨很痛 血量-1[剩餘血量(${user_Health}/${x})]\n\n`
                                break;
                            case '(自我再生)':
                                if(user_Health === x){
                                    fight += `${pokemon_name} 血已經滿了\n\n`
                                }else{
                                    user_Health = user_Health + 5;
                                    fight += `${pokemon_name} 補了5滴血[剩餘血量(${user_Health}/${x})]\n\n`
                                }
                                break;
                            case '(被紙割傷)':
                                user_Health = user_Health - 5
                                fight += `${pokemon_name} [剩餘血量(${user_Health}/${x})]\n\n`
                                break;
                            case '(劍舞)':
                                user_up = user_up + 2;
                                fight += `${pokemon_name} 攻擊力+2 [現在攻擊力=${user_up}]\n\n`
                                break;
                            case '(能力增強)':
                                user_up ++;
                                user_hp = user_hp + 0.5;
                                fight += `${pokemon_name} 攻擊力+1 防禦力+0.5 [現在攻擊力=${user_up}] [現在防禦力=${user_hp}]\n\n`
                                break
                            case '(變硬)':
                                user_hp = user_hp +0.5
                                fight += `${pokemon_name} 防禦力+0.5 [現在防禦力=${user_hp}]\n\n`
                                break;
                            case '(虛張聲勢)':
                                PK_user_hp --
                                PK_user_up ++
                                fight += `${boss_name}攻擊力+1 防禦力-1 [現在攻擊力=${user_up}] [現在防禦力=${user_hp}]\n\n`
                                break;
                            case '(緊急治療)':
                                user_Health = user_Health + 10
                                user_hp = user_hp - 2
                                fight += `${pokemon_name}血量回復 防禦力-2 [剩餘血量(${user_Health}/${x})] [現在防禦力=${user_hp}]\n\n`
                                break;
                            case '(血量平衡)':
                                PK_user_Health = y/2
                                user_Health = x/2
                                fight += `雙方血量 = 一半 [${pokemon_name}(${x/2}/${x})][${boss_name}(${y/2}/80)]\n\n`
                                break;
                            case '(吸血)':
                                PK_user_Health = PK_user_Health - user_up
                                user_Health = user_Health + user_up
                                fight += `${pokemon_name} 吸了對方${user_up}滴血 [${pokemon_name}(${user_Health}/${x})][${boss_name}(${PK_user_Health}/80)]\n\n`
                                break;
                            case '(守住)':
                                user_hide = true
                                fight += `${pokemon_name} 可躲避下次攻擊\n\n`
                                break;
                            case '(硬 就完事了)':
                                user_Health = user_Health/2
                                user_up = user_up - 2
                                user_hp = user_hp + 2
                                fight += `${pokemon_name}血量/2 攻擊力-2 防禦力+2 [剩餘血量(${user_Health}/${x})] [現在攻擊力=${user_up}] [現在防禦力=${user_hp}]\n\n`
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
                                        fight += ` ${boss_name} 被擊中了要害[剩餘血量(${PK_user_Health}/80)]\n\n`
                                    }else{
        
                                        PK_user_Health = PK_user_Health - number;
                                        fight += ` ${boss_name} 被擊中了[剩餘血量(${PK_user_Health}/80)]\n\n`
                                    }
                
                                } else {
                                    fight += ` ${boss_name} 躲開了攻擊\n\n`
                                    PK_user_hide = false
                                }
                                break;
                        }
        
                    }else{
        
                        let user_x = pokemon_skill()
                        fight += `${boss_name} 使出 ${user_x}\n`
                        switch(user_x){
                            case '(搖尾巴)':
                                user_hp--;
                                fight += `${pokemon_name} 放下了戒心\n\n`
                                break;
                            case '(原地嚇到)':
                                fight += `${boss_name} 呆了一回合\n\n`
                                break;
                            case '(你媽死了)':
                                user_Health = user_Health - 5;
                                fight += `${pokemon_name} 直接難過血量-5[剩餘血量(${user_Health}/${x})]\n\n`
                                break;
                            case '(大叫)':
                                PK_user_Health --;
                                fight += `${boss_name} 叫的喉嚨很痛 血量-1[剩餘血量(${PK_user_Health}/80)]\n\n`
                                break;
                            case '(自我再生)':
                                if(PK_user_Health === 10){
                                    fight += `${boss_name} 血已經滿了\n\n`
                                }else{
                                    PK_user_Health = PK_user_Health + 5;
                                    fight += `${boss_name} 補了5滴血[剩餘血量(${PK_user_Health}/80)]\n\n`
                                }
                                break;
                            case '(被紙割傷)':
                                PK_user_Health = PK_user_Health - 10
                                fight += `${boss_name} [剩餘血量(${PK_user_Health}/80)]\n\n`
                                break;
                            case '(劍舞)':
                                PK_user_up = PK_user_up +2;
                                fight += `${boss_name} 攻擊力+2 [現在攻擊力=${PK_user_up}]\n\n`
                                break;
                            case '(能力增強)':
                                PK_user_up ++;
                                PK_user_hp = PK_user_hp + 0.5;
                                fight += `${boss_name} 攻擊力+1 防禦力+0.5 [現在攻擊力=${PK_user_up}] [現在防禦力=${PK_user_hp}]\n\n`
                                break
                            case '(變硬)':
                                PK_user_hp = PK_user_hp + 0.5
                                fight += `${boss_name} 防禦力+0.5 [現在防禦力=${PK_user_hp}]\n\n`
                                break;
                            case '(虛張聲勢)':
                                user_hp --
                                user_up ++
                                fight += `${pokemon_name}攻擊力+1 防禦力-1 [現在攻擊力=${user_up}] [現在防禦力=${user_hp}]\n\n`
                                break;
                            case '(緊急治療)':
                                PK_user_Health = PK_user_Health + 10
                                PK_user_hp = PK_user_hp - 2
                                fight += `${boss_name}血量+10 防禦力-2 [剩餘血量(${PK_user_Health}/80)] [現在防禦力=${PK_user_hp}]\n\n`
                                break;
                            case '(血量平衡)':
                                PK_user_Health = y/2
                                user_Health = x/2
                                fight += `雙方血量 = 一半 [${pokemon_name}(${x/2}/${x})][${boss_name}(${80/2}/80)]\n\n`
                                break;
                            case '(吸血)':
                                PK_user_Health = PK_user_Health + PK_user_up
                                user_Health = user_Health - PK_user_up
                                fight += `${boss_name} 吸了對方${PK_user_up}滴血 [${pokemon_name}(${user_Health}/${x})][${boss_name}(${PK_user_Health}/80)]\n\n`
                                break;
                            case '(守住)':
                                PK_user_hide = true
                                fight += `${boss_name} 可躲避下次攻擊\n\n`
                                break;
                            case '(硬 就完事了)':
                                PK_user_Health = PK_user_Health/2
                                PK_user_up = PK_user_up - 2
                                PK_user_hp = PK_user_hp + 2
                                fight += `${boss_name} 血量/2 攻擊力-2 防禦力+2 [剩餘血量(${PK_user_Health}/80)] [現在攻擊力=${PK_user_up}] [現在防禦力=${PK_user_hp}]\n\n`
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
                                        fight += ` ${pokemon_name} 被擊中了要害[剩餘血量(${user_Health}/${x})]\n\n`
                                    }else{
                                        user_Health = user_Health - number;
                                        fight += ` ${pokemon_name} 被擊中了[剩餘血量(${user_Health}/${x})]\n\n`
                                    }
                
                                } else {
                                    fight += ` ${pokemon_name} 躲開了攻擊\n\n`
                                    user_hide = false
                                }
                                break;
                        }
                    }
                }
                

            // 判断战斗结果并发送消息
                if (user_Health <= 0 && PK_user_Health <= 0) {
                    fight += '雙方平手 算玩家獲勝'
                    if(fight.length >= 1024){
                        fight1 = `由於對戰內容過於刺激 整個過程被炸翻了 最終結果是 ${pokemon_name} 獲勝`
                    }
                    else{
                        fight1 = fight
                    }
                    update_user_coin(user.id,250)
                    coin = coin + 250
                    fight = ''
                    time++
                }else if(user_Health <= 0){
                    fight += `${boss_name}獲勝`
                    if(fight.length >= 1024){
                        fight1 = `由於對戰內容過於刺激 整個過程被炸翻了 最終結果是 ${boss_name} 獲勝`
                    }
                    else{
                        fight1 = fight
                    }
                }else if(PK_user_Health <=0){
                    fight += `${pokemon_name}獲勝`
                    if(fight.length >= 1024){
                        fight1 = `由於對戰內容過於刺激 整個過程被炸翻了 最終結果是 ${pokemon_name} 獲勝`
                    }
                    else{
                        fight1 = fight
                    }
                    update_user_coin(user.id,250)
                    coin = coin + 250
                    fight = ''
                    time++
                }
            }

            if(time === 2){
                
                user_Health = 10
                PK_user_Health = 10

                while(user_Health > 0 && PK_user_Health >0){

                    let turn = Math.random() > 0.5

                    if(turn){

                        let miss = Math.random() >0.5
    
                        if(miss){
                            user_Health--
                        }
    
                    }else{
    
                        let miss = Math.random() >0.5
    
                        if(miss){
                            PK_user_Health--
                        }
    
                    }

                }

                if (user_Health <= 0 && PK_user_Health <= 0) {
                    fight2 = user_win_random()
                    update_user_coin(user.id,250)
                    coin = coin + 250
                    time++
                }else if(user_Health <= 0){
                    fight2 = PC_user_win_random()
                }else if(PK_user_Health <=0){
                    fight2 = user_win_random()
                    update_user_coin(user.id,250)
                    coin = coin + 250
                    time++
                }
            }

            if(time === 3){

                user_Health = Math.random()
                PK_user_Health = Math.random()

                if (user_Health === PK_user_Health) {
                    fight3 = user_win_random()
                    who_win = true
                }else if(user_Health < PK_user_Health){
                    fight3 = PC_user_win_random()
                    who_win = false
                }else if(PK_user_Health < user_Health){
                    fight3 = user_win_random()
                    who_win = true
                }


            }


            let embed;
            switch(time){
                case 1:
                    embed = new EmbedBuilder()
                    .setColor('#ff853a')
                    .setThumbnail(`https://s1.52poke.com/assets/sprite/gen5/${selection}.gif`)
                    .setTitle(`${user.globalName} 挑戰 ${boss_name}(BOSS)`)
                    .addFields({ name: `${user.globalName}戰隊派出:`, value: `${pokemon_name}(${pokemon_rarity})`},)
                    .addFields({ name: `對戰規則`, value: `與BOSS戰鬥 連贏3場才勝利\n打贏第一場+250元\n打贏第二場+250元\n打贏第三場 獲得對應的神奇寶貝(BOSS)`},)
                    .addFields({ name: `數值`, value: `${pokemon_name}(${pokemon_rarity}): 血量:${x}\n${boss_name}(BOSS): 血量:70 攻擊力提升 防禦力提升`},)
                    .addFields({ name: `第一場:`, value: `\n${fight1}`},)
                    .addFields({ name: `結算:`, value: `挑戰失敗 金錢(${coin}元)`},)
                    .setTimestamp()
                    await i.reply({ embeds: [embed] });
                    break;
                case 2:
                    embed = new EmbedBuilder()
                    .setColor('#ff853a')
                    .setThumbnail(`https://s1.52poke.com/assets/sprite/gen5/${selection}.gif`)
                    .setTitle(`${user.globalName} 挑戰 ${boss_name}(BOSS)`)
                    .addFields({ name: `${user.globalName}戰隊派出:`, value: `${pokemon_name}(${pokemon_rarity})`},)
                    .addFields({ name: `對戰規則`, value: `與BOSS戰鬥 連贏3場才勝利\n打贏第一場+250元\n打贏第二場+250元\n打贏第三場 獲得對應的神奇寶貝(BOSS)`},)
                    .addFields({ name: `數值`, value: `${pokemon_name}(${pokemon_rarity}): 血量:${x}\n${boss_name}(BOSS): 血量:70 攻擊力提升 防禦力提升`},)
                    .addFields({ name: `第一場:`, value: `\n${fight1}`},)
                    .addFields({ name: `第二場:`, value: `\n${fight2}`},)
                    .addFields({ name: `結算:`, value: `挑戰失敗 金錢(${coin}元)`},)
                    .setTimestamp()
                    await i.reply({ embeds: [embed] });
                    break;
                case 3:
                    if(who_win){

                        const count = getPokemonDataCount(user.id);
                        if (count >= MAX_POKEMON_COUNT) {
                            max = `你隊伍位置已滿 無法新增BOSS 改為現金(2500)元`
                            update_user_coin(user.id,2500)
                        }else{
                            max = `新增${boss_name}(BOSS)至你的隊伍中`

                            let url = `https://s1.52poke.com/assets/sprite/gen5/${selection}.gif`
                            let pid = parseInt(selection)
                            let pokemonData = { 'id': user.id, 'url': url, 'p_id':`${pid}`, 'rarity':'BOSS'};
                            let dirt = JSON.stringify(pokemonData) + '\n';

                            // 将 Pokémon 数据追加到文件中
                            const filePath = path.join(__dirname, 'pokemon_data.txt');
                            fs.appendFileSync(filePath, dirt);
                        }


                        embed = new EmbedBuilder()
                        .setColor('#ff853a')
                        .setThumbnail(`https://s1.52poke.com/assets/sprite/gen5/${selection}.gif`)
                        .setTitle(`${user.globalName} 挑戰 ${boss_name}(BOSS)`)
                        .addFields({ name: `${user.globalName}戰隊派出:`, value: `${pokemon_name}(${pokemon_rarity})`},)
                        .addFields({ name: `對戰規則`, value: `與BOSS戰鬥 連贏3場才勝利\n打贏第一場+250元\n打贏第二場+250元\n打贏第三場 獲得對應的神奇寶貝(BOSS)`},)
                        .addFields({ name: `數值`, value: `${pokemon_name}(${pokemon_rarity}): 血量:${x}\n${boss_name}(BOSS): 血量:70 攻擊力提升 防禦力提升`},)
                        .addFields({ name: `第一場:`, value: `\n${fight1}`},)
                        .addFields({ name: `第二場:`, value: `\n${fight2}`},)
                        .addFields({ name: `第三場:`, value: `\n${fight3}`},)
                        .addFields({ name: `結算:`, value: `挑戰成功 金錢(${coin}元)\n${max}`},)
                        .setTimestamp()
                        await i.reply({ embeds: [embed] });
                        break;
                    }else{
                        embed = new EmbedBuilder()
                        .setColor('#ff853a')
                        .setThumbnail(`https://s1.52poke.com/assets/sprite/gen5/${selection}.gif`)
                        .setTitle(`${user.globalName} 挑戰 ${boss_name}(BOSS)`)
                        .addFields({ name: `${user.globalName}戰隊派出:`, value: `${pokemon_name}(${pokemon_rarity})`},)
                        .addFields({ name: `對戰規則`, value: `與BOSS戰鬥 連贏3場才勝利\n打贏第一場+250元\n打贏第二場+250元\n打贏第三場 獲得對應的神奇寶貝(BOSS)`},)
                        .addFields({ name: `數值`, value: `${pokemon_name}(${pokemon_rarity}): 血量:${x}\n${boss_name}(BOSS): 血量:70 攻擊力提升 防禦力提升`},)
                        .addFields({ name: `第一場:`, value: `\n${fight1}`},)
                        .addFields({ name: `第二場:`, value: `\n${fight2}`},)
                        .addFields({ name: `第三場:`, value: `\n${fight3}`},)
                        .addFields({ name: `結算:`, value: `挑戰失敗 金錢(${coin}元)`},)
                        .setTimestamp()
                        await i.reply({ embeds: [embed] });
                        break;
                    }
                
            }
        } else {
            await i.reply('您隊伍神奇寶貝ID輸入錯誤');
        }
    });

}else{
    await ctx.reply('金錢不足 BOSS戰需要(500)元')
}
};

function user_pokemon_search(id, search) {
    const filePath = path.join(__dirname, 'pokemon_data.txt');
    let fileContent = fs.readFileSync(filePath, 'utf8');
    if (fileContent) {
        let lines = fileContent.split('\n').filter(Boolean);
        let regexp = new RegExp(search);
        for (let i = lines.length - 1; i >= 0; i--) {
            if (regexp.test(lines[i])) {
                let pokemonData = JSON.parse(lines[i]);
                if (pokemonData.id === id) {
                    if (pokemonData.p_id === search) {
                        const user_pokemon_id = pokemonData.p_id.toString().padStart(3, '0');
                        const user_pokemon_name = pokemon_list(user_pokemon_id).name;
                        const user_pokemon_rarity = pokemonData.rarity;
                        // 返回 id 和 rarity 的对象
                        return { id: user_pokemon_id, rarity: user_pokemon_rarity, name:user_pokemon_name };
                    }
                }
            }
        }
    }
    return { id: null, rarity: null }; // 如果没有找到，返回 null
}


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

const user_win = [
    {'text':`在緊張的神奇寶貝對決中，你的神奇寶貝展現了無與倫比的實力，最終奪得勝利！`},
    {'text':`經過一場激烈的戰鬥，你的神奇寶貝以不屈不撓的精神擊敗了所有對手，榮登勝利者之位！`},
    {'text':`隨著你的神奇寶貝巧妙運用技能，它成功地戰勝了一切對手，成為了不可戰勝的冠軍！`},
    {'text':`在神奇寶貝之間的激烈對戰中，你的神奇寶貝展現了頑強的意志和強大的力量，最終奪得了勝利！`},
    {'text':`你的神奇寶貝通過無與倫比的戰術和強大的技能，將所有挑戰者一一擊敗，獲得了終極勝利！`},
    {'text':`在決戰中，你的神奇寶貝以其無與倫比的速度和力量，將所有挑戰者踩在腳下，奪得了不可動搖的冠軍地位！`},
    {'text':`在神奇寶貝大賽的決賽中，你的神奇寶貝以無法阻擋的力量，奪得了奪冠的榮譽！`},
    {'text':`在一場場精彩的對戰中，你的神奇寶貝展現了它的無與倫比的力量，一舉擊敗了所有對手，登上了勝利之巔！`},
    {'text':`在神奇寶貝聯盟的頂級比賽中，你的神奇寶貝憑借其閃電般的速度和強大的攻擊力，將所有對手踩在腳下，奪得了冠軍！`},
    {'text':`經過激烈的角逐，你的神奇寶貝以其無與倫比的力量和防禦，成為了最終的冠軍，為自己贏得了榮耀與尊嚴！`},
    {'text':`在決鬥中，你的神奇寶貝展現了與眾不同的技巧，終結了所有對手，站在了勝利的高峰上！`},
    {'text':`你的神奇寶貝以其驚人的耐力和智慧，克服了所有挑戰，贏得了這場充滿激情的比賽！`},
    {'text':`在壯舉中，你的神奇寶貝以不屈不撓的意志和無與倫比的實力，贏得了所有人的尊敬與崇拜！`},
    {'text':`你的神奇寶貝用心靈的力量和技能的威力，戰勝了所有敵人，站在了冠軍的寶座上！`},
    {'text':`在一場場激烈的對決中，你的神奇寶貝毫不留情地擊敗了每一個對手，成為了不可戰勝的傳奇！`},
    {'text':`通過不懈的努力和無與倫比的實力，你的神奇寶貝贏得了這場精彩絕倫的比賽，成為了眾人的偶像！`},
    {'text':`你的神奇寶貝以其無與倫比的天賦和技能，征服了所有挑戰，成為了神奇寶貝界的無冕之王！`},
    {'text':`在決賽的舞台上，你的神奇寶貝展現了真正的實力和勇氣，成為了眾人仰慕的對象！`},
    {'text':`你的神奇寶貝以其驚人的戰鬥天賦和不屈不撓的精神，戰勝了所有對手，贏得了這場充滿榮耀的比賽！`},
    {'text':`通過堅韌不拔的毅力和無可匹敵的技能，你的神奇寶貝戰勝了所有挑戰，成為了冠軍的典範！`}
]

const PC_user_win = [
    {'text':`在激烈的對決中，你的神奇寶貝雖然盡力了，但最終還是敗給了強大的對手。`},
    {'text':`儘管你的神奇寶貝全力以赴，但這一次它還是無法戰勝對手，失去了勝利的機會。`},
    {'text':`面對強大的挑戰，你的神奇寶貝努力了，但卻未能取得勝利，這是一次令人失望的失敗。`},
    {'text':`在比賽中，你的神奇寶貝盡力了，但對手的實力超出了它的想像，最終以失敗告終。`},
    {'text':`儘管你的神奇寶貝奮力一搏，但它仍然無法擊敗對手，這次失敗讓人感到心痛。`},
    {'text':`在挑戰中，你的神奇寶貝嘗試了不同的策略，但最終仍然無法擊敗對手，這是一次痛苦的失敗。`},
    {'text':`儘管你的神奇寶貝努力了，但它最終還是未能勝出，這是一次令人沮喪的失敗。`},
    {'text':`在激烈的比賽中，你的神奇寶貝嘗試了各種方法，但最終還是無法戰勝對手，這是一次痛苦的失敗。`},
    {'text':`雖然你的神奇寶貝充滿了決心，但它最終還是無法擊敗對手，這是一次令人心碎的失敗。`},
    {'text':`在這場激烈的比賽中，你的神奇寶貝盡力了，但最終仍然無法贏得勝利，這是一次令人痛心的失敗。`},
    {'text':`在這次的比賽中，你的神奇寶貝嘗試了一切，但最終卻以失敗收場，這讓人感到心痛。`},
    {'text':`雖然你的神奇寶貝全力以赴，但最終卻無法克服對手的強大，這是一次令人沮喪的失敗。`},
    {'text':`即使你的神奇寶貝拼盡全力，但在這場比賽中它還是無法取得勝利，這是一次令人遺憾的失敗。`},
    {'text':`你的神奇寶貝在比賽中表現出色，但最終卻因為一個微小的失誤而輸掉了比賽，這讓人感到心痛。`},
    {'text':`儘管你的神奇寶貝努力了，但在這場比賽中它卻未能取得勝利，這是一次令人感到遺憾的失敗。`},
    {'text':`在比賽中，你的神奇寶貝展現了出色的表現，但最終卻因為運氣不佳而輸掉了比賽，這是一次令人心碎的失敗。`},
    {'text':`你的神奇寶貝在比賽中奮力一搏，但最終卻未能戰勝對手，這是一次令人感到心痛的失敗。`},
    {'text':`雖然你的神奇寶貝拼盡全力，但在這場比賽中它卻未能勝出，這是一次令人沮喪的失敗。`},
    {'text':`在這次的比賽中，你的神奇寶貝嘗試了一切，但最終卻以失敗告終，這是一次令人心碎的失敗。`},
    {'text':`儘管你的神奇寶貝表現出色，但在這場比賽中它卻未能取得勝利，這是一次令人感到心痛的失敗。`}
]


function user_win_random() {

    const randomIndex = Math.floor(Math.random() * user_win.length);

    return user_win[randomIndex].text;
}

function PC_user_win_random() {

    const randomIndex = Math.floor(Math.random() * PC_user_win.length);

    return PC_user_win[randomIndex].text;
}
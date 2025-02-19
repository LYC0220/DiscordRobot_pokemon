const pokemon_sk = [
    {'skill':'(你媽死了)'},
    {'skill':'(撞擊)'},
    {'skill':'(電光一閃)'},
    {'skill':'(搖尾巴)'},
    {'skill':'(暗影球)'},
    {'skill':'(水之波動)'},
    {'skill':'(大爆炸)'},
    {'skill':'(自我再生)'},
    {'skill':'(暗影爪)'},
    {'skill':'(被紙割傷)'},
    {'skill':'(原地嚇到)'},
    {'skill':'(大地之力)'},
    {'skill':'(變硬)'},
    {'skill':'(地震)'},
    {'skill':'(打雷)'},
    {'skill':'(龍聲鼓舞)'},
    {'skill':'(虛張聲勢)'},
    {'skill':'(大叫)'},
    {'skill':'(咬碎)'},
    {'skill':'(能力增強)'},
    {'skill':'(空氣斬)'},
    {'skill':'(十萬伏特)'},
    {'skill':'(血量平衡)'},
    {'skill':'(吸血)'},
    {'skill':'(高速星星)'},
    {'skill':'(硬 就完事了)'},
    {'skill':'(泥巴射擊)'},
    {'skill':'(意念頭錘)'},
    {'skill':'(吐口水)'},
    {'skill':'(踹對方)'},
]

export function pokemon_skill(){
    let x = Math.floor(Math.random() * pokemon_sk.length);
    return pokemon_sk[x].skill;
}

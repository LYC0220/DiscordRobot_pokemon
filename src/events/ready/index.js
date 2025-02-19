import { Events,ActivityType  } from "discord.js"

export const event={
    name: Events.ClientReady,
    once:true,
}

export const action = async(c) =>{
    c.user.setActivity('神奇寶貝圖鑑', { type: ActivityType.Watching });
    console.log(`神奇寶貝機器人以啟動`)
}
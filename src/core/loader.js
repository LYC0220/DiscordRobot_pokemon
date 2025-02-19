import { Client, Collection, REST,Routes } from "discord.js"
import fg from "fast-glob"
import { userAppStore } from '@/store/app'

const updataSlashCommands = async(commands) =>{
    const rest = new REST({version:10}).setToken(process.env.TOKEN)

    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            '748103102627971103',
        ),
        {
            body: commands
        }
    )

}

export const loadCommands = async() =>{
    const appStore = userAppStore()
    const commands = []
    const actions = new Collection()

    const files = await fg('./src/commands/**/*.js')
    for(const file of files){
        const cmd = await import(file)
        commands.push(cmd.command)
        actions.set(cmd.command.name, cmd.action)
    }

    await updataSlashCommands(commands)
    appStore.commandsActionMap = actions
}

export const loadEvents = async() =>{
    const appStore = userAppStore()
    const client = appStore.client
    const files = await fg('./src/events/**/*.js')
    for(const file of files){
        const eventFile = await import(file)

        if(eventFile.event.once){
            client.once(eventFile.event.name,eventFile.action)
        }else{
            client.on(eventFile.event.name,eventFile.action)
        }
    }
}
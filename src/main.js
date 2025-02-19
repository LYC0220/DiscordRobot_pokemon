import { Client, Events, GatewayIntentBits } from 'discord.js'
import vuelnit from '@/core/vue'
import dotenv from 'dotenv'
import { loadCommands,loadEvents } from '@/core/loader'
import { userAppStore } from '@/store/app'

vuelnit()
dotenv.config()

loadCommands()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const appStore = userAppStore()
appStore.client = client

loadEvents()

client.login(process.env.TOKEN);


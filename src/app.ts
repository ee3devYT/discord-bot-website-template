import DiscordJS, { Intents, Interaction, Message } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
import 'dotenv/config'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', async() => {
    console.log("Ready!")
    client.user?.setActivity(`${client.ws.ping}ms`, { type: 'WATCHING' });
    // await mongoose.connect(process.env.MONGO_URI || '', {
    //     keepAlive: true
    // })

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: ['901406878041509938'],
        botOwners: ['872788259527335976'],
        mongoUri: process.env.MONGO_URI
    })
})
client.login(process.env.TOKEN)
import { ICommand } from "wokcommands";
import welcomeSchema from "../../models/welcome-schema";
import DJS from 'discord.js';
export default {
    category: 'greetings',
    description: 'Join Channel Config',
    permissions: ['ADMINISTRATOR'],

    minArgs: 2,
    expectedArgs: '<channel> <text>', 
    slash: 'both',
    testOnly: true,

    options: [

        {
            name: 'channel',
            description: 'target channel',
            required: true,
            type: DJS.Constants.ApplicationCommandOptionTypes.STRING
        },
        {
            name: 'text',
            description: 'your message',
            required: true,
            type: DJS.Constants.ApplicationCommandOptionTypes.STRING
        }
    ],

    callback: async ({guild, message, interaction, args}) => {
        const target  = message ? message.mentions.channels.first() : interaction.options.getChannel('channel')
        if(!target || target.type !== 'GUILD_TEXT') {
            return 'please tag a **text** channel.'
        }

        let text = interaction?.options.getString('text')
        if(message) {
            args.shift()
            text = args.join(" ")
        }
    }
    
} as ICommand
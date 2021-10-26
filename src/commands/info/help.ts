import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'info',
    description: 'Helps You lol',
    aliases: ['bot', 'config', 'bot-config', 'h', 'H', 'HELP'],
    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        const embed = new MessageEmbed()
        .setTitle('⚙ | Bot Config')
        .addFields(
            {name: 'INFO', value: '`help`, `ping`'},
            {name: 'MODERATION', value: '`kick`, `ban`, `unban`'},
            {name: 'UTIL', value: '`purge`'},
            {name: 'CONFIG', value: '`status` - only for devs'}

        )
        return embed
    }
} as ICommand
import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'bot ping',

    slash: 'both',
    testOnly: true,

    callback: ({ client, message, interaction}) => {
        return `${client.ws.ping}ms`
    }
} as ICommand

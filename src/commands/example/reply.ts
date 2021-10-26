import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'example',
    description: 'replies',

    slash: 'both',
    testOnly: true,

    callback: ({message}) => {
        return 'replied'
    }
} as ICommand

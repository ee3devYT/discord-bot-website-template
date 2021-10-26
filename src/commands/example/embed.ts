import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'example',
    description: 'basic embed message',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        const embed = new MessageEmbed()
        .setTitle('TypeScriptBot') // put your embed title
        .setDescription('easy to use') // description
        .setColor("AQUA") // add some colours you can use "RANDOM" for random colours
        .setAuthor("me") // author
        .setThumbnail('https://cdn.discordapp.com/attachments/888727271081390100/901752521641582664/9k.png')//basically a image on top right side of your embed
        .setImage('https://cdn.discordapp.com/attachments/888727271081390100/901752764831502336/Z.png') //sends image
        .setTimestamp() //

        return embed
    }
} as ICommand
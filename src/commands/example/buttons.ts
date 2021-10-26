import { Interaction, MessageActionRow, MessageButton, MessageInteraction } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'example',
    description: 'buttons',

    slash: true,
    testOnly: true,
    callback: async ({ interaction: msgInt, channel }) => {

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ \\
//                                         TYPES OF BUTTONS
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ \\

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('ban_yes')
            .setEmoji('✅')
            .setLabel('Yes')
            .setStyle('SUCCESS')
        )

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ \\
    const danger = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('ban_no')
            .setEmoji('⚠')
            .setLabel('No')
            .setStyle('DANGER')
        )

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ \\ 

        const link = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setURL('https://youtube.com')
            .setStyle('LINK')
            .setLabel('Youtube')

        )

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ \\

    const secondary = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('primary')
        .setEmoji('2️⃣')
        .setLabel('Second')
        .setStyle('SECONDARY')
)

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ \\

const primary = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('primary')
        .setEmoji('1️⃣')
        .setLabel('Primary Button')
        .setStyle('PRIMARY')
)

        await msgInt.reply({
            content: 'Types of buttons',
            components: [row, danger, link, primary],
        })
    } 
}as ICommand
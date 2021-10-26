import { Interaction, MessageActionRow, MessageButton, MessageInteraction, MessageSelectMenu } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'example',
    description: 'menu',

    slash: "both",
    testOnly: true,
    callback: async ({ interaction: msgInt, channel }) => {

const row = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Nothing selected')
        .addOptions([
            {
                label: 'Select me',
                description: 'This is a description',
                value: 'first_option',
            },
            {
                label: 'You can select me too',
                description: 'This is also a description',
                value: 'second_option',
            },
        ]),
);

await msgInt.reply({ content: 'select-menu', components: [row] });
}
}as ICommand
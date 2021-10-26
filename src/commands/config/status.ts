import { ICommand } from "wokcommands";

export default {
    category: 'config',
    description: 'set the bot status',

    minArgs: 1,
    expectedArgs: '<status>',

    slash: 'both',

    ownerOnly: true,

    callback: ({ client, text }) => {
        client.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: text
                }
            ]
        })

        return '✅ | Status updated sucessfuly'
    }
} as ICommand
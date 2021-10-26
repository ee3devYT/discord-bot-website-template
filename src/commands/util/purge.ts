import { ICommand } from "wokcommands";

export default {
    category: 'util',
    description: 'deletes multiple messagae at once',

    permissions: ['MANAGE_MESSAGES'],

    maxArgs: 1,
    expectedArgs: '[amount]',

    slash: 'both',
    testOnly: true,

    callback: async ({ message, interaction, channel, args}) => {
        const amount = args.length ? parseInt(args.shift()!) :2 
        

        if(message) {
            await message.delete()
        }

        const { size } = await channel.bulkDelete(amount, true)

        const reply = `✅ | Deleted ${size} message(s) sucessfuly !`

        if (interaction)  {
            return reply
        }

        channel.send(reply)
    }
} as ICommand
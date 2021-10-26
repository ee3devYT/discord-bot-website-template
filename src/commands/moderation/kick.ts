import { Guild, GuildManager, GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'kick a user',
// permissions: ['KICK_MEMBERS'],
    requireRole: true,

    slash: 'both',
    testOnly: true,

    guildOnly: true,

    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],

    callback:({ message, interaction, args}) => {
        const target = message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember
        if(!target) {
            return 'Please mention someone to kick.'
        }

        if (!target.kickable) {
            return 'Unable to kick this user'
        }

        args.shift()
        const reason = args.join(" ")

        target.kick(reason)

        return `<@${target.id} has been sucessfuly kicked>`
    }
} as ICommand
import { Message } from 'discord.js';

export const runPoll = async (message: Message, options: string[]) =>
    options.map(async (option) => {
        const msg = await message.channel.send(option);
        await msg.react('➕');
    });

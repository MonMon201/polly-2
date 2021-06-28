import { Message } from 'discord.js';

export const showMessage = async (message: Message, msg: string) =>
    message.channel.send(msg);

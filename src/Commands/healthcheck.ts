import { Message } from 'discord.js';
import { botStatus, prefix } from '../constants';
import { Command } from '../Interfaces/Command';

const healthcheck = async (message: Message) => {
    message.channel.send(`Status: ${botStatus.ONLINE}`);
};

const command: Command = {
    name: 'healthcheck',
    description: 'Check if bot is up',
    example: `${prefix}healthcheck`,
    execute: healthcheck,
};

module.exports = command;

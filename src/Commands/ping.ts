import { Message } from 'discord.js';
import { botStatus } from '../constants';
import { Command } from '../Interfaces/Command';

const status = async (message: Message) => {
    message.channel.send(`Status: ${botStatus.ONLINE}`);
};

const command: Command = {
    name: 'healthcheck',
    description: 'Check if bot is up',
    example: '!healthcheck',
    execute: status,
};

module.exports = command;

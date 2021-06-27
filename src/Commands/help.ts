import { Message } from 'discord.js';
import { Command } from '../Interfaces/Command';
import { getCommands } from '../Utils/getCommands';

const help = async (message: Message) => {
    const commands = await getCommands();
    const helpMessage = commands
        .map((command) => {
            return `\n\nCommand name: ${command.name},\nCommand description: ${command.description},\nCommand usage example: ${command.example}`;
        })
        .reduce((acc, msg) => (acc += msg));
    message.channel.send(helpMessage);
};

const command: Command = {
    name: 'help',
    description: 'See examples and descriptions for commands',
    execute: help,
    example: '/help',
};

module.exports = command;

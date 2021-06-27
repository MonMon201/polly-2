import { Message } from 'discord.js';
import { Command } from '../Interfaces/Command';
import { getOptions } from '../Utils/getOptions';
import { runPoll } from '../Utils/runPoll';

const createPoll = async (message: Message, args: string[]) => {
    const options = getOptions(args);
    await runPoll(message, options);
};

const command: Command = {
    name: 'createPoll',
    description: 'Create a new poll',
    execute: createPoll,
    example: '!createPoll option a, option b, option c',
};

module.exports = command;

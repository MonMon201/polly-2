import { Message } from 'discord.js';
import { prefix } from '../constants';
import { Command } from '../Interfaces/Command';
import { getOptions } from '../Utils/getOptions';
import { runPoll } from '../Utils/runPoll';

const createPoll = async (message: Message, args: string[]) => {
    const options = getOptions(args);
    await runPoll(message, options);
};

const command: Command = {
    name: 'create_poll',
    description: 'Create a new poll',
    execute: createPoll,
    example: `${prefix}createPoll option a, option b, option c`,
    options: [
        {
            name: 'options',
            description: `type in options you'd like to see`,
            type: 3,
            required: true,
        },
    ],
};

module.exports = command;

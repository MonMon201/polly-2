import { Message } from 'discord.js';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { prefix } from '../constants';
import { Command } from '../Interfaces/Command';
import { getOptions } from '../Utils/getOptions';

const savePoll = async (message: Message, args: string[]) => {
    const name = args[0];
    const fileName = name + '.json';
    const options = getOptions(args.slice(1, args.length));
    const savesRoute = `${__dirname}/../../saves`;
    if (!existsSync(savesRoute)) {
        mkdirSync(savesRoute);
    }
    writeFileSync(
        `${savesRoute}/${fileName}`,
        JSON.stringify({
            options,
        }),
    );
    message.channel.send(`Poll saved with name: \n${name}`);
};

const command: Command = {
    name: 'save_poll',
    description: 'Create a new poll',
    execute: savePoll,
    example: `${prefix}savePoll PollName option a, option b, option c`,
    options: [
        {
            name: 'save',
            description: `type in name for save`,
            type: 3,
            required: true,
        },
        {
            name: 'options',
            description: `type in options you'd like to save`,
            type: 3,
            required: true,
        },
    ],
};

module.exports = command;

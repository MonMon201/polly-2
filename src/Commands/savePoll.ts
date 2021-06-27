import { Message } from 'discord.js';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { Command } from '../Interfaces/Command';
import { getOptions } from '../Utils/getOptions';

const savePoll = async (message: Message, args: string[]) => {
    const name = args[0];
    const fileName = name + '.json';
    const options = getOptions(args.slice(1, args.length));
    const savesRoute = `./../../saves`;
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
    name: 'savePoll',
    description: 'Create a new poll',
    execute: savePoll,
    example: '/savePoll PollName option a, option b, option c',
};

module.exports = command;

import { Message } from 'discord.js';
import { existsSync, readFileSync } from 'fs';
import { prefix } from '../constants';
import { Command } from '../Interfaces/Command';
import { Poll } from '../Interfaces/Poll';
import { runPoll } from '../Utils/runPoll';

const loadPoll = async (message: Message, args: string[]) => {
    const savesRoute = `${__dirname}/../../saves`;
    const saveName = args[0];
    const saveFileName = saveName + '.json';
    const savePath = `${savesRoute}/${saveFileName}`;
    console.log(`save path: ${savePath}`);
    if (!existsSync(savePath)) return;
    console.log(`Save: ${saveFileName}\nStatus: exists`);
    const rawData = readFileSync(savePath);
    const poll: Poll = JSON.parse(rawData.toString());
    console.log(`parsed: ${poll}`);
    await runPoll(message, poll.options);
};

const command: Command = {
    name: 'load_poll',
    description: 'Runs saved poll',
    example: `${prefix}loadPoll PollName`,
    execute: loadPoll,
    options: [
        {
            name: 'save',
            description: `type in save you'd like to run`,
            type: 3,
            required: true,
        },
    ],
};

module.exports = command;

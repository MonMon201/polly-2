import { Message } from 'discord.js';
import { existsSync, readFileSync } from 'fs';
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
    name: 'loadPoll',
    description: 'Runs saved poll',
    example: '/loadPoll PollName',
    execute: loadPoll,
};

module.exports = command;

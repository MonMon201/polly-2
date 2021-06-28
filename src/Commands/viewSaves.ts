import { Message } from 'discord.js';
import { existsSync } from 'fs';
import { readdirSync } from 'fs';
import path from 'path';
import { prefix } from '../constants';
import { Command } from '../Interfaces/Command';
import { showMessage } from '../Utils/showMessage';

const viewSaves = async (message: Message) => {
    const savesRoute = `${__dirname}/../../saves`;
    if (!existsSync(savesRoute)) return;
    const saves = readdirSync(savesRoute)
        .filter((filename) => {
            const ext = path.extname(filename).toLowerCase();
            return ext === '.json';
        })
        .map((filename) => filename.split('.')[0]);
    console.log(`parsed saves: ${saves}`);
    await Promise.all(
        saves.map(async (save) => await showMessage(message, save)),
    );
};

const command: Command = {
    name: 'viewSaves',
    description: 'Shows saved polls',
    example: `${prefix}viewSaves`,
    execute: viewSaves,
};

module.exports = command;

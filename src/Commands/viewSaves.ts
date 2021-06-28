import { Message } from 'discord.js';
import { existsSync } from 'fs';
import { readdirSync } from 'fs';
import path from 'path';
import { Command } from '../Interfaces/Command';
import { showMessage } from '../Utils/showMessage';

const viewSaves = async (message: Message) => {
    const savesRoute = `${__dirname}/../../saves`;
    if (!existsSync(savesRoute)) return;
    const saves = readdirSync(savesRoute).filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.json';
    });
    console.log(`parsed saves: ${saves}`);
    await Promise.all(
        saves.map(async (save) => await showMessage(message, save)),
    );
};

const command: Command = {
    name: 'viewSaves',
    description: 'Shows saved polls',
    example: '!viewSaves',
    execute: viewSaves,
};

module.exports = command;

import { getConfig } from "../Env/environment";
import { getCommands } from "./getCommands";

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Polly } from "../Client/Client";

// Place your client and guild ids here
const clientId = '9x79ys8rHTmCvFeo0LfgUXe8KW45TfO2';
const token = 'NzIzMTUwOTMzMjc3ODAyNTA3.XutcyQ.Beid4H73pi28Xu1sdThXs-6Af-8';
const guildId = '722393393296179211';

const rest = new REST({ version: '9' }).setToken(token);

export const addSlashCommands = async (polly: Polly) => {
    const guild = polly.guilds.cache.get(guildId);
    const commands = guild ? guild.commands : polly.application?.commands;
    const commandsList = await commands?.fetch({});
    const promises = commandsList?.map((command) => command.delete());
    await Promise.all(promises ?? [])
    
    const allCommands = await getCommands();
    const validCommands = allCommands.map(({name, description, options}) => ({name, description, options}))
    await Promise.all(validCommands.map(({ name, description, options }) => commands?.create({
        name,
        description,
        options
    })))
}
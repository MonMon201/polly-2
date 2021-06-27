import { readdirSync } from 'node:fs';
import { Command } from '../Interfaces/Command';

export const getCommands = async (): Promise<Command[]> => {
    const route = `${__dirname}/../commands`;
    const commandFiles = readdirSync(route);
    return Promise.all(
        commandFiles.map(
            async (cmdFile: string) =>
                (await import(`${route}/${cmdFile}`)) as Command,
        ),
    );
};

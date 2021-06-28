import { readdirSync } from 'fs';
import path from 'path';
import { Command } from '../Interfaces/Command';

export const getCommands = async (): Promise<Command[]> => {
    const route = `${__dirname}/../Commands`;
    const commandFiles = readdirSync(route).filter((file) => {
        const ext = path.extname(file).toLowerCase()
        return (ext === '.js' || ext === '.ts')
    });
    console.log(commandFiles)
    return Promise.all(
        commandFiles.map(
            async (cmdFile: string) =>
                (await import(`${route}/${cmdFile}`)) as Command,
        ),
    );
};

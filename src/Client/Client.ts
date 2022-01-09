import { Client, Collection } from 'discord.js';
import { Config } from '../Interfaces/Config';
import { Command } from '../Interfaces/Command';
import { getCommands } from '../Utils/getCommands';

export class Polly extends Client {
    public commands: Collection<string, Command> = new Collection();
    public constructor() {
        super({});
    }

    public async start(config: Config) {
        // console.log(
        //     `Starting in ${config.prod ? 'production' : 'development'} mode...`,
        // );
        const commands = await getCommands();
        commands.map((command) => this.commands.set(command.name, command));
        console.log(
            `Commands have been imported, commands imported: ${this.commands.map(
                (command) => `\n${command.name}`,
            )}`,
        );
        this.login(process.env.TOKEN);
    }
}

import { Client, Collection, Intents } from 'discord.js';
import { Config } from '../Interfaces/Config';
import { Command } from '../Interfaces/Command';
import { getCommands } from '../Utils/getCommands';

export class Polly extends Client {
    private commands: Collection<string, Command> = new Collection();
    public constructor() {
        super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
    }

    public async start(config: Config) {
        console.log(
            `Starting in ${config.prod ? 'production' : 'development'} mode...`,
        );
        const commands = await getCommands();
        commands.map((command) => this.commands.set(command.name, command));
        console.log(
            `Commands have been imported, commands imported: ${this.commands.map(
                (command) => `\n${command.name}`,
            )}`,
        );
        this.login(config.token);
    }

    public getCommands() {
        return this.commands;
    }
}

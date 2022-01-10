import { getCommands } from "./getCommands";
import { Polly } from "../Client/Client";

// Place your client and guild ids here
const guildId = '722393393296179211';

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
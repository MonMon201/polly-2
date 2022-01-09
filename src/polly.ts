import { parse } from 'discord-command-parser';
import { Message } from 'discord.js';
import { Polly } from './Client/Client';
import { prefix } from './constants';
import { getConfig } from './Env/environment';
import { setDiscordBotCommands } from './Utils/setDiscordCommands';
import { checkWhiteList } from './Utils/whiteList';
import config from '../config.json';

const polly = new Polly();

polly
    .on('ready', async () => {
        console.log(`Guilds involved:`);
        polly.guilds.cache.map((el) => {
            console.log(`${el.name}`);
        });
        polly.user?.setActivity(`${prefix}help :)`, { type: 'LISTENING' });
        const token = getConfig().token;
        const id = polly.user?.id || '';
        const applicationCommands = await setDiscordBotCommands(token, id);
        console.log(applicationCommands);
        // applicationCommands.map((applicationCommand) => console.log(`${applicationCommand.name} was added to bot's slashcommands`))
        console.log(`${polly.user?.username} bot has been started!`);
    })
    .on('warn', (info) => console.log(info))
    .on('error', console.error)
    .on('message', async (message: Message) => {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (config.isWhiteList) {
            if (!checkWhiteList(message)) return;
        }
        console.log(
            `message arrived, author: ${message.author.username}, guild: ${message.guild.name}, guild id: ${message.guild.id}, message ${message.content}`,
        );
        const parsed = parse(message, `${prefix}`, {});
        if (!parsed.success) return;
        console.log(`command: ${parsed.command}`);
        console.log(`args: ${parsed.arguments}`);
        const command = polly.getCommands().get(parsed.command);
        if (!command) return;
        await command.execute(message, parsed.arguments);
    });

export { polly };

import { parse } from 'discord-command-parser';
import { Message } from 'discord.js';
import { Polly } from './Client/Client';
import { prefix } from './constants';
import { checkWhiteList } from './Utils/whiteList';

const polly = new Polly();

polly
    .on('ready', () => {
        console.log(`${polly.user?.username} bot has been started!`);
        console.log(`Guilds involved:`);
        polly.guilds.cache.map((el) => {
            console.log(`${el.name}`);
        });
        polly.user?.setActivity('!help :)', { type: 'LISTENING' });
    })
    .on('warn', (info) => console.log(info))
    .on('error', console.error)
    .on('message', async (message: Message) => {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!checkWhiteList(message)) return;
        console.log(
            `message arrived, author ${message.author.username}, channel ${message.guild?.name}, message ${message.content}`,
        );
        const parsed = parse(message, `${prefix}`, {});
        if (!parsed.success) return;
        console.log(`command: ${parsed.command}`);
        console.log(`args: ${parsed.arguments}`);
        const command = polly.commands.get(parsed.command);
        if (!command) return;
        await command.execute(message, parsed.arguments);
    });

export { polly };

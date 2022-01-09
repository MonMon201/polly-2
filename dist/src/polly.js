"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polly = void 0;
const discord_command_parser_1 = require("discord-command-parser");
const Client_1 = require("./Client/Client");
const constants_1 = require("./constants");
const whiteList_1 = require("./Utils/whiteList");
const polly = new Client_1.Polly();
exports.polly = polly;
polly
    .on('ready', async () => {
    var _a, _b;
    console.log(`Guilds involved:`);
    polly.guilds.cache.map((el) => {
        console.log(`${el.name}`);
    });
    (_a = polly.user) === null || _a === void 0 ? void 0 : _a.setActivity(`${constants_1.prefix}help :)`, { type: 'LISTENING' });
    // const token = getConfig().token;
    // const id = polly.user?.id || '';
    // const applicationCommands = await setDiscordBotCommands(token, id);
    // console.log(applicationCommands);
    // applicationCommands.map((applicationCommand) => console.log(`${applicationCommand.name} was added to bot's slashcommands`))
    console.log(`${(_b = polly.user) === null || _b === void 0 ? void 0 : _b.username} bot has been started!`);
})
    .on('warn', (info) => console.log(info))
    .on('error', console.error)
    .on('message', async (message) => {
    if (message.author.bot)
        return;
    if (!message.guild)
        return;
    if (!whiteList_1.checkWhiteList(message))
        return;
    console.log(`message arrived, author: ${message.author.username}, guild: ${message.guild.name}, guild id: ${message.guild.id}, message ${message.content}`);
    const parsed = discord_command_parser_1.parse(message, `${constants_1.prefix}`, {});
    if (!parsed.success)
        return;
    console.log(`command: ${parsed.command}`);
    console.log(`args: ${parsed.arguments}`);
    const command = polly.commands.get(parsed.command);
    if (!command)
        return;
    await command.execute(message, parsed.arguments);
});
//# sourceMappingURL=polly.js.map
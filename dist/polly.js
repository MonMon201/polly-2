"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polly = void 0;
const discord_command_parser_1 = require("discord-command-parser");
const Client_1 = require("./Client/Client");
const polly = new Client_1.Polly();
exports.polly = polly;
polly
    .on('ready', () => {
    var _a;
    console.log(`${(_a = polly.user) === null || _a === void 0 ? void 0 : _a.username} bot has been started!`);
    console.log(`Guilds involved:`);
    polly.guilds.cache.map((el) => {
        console.log(`${el.name}`);
    });
})
    .on('warn', (info) => console.log(info))
    .on('error', console.error)
    .on('message', async (message) => {
    var _a;
    if (message.author.bot)
        return;
    if (!message.guild)
        return;
    console.log(`message arrived, author ${message.author.username}, channel ${(_a = message.guild) === null || _a === void 0 ? void 0 : _a.name}, message ${message.content}`);
    const parsed = discord_command_parser_1.parse(message, '!', {});
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
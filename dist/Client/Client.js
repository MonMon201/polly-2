"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polly = void 0;
const discord_js_1 = require("discord.js");
const getCommands_1 = require("../Utils/getCommands");
class Polly extends discord_js_1.Client {
    constructor() {
        super({});
        this.commands = new discord_js_1.Collection();
    }
    async start(config) {
        console.log(`Starting in ${config.prod ? 'production' : 'development'} mode...`);
        const commands = await getCommands_1.getCommands();
        commands.map((command) => this.commands.set(command.name, command));
        console.log(`Commands have been imported, commands imported: ${this.commands.map((command) => `\n${command.name}`)}`);
        this.login(config.token);
    }
}
exports.Polly = Polly;
//# sourceMappingURL=Client.js.map
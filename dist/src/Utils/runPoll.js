"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPoll = void 0;
const runPoll = async (message, options) => options.map(async (option) => {
    const msg = await message.channel.send(option);
    await msg.react('➕');
});
exports.runPoll = runPoll;
//# sourceMappingURL=runPoll.js.map
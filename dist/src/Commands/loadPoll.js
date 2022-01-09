"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const constants_1 = require("../constants");
const runPoll_1 = require("../Utils/runPoll");
const loadPoll = async (message, args) => {
    const savesRoute = `${__dirname}/../../saves`;
    const saveName = args[0];
    const saveFileName = saveName + '.json';
    const savePath = `${savesRoute}/${saveFileName}`;
    console.log(`save path: ${savePath}`);
    if (!fs_1.existsSync(savePath))
        return;
    console.log(`Save: ${saveFileName}\nStatus: exists`);
    const rawData = fs_1.readFileSync(savePath);
    const poll = JSON.parse(rawData.toString());
    console.log(`parsed: ${poll}`);
    await runPoll_1.runPoll(message, poll.options);
};
const command = {
    name: 'load_poll',
    description: 'Runs saved poll',
    example: `${constants_1.prefix}loadPoll PollName`,
    execute: loadPoll,
    options: [
        {
            name: 'save',
            description: `type in save you'd like to run`,
            type: 3,
            required: true,
        },
    ],
};
module.exports = command;
//# sourceMappingURL=loadPoll.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getOptions_1 = require("../Utils/getOptions");
const runPoll_1 = require("../Utils/runPoll");
const createPoll = async (message, args) => {
    const options = getOptions_1.getOptions(args);
    await runPoll_1.runPoll(message, options);
};
const command = {
    name: 'createPoll',
    description: 'Create a new poll',
    execute: createPoll,
    example: '!createPoll option a, option b, option c',
};
module.exports = command;
//# sourceMappingURL=createPoll.js.map
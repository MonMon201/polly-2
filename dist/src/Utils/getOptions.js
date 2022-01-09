"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = void 0;
const constants_1 = require("../constants");
const getOptions = (args) => {
    return args
        .reduce((acc, arg) => (acc += `${arg[arg.length - 1] === constants_1.separator ? '' : ' '}${arg}`))
        .split(constants_1.separator)
        .map((option) => option[0] === ' ' ? option.slice(1, option.length) : option);
};
exports.getOptions = getOptions;
//# sourceMappingURL=getOptions.js.map
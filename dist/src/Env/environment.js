"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const getConfig = () => {
    const nodeEnv = process.env.NODE_ENV || '';
    if (nodeEnv.trim() === 'production') {
        return {
            token: process.env.TOKEN || '',
            prod: true,
        };
    }
    return {
        token: process.env.TEST_TOKEN0 || '',
        prod: false,
    };
};
exports.getConfig = getConfig;
//# sourceMappingURL=environment.js.map
import { Config } from '../Interfaces/Config';

export const getConfig = (): Config => {
    const nodeEnv = process.env.NODE_ENV || '';
    if (nodeEnv.trim() === 'production') {
        return {
            token: process.env.TOKEN || '',
            prod: true,
        };
    }
    if (nodeEnv.trim() === 'nonprod') {
        return {
            token: process.env.NON_PROD || '',
            prod: true,
        };
    }
    return {
        token: process.env.TEST_TOKEN0 || '',
        prod: false,
    };
};

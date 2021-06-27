import { Config } from '../Interfaces/Config';

export const getConfig = (): Config => {
    if (process.env.NODE_ENV?.trim() == 'production') {
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

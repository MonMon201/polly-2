import { Config } from '../Interfaces/Config';

export const getConfig = (): Config => {
    const nodeEnv = process.env.NODE_ENV || '';
    if (nodeEnv.trim() === 'production') {
        return {
            token: process.env.TOKEN || '',
            client: process.env.PROD_CLIENT || '',
            prod: true,
        };
    }
    if (nodeEnv.trim() === 'nonprod') {
        return {
            token: process.env.NON_PROD || '',
            client: process.env.NON_PROD_CLIENT || '',
            prod: true,
        };
    }
    return {
        token: process.env.TEST_TOKEN0 || '',
        client: process.env.TEST_CLIENT0 || '',
        prod: false,
    };
};

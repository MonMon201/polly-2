import { separator } from '../constants';

export const getOptions = (args: string[]) => {
    return args
        .reduce(
            (acc, arg) =>
                (acc += `${
                    arg[arg.length - 1] === separator ? '' : ' '
                }${arg}`),
        )
        .split(separator)
        .map((option) =>
            option[0] === ' ' ? option.slice(1, option.length) : option,
        );
};

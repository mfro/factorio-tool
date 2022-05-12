import url from './gui-spritesheet.png';

function sprite(x: number, y: number) {
    return function scale(ratio: number) {
        return {
            'background-image': `url("${url}")`,
            'background-position': `-${x * ratio}px -${y * ratio}px`,
            'background-size': `${ratio * 624}px`,
        };
    }
}

export const recipe = {
    base: sprite(0, 736),
    hover: sprite(80, 736),
    active: sprite(160, 736),
};

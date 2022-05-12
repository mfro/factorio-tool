import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'

module.exports = {
    input: 'src/main.ts',
    output: {
        file: 'out/main.js',
        format: 'cjs',
        sourcemap: true,
    },
    context: 'this',
    plugins: [
        typescript({
        }),
        json(),
    ],
    external: [
        'zlib',
    ],
};

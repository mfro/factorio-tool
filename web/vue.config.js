module.exports = {
    devServer: {
        disableHostCheck: true,
        watchOptions: {
            ignored: /node_modules/,
        },
    },

    configureWebpack: (config) => {
        if (process.env.NODE_ENV == 'production') {
            config.output.publicPath = '';
        }
    }
};

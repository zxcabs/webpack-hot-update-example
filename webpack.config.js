/**
 * @author "Evgeny Reznichenko" <kusakyky@gmail.com>
 */

var
    webpack = require('webpack');


module.exports = {
    name: 'webpack-hot-update',
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: './static/assets/',
        filename: 'build.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
    ]
};

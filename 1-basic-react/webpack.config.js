const debug = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path')
const documentRoot = path.resolve(__dirname, 'src')

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './js/client.js',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_mopdules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env',
                    ],
                }
            }]
        }],
    },
    output: {
        path: __dirname + '/src/',
        filename: 'client.min.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    devServer: {
        contentBase: documentRoot,
    }
}

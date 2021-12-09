const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
    module: {
        rules: [
            // Add babel Loader that match js files as development
            {
                test: '/.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader',
              },
            // Add Loaders for
            //    1. converting sass => css
            //    2. Turns css into commonjs
            //    3. Inject styles into DOM
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        // Configure workbox-webpack-plugin
        new WorkboxPlugin.GenerateSW(),
    ],
    output: 
    {
        libraryTarget: 'var',
        library: 'Client',
    },
}

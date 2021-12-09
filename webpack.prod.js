const HtmlWebPackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        libraryTarget: 'var',
        library: 'Client',
      },
    module: {
        rules: [
            // Add babel Loader that match js files as development
            {          
                test: '/.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader',
              },
            //  Add Loaders for
            //    1. converting sass => css
            //    2. Turns css into commonjs
            //    3. Extract css into files
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
              },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        // Configure workbox-webpack-plugin
        new WorkboxPlugin.GenerateSW(),
    ],
    optimization: {
        // Add Optimization for JS and CSS
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],

    }
}

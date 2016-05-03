var webpack = require('webpack');

module.exports = {
    entry: './client/main.js',
    output: {
        path: './client/dist/',
        publicPath: '',
        filename: 'entry.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // make sure to exclude 3rd party code in node_modules
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                exclude: /node_modules/,
                query: {
                    // inline files smaller then 1kb as base64 dataURL
                    limit: 1000,
                    // fallback to file-loader with this naming scheme
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    stylus: {
        use: [require('nib')()],
        import: ['~nib/lib/nib/index.styl']
    },
    devtool: '#source-map',
    debug: true
    // plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        compress: {
    //            warnings: false
    //        }
    //    }),
    //    new webpack.optimize.OccurenceOrderPlugin()]
};

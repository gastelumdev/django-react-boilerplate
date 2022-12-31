const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    entry: {
        main: path.resolve(__dirname, './project/frontend/src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './project/frontend/static/frontend/')
    },
    mode: 'development'
}
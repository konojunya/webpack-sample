module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}

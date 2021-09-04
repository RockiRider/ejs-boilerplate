const path = require("path");

module.exports = {
    entry:{
        vendor: ["./src/resources/index.scss", "./src/resources/partials/footer.scss", "./src/resources/partials/nav.scss"],
    },
    output:{
        path: path.resolve(__dirname, './public'),
        filename: '[name].css'
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry:{
        vendor: ["./src/resources/index.scss", "./src/resources/partials/footer.scss", "./src/resources/partials/nav.scss"],
    },
    output:{
        path: path.resolve(__dirname, 'public'),    //Output Destination
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
    ],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    MiniCssExtractPlugin.loader,    //Extracts CSS from JS
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    watchOptions:{
        ignored: ["/node_modules/","/public"],
    },
    stats: { warnings: false },
};
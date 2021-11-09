const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:"./src/index.js",
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath:"/",
    },
    resolve:{
        extensions: [".js", ".jsx"],
        alias:{

        },
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)\$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    },

            },
            {
                test:/\.html\$/,
                use:{
                        loader: "html-loader",
                    },
                   
                
            },
            {
                test:/\.css\$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(png|gif|jpg|svg)\$/,
                type: "asset/resource"
            },
         ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html',
        }),
        new MiniCssExtractPlugin({
            fliname:"[name].css",
        }),
    ],
    mode:'development',
    devServer:{
        static:{
            directory: path.join(__dirname, 'public')
        },
        compress:true,
        port:9000,
        open:true,
        historyApiFallback:true,
    },
    

}
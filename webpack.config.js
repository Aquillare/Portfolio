const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:"./src/index.js",
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath:"/",
    },
    resolve:{
        extensions: [".js", ".jsx"],
     
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    },

            },
            {
                test:/\.html$/,
                use:{
                        loader: "html-loader",
                    },
                   
                
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/,
                type: "asset"
            },
         ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html',
        }),
        new MiniCssExtractPlugin({
            filename:"styles/[name].css",
        }),
    ],
    mode:'development',
    devServer:{
        static:{
            directory: path.join(__dirname, 'public')
        },
        compress:true,
        port:3002,
        open:true,
        historyApiFallback:true,
    },
    

}
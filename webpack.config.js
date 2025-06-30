
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');



module.exports = {
    mode: 'development', 
    optimization: {
        // minimize: true,
        minimizer: [
            '...', // Esto preserva los minimizadores existentes, como Terser para JS
            new CssMinimizerPlugin() // Aquí agregamos el plugin de CSS
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/, // Excluye styles.css para usar MiniCssExtractPlugin
                use: [
                    'style-loader', // Inyecta CSS al DOM
                    'css-loader' // Interpreta @import y url() como import/require()
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    // attributes: false,
                    minimize: false //si cambio a true minimiza el codigo de html y quita comentarios
                }

            },
            // Usamos asset/resource para manejar imágenes como recursos estáticos
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource', // Emitir el archivo como un recurso separado
                generator: {
                    filename: 'assets/[name][ext]' // Mantener el nombre original
                }
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body', // Esto mueve el script al final del body
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false, // Permite el orden de los archivos CSS
            // chunkFilename: '[id].css'
        })
    ],

}

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyrightPlugin = require('./plugins/copyrightWebpackPlugin');
const { resolve } = require('./utils');

module.exports = function webpackBaseConfig (NODE_ENV = 'development') {
    const config = require('../config')[NODE_ENV];
    const IS_DEVELOPMENT = NODE_ENV === 'development';
    const webpackConfig = {
        entry: {
            index: resolve('src', 'app.tsx')
        },
        output: {
            path: resolve('./'),
            publicPath: config.staticPath,
            filename: `${config.filePath}js/${config.filenameHash ? '[name].[chunkhash:8]' : '[name]'}.js`,
            chunkFilename: `${config.filePath}js/${config.filenameHash ? '[name].[chunkhash:8]' : '[name]'}.js`
        },
        externals: {},
        devtool: config.devtool,
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: [{
                        loader: 'babel-loader',
                        options: IS_DEVELOPMENT ? {
                            cacheDirectory: true,
                            plugins: ['react-hot-loader/babel'],
                        } : {}
                    },{
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                          }
                    }],
                    exclude: /(node_modules)/,
                },
                {
                    test: /\.(js|ts|tsx)$/,
                    loader: 'eslint-loader',
                    enforce: 'pre',
                    include: [resolve('src')],
                    options: {
                        fix: true
                    }
                },
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'source-map-loader'
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.ejs$/,
                    loader: 'ejs-loader'
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        publicPath: config.imgPath,
                        name: function (file) {
                            const fileName = file.substring(file.indexOf('/images/') + 1, file.length);
                            return `${config.filePath}${config.filenameHash ? `${fileName}?[hash:8]` : `${fileName}`}`;
                        }
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'file-loader',
                    query: {
                        publicPath: config.imgPath,
                        name: `${config.filePath}fonts/${config.filenameHash ? '[name].[hash:8]' : '[name]'}.[ext]`
                    }
                },
                {
                    test: /\.s?css$/,
                    include: resolve('src'),
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: IS_DEVELOPMENT,
                            },
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                chunks: IS_DEVELOPMENT ? ['index'] : ['manifest', 'vendor', 'common', 'index'],
                hash: false,
                inject: 'body',
                xhtml: false,
                minify: {
                    removeComments: true,
                }
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
                'process.env.STATIC_PATH': JSON.stringify(config.staticPath),
                'process.env.HOST': JSON.stringify(config.HOST),
                'process.env.API': JSON.stringify(config.API),
            }),
            new MiniCssExtractPlugin({
                filename: IS_DEVELOPMENT ? 'style.css' : `${config.filePath}css/[name].[contenthash:8].css`
            })
        ],
        resolve: {
            alias: {
                '@constants': resolve('src/constants'),
                '@api': resolve('src/api'),
                '@components': resolve('src/components'),
                '@utils': resolve('src/utils'),
                '@scss': resolve('src/assets/scss')
            },
            extensions: ['.ts', '.js', '.tsx']
        },
    };

    // 开发环境服务器配置
    if (IS_DEVELOPMENT) {
        webpackConfig.devServer = {
            contentBase: resolve('dist'),
            compress: false,
            host: '127.0.0.1',
            port: config.port,
            hot: true,
            disableHostCheck: true,
            historyApiFallback: true
        };

        // webpack watch 配置
        webpackConfig.watchOptions = {
            poll: 500,
            ignored: 'node_modules'
        };
        // 热更新
        webpackConfig.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    } else {
          // 公共代码
        webpackConfig.optimization = {
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '-',
                name: 'common',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        name: 'vendor',
                        minChunks: 1,
                        priority: 10
                    }
                }
            },
            runtimeChunk: {
                name: 'manifest',
            }
        };

        // 压缩css
        webpackConfig.plugins.push(
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: { safe: true }
            })
        );

        webpackConfig.plugins.push(
            new webpack.HashedModuleIdsPlugin()
        );
        webpackConfig.plugins.push(
            new webpack.NamedChunksPlugin()
        );
        webpackConfig.plugins.push(
            new CopyrightPlugin(`/**\n * 作者: 王佳欣\n * 站点: http://www.shuxia123.com\n */`)
        );
    }
    return webpackConfig;
};

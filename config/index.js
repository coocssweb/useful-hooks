/*
name: {                                 // 环境名称
    devtool: false,                     // 是否使用devtool
    NODE_ENV: 'production',             // 全局 NODE_ENV 变量
    HOST: 'www.website.com',            // 该环境对应的host
    API: 'www.website.com/api',         // 该环境对应的api
    jsSourceMap: false,                 // 是否使用sourcemap
    cssSourceMap: false,                // 是否使用sourcemap
    eslint: false,                      // 是否使用eslint
    filePath: '',                       // 构建后资源的目录
    staticPath: '',                     // 静态资源资源的CDN路径
    imgPath: '',                        // 图片资源的CDN路径
    filenameHash: true,                 // 构建后的文件，是否使用hash的形式
},
*/

module.exports = {
  production: {
    devtool: false,
    NODE_ENV: 'production',
    HOST: 'http://www.shuxia123.com',
    API: 'http://www.shuxia123.com/api/',
    jsSourceMap: false,
    cssSourceMap: false,
    eslint: false,
    filePath: 'dist/',
    staticPath: './',
    imgPath: '../../',
    filenameHash: true,
    mock: false,
  },
  test: {
    devtool: false,
    NODE_ENV: 'test',
    HOST: 'http://www.shuxia123.com',
    API: 'http://www.shuxia123.com/api/',
    jsSourceMap: false,
    cssSourceMap: false,
    eslint: false,
    filePath: 'dist/',
    staticPath: '',
    imgPath: '../../',
    filenameHash: false,
    mock: false,
  },
  development: {
    port: 9000,
    devtool: 'source-map',
    NODE_ENV: 'development',
    HOST: 'http://www.shuxia123.com',
    API: 'http://www.shuxia123.com/api/',
    jsSourceMap: false,
    cssSourceMap: false,
    eslint: false,
    staticPath: '/',
    filePath: '',
    imgPath: '',
    filenameHash: false,
    mock: true,
  },
};

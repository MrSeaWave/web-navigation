const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require('../config');

const { port } = config;
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // 更容易地追踪错误和警告
  devServer: {
    // 实时加载 live-reloading
    contentBase: path.join(__dirname, '../public'),
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        secure: false, // 接受运行在 HTTPS 上
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    host: '0.0.0.0',
    open: true, // 自动打开浏览器
    port,
    // publicPath: '/test',// 一定要和output设置一样，打包生成的静态文件所在的位置（
    // public: `localhost:${port}`,
    public: `localhost:${port}`, // 不能在此位置加后缀
    historyApiFallback: {
      // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
      // https://webpack.docschina.org/configuration/dev-server/#devserver-historyapifallback
      // index: '/', // Override the index (default /index.html)
      index: config.basePath,
    },
  },
});

// 注意必须要是js文件才可以
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:8000',
        changeOrigin: true,
    }));
};
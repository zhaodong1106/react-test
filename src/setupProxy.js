const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://110.42.229.51:8989',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    );
};
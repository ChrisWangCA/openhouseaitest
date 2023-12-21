const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/openhouse-ai-fe-coding-test',
    createProxyMiddleware({
      target: 'https://storage.googleapis.com',
      changeOrigin: true,
    })
  );
};

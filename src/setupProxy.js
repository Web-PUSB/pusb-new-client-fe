const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      onProxyReq: (proxyReq, req, res) => {
        if (proxyReq.path !== '/pusb-profile') {
          console.log('Proxying request to:', proxyReq.path);
        }
      },
      onError: (err, req, res) => {
        console.error('Proxy error:', err.message);
        res.status(500).send('Proxy Error');
      },
    })
  );
};

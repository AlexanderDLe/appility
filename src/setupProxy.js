const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy(['/scores', '/api', '/auth/google', '/auth/facebook'], {
            target: 'http://localhost:5000'
        })
    );
};

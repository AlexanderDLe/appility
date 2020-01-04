import proxy from 'http-proxy-middleware';

export const setupProxy = (app: any) => {
    app.use(proxy('/api', { target: 'http://localhost:5000' }));
};

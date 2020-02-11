const env = process.env.NODE_ENV;
let redirectURL;
if (env === 'development') redirectURL = 'http://localhost:3000/';
if (env === 'production') redirectURL = 'https://appility.co';

export default {
    Auth: {
        identityPoolId: 'us-west-2:b1d6dc4e-4ac1-48cf-90d6-10ba4f396a62',
        region: 'us-west-2',
        identityPoolRegion: 'us-west-2',
        userPoolId: 'us-west-2_RUTqoKC1C',
        userPoolWebClientId: '5s84ina5rvj1tm5t1318q7k4kl',
        oauth: {
            domain: 'appilityauth.auth.us-west-2.amazoncognito.com/',
            redirectSignIn: redirectURL,
            redirectSignOut: redirectURL,
            responseType: 'token'
        }
    }
};

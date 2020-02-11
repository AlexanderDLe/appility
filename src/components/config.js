export default {
    Auth: {
        identityPoolId: 'us-west-2:b1d6dc4e-4ac1-48cf-90d6-10ba4f396a62',
        region: 'us-west-2',
        identityPoolRegion: 'us-west-2',
        userPoolId: 'us-west-2_RUTqoKC1C',
        userPoolWebClientId: '5s84ina5rvj1tm5t1318q7k4kl',
        oauth: {
            domain: 'appilityauth.auth.us-west-2.amazoncognito.com/',
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'token'
        }
    },
    API: {
        endpoints: [
            {
                name: 'AppilityTestAPI',
                endpoint:
                    'https://5ogygpk95j.execute-api.us-west-1.amazonaws.com/Dev/my-tester'
            }
        ]
    }
};

import React from 'react';

const NodeExpressData = {
    title: 'APIs With Node & Express',
    label: 'NodeExpress',
    param: 'nodeexpress',
    image: 'NodeExpress.png',
    color: '#87c643',
    description: 'Test your Node & Express knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>Middlewares.</li>
                    <li>The request and response cycle.</li>
                    <li>Cookie/Token authentication.</li>
                    <li>The Node.js event loop.</li>
                </ul>
            </>
        );
    },
    items: [
        {
            id: 0,
            question:
                'Node.js® is a JavaScript runtime built on ___ JavaScript engine.',
            options: ['Edge', 'Netscape 3', 'Chromium', "Chrome's V8"],
            answer: "Chrome's V8",
            answerDescription:
                "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
        },
        {
            id: 1,
            question:
                'Node Js is one of the most popular and powerful ___ technologies today.',
            options: ['server', 'frontend', 'mobile', 'tablet'],
            answer: 'server',
            answerDescription:
                'Node Js is one of the most popular and powerful server technologies today.'
        },
        {
            id: 2,
            question:
                '___ is a utility or program on your computer where users type commands to perform some action or run some script rather than clicking on the screen.',
            options: ['Unix', 'CLI', 'Actions', 'Storage'],
            answer: 'CLI',
            answerDescription:
                'CLI stands for Command Line Interface. It is a utility or program on your computer where users type commands to perform some action or run some script rather than clicking on the screen.'
        },
        {
            id: 3,
            question: 'Node js is written in ___.',
            options: ['C++', 'Java', 'Pearl', 'C#'],
            answer: 'C++',
            answerDescription: 'Node js is written in C, C++, JavaScript.'
        },
        {
            id: 4,
            question: '___ is the standard on which Node JS is based on.',
            options: ['TypeScript', 'Engine', 'ECMAScript', 'Chrome V8'],
            answer: 'ECMAScript',
            answerDescription:
                'ECMAScript is the standard on which Node JS is based on.'
        },
        {
            id: 5,
            question:
                '___ is used for installing/updating packages and modules of Javascript.',
            options: ['Zeit', 'NPM', 'Mod', 'Pack'],
            answer: 'NPM',
            answerDescription:
                'NPM is used for installing/updating packages and modules of Javascript.'
        },
        {
            id: 6,
            question:
                '___ is used to include modules from external files in Node Js',
            options: ['in', 'include', 'require()', 'import'],
            answer: 'require()',
            answerDescription:
                'require() is used to include modules from external files in Node Js'
        },
        {
            id: 7,
            question:
                'Node Js is ___ threaded to perform asynchronous processing.',
            options: ['multi', 'single', 'double', 'triple'],
            answer: 'single',
            answerDescription:
                'Node Js is single threaded to perform asynchronous processing. Doing async processing on a single thread could provide more performance and scalability under typical web loads than the typical thread-based implementation.'
        },
        {
            id: 8,
            question:
                'A/An ___ is a mechanism that allows Node.js to perform non-blocking I/O operations.',
            options: ['event loop', 'processor', 'module', 'declaration'],
            answer: 'event loop',
            answerDescription:
                'In Node Js processes are single threaded, to supports concurrency it uses events and callbacks. An event loop is a mechanism that allows Node.js to perform non-blocking I/O operations.'
        },
        {
            id: 9,
            question:
                '___ is a lightweight web application which helps in organizing the web application into MVC architecture on the server side.',
            options: ['Redux', 'Git', 'JavaScript', 'Express'],
            answer: 'Express',
            answerDescription:
                'Express JS is a lightweight web application which helps in organizing the web application into MVC architecture on the server side. A number of flexible, useful and important features are provided by this JavaScript framework for the development of mobile as well as web applications with the help of node JS.'
        },
        {
            id: 10,
            question:
                'What function are arguments available to Express JS middleware route handlers?',
            options: [
                'Request Object',
                'Response Object',
                'Next Function',
                'All of these'
            ],
            answer: 'All of these',
            answerDescription:
                'All of these are available to Express JS route handlers.'
        },
        {
            id: 11,
            question:
                'If the current express middleware function does not end the request-response cycle, it must call ___ to pass control to the next middleware function.',
            options: ['respond()', 'resolve()', 'next()', 'end()'],
            answer: 'next()',
            answerDescription:
                'If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.'
        },
        {
            id: 12,
            question:
                'Bind application-level middleware to an instance of the app object by using the ___',
            options: [
                'app.use()',
                'app.append()',
                'app.middleware()',
                'app.enhance()'
            ],
            answer: 'app.use()',
            answerDescription:
                'Bind application-level middleware to an instance of the app object by using the app.use()'
        },
        {
            id: 13,
            question:
                'Route handlers enable you to define multiple ___ for a path.',
            options: ['modules', 'object', 'routes', 'classes'],
            answer: 'routes',
            answerDescription:
                'Route handlers enable you to define multiple routes for a path.'
        },
        {
            id: 14,
            question:
                '___ middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().',
            options: [
                '3rdparty-level',
                'Server-level',
                'Router-level',
                'Express-level'
            ],
            answer: 'Router-level',
            answerDescription:
                'Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().'
        },
        {
            id: 15,
            question:
                'Express has which of the following built-in middleware functions?',
            options: [
                'express.static',
                'express.json',
                'express.urlencoded',
                'All of these'
            ],
            answer: 'All of these',
            answerDescription:
                'Express has built-in middleware for all of these.'
        },
        {
            id: 16,
            question:
                '___ refers to how Express catches and processes errors that occur both synchronously and asynchronously.',
            options: [
                'Bound Checking',
                'Error Handling',
                'Middleware',
                'Quality Assurance'
            ],
            answer: 'Error Handling',
            answerDescription:
                'Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously. Express comes with a default error handler so you don’t need to write your own to get started.'
        },
        {
            id: 17,
            question:
                'Errors that occur in ___ code inside route handlers and middleware require no extra work.',
            options: ['synchronous', 'parallel', 'concurrent', 'asynchronous'],
            answer: 'synchronous',
            answerDescription:
                'Errors that occur in synchronous code inside route handlers and middleware require no extra work.'
        },
        {
            id: 18,
            question:
                'For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the ___ function, where Express will catch and process them.',
            options: ['resolve()', 'next()', 'send()', 'err()'],
            answer: 'next()',
            answerDescription:
                'For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function, where Express will catch and process them. If you pass anything to the next() function (except the string "route"), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.'
        },
        {
            id: 19,
            question:
                'The event loop is what allows Node.js to perform non-blocking I/O operations by offloading operations to the ___ whenever possible.',
            options: ['client', 'middleware', 'database', 'system kernel'],
            answer: 'system kernel',
            answerDescription:
                'Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.'
        },
        {
            id: 20,
            question:
                '___ are a great way to "configure" different aspects of your Node.js application.',
            options: [
                'Environment variables',
                'Classes',
                'Requests',
                'Methods'
            ],
            answer: 'Environment variables',
            answerDescription:
                'Environment variables are a great way to configure different aspects of your Node.js application. Many cloud hosts (Heroku, Azure, AWS, now.sh, etc.) and Node.js modules use environment variables.'
        },
        {
            id: 21,
            question:
                'When your Node.js process boots up it will automatically provide access to all existing environment variables by creating an env object as property of the ___ global object.',
            options: ['javascript', 'document', 'window', 'process'],
            answer: 'process',
            answerDescription:
                'When your Node.js process boots up it will automatically provide access to all existing environment variables by creating an env object as property of the process global object.'
        },
        {
            id: 22,
            question:
                'Cloud hosts like Heroku or Azure, however, use the PORT variable to tell you on which ___ your server should listen for the routing to work properly.',
            options: ['schedule', 'port', 'hook', 'switch'],
            answer: 'port',
            answerDescription:
                'Cloud hosts like Heroku or Azure, however, use the PORT variable to tell you on which port your server should listen for the routing to work properly.'
        },
        {
            id: 23,
            question:
                "___-based authentication makes use of cookie stored in the user's browser in order to verify their identity after Login.",
            options: ['Session', 'Token'],
            answer: 'Session',
            answerDescription:
                "Authentication can either be Session-based or Token-based. Session-based authentication makes use of cookie stored in the user's browser in order to verify their identity after Login."
        },
        {
            id: 24,
            question:
                "___-based authentication makes use of JSON Web Tokens(JWT) which is sent along with every request to verify the user's identity and this makes it stateless.",
            options: ['Session', 'Token'],
            answer: 'Token',
            answerDescription:
                "Authentication can either be Session-based or Token-based. Session-based authentication makes use of cookie stored in the user's browser in order to verify their identity after Login."
        },
        {
            id: 25,
            question:
                'A/An ___ is a small piece of data that is sent from the web server and saved on the browser, and is automatically included in a request that is sent to a specific server.',
            options: ['cookie', 'handle', 'store', 'auth'],
            answer: 'cookie',
            answerDescription:
                'An HTTP cookie (web cookie, browser cookie) is a small piece of data that is sent from the web server and saved on the browser, and is automatically included in a request that is sent to a specific server.'
        },
        {
            id: 26,
            question:
                'The cookie holds the session id, and whenever a request is made to the server, the ___ retrieves the session id and use it to get the user information.',
            options: ['token', 'database', 'client', 'server'],
            answer: 'server',
            answerDescription:
                'We use cookies together with a session to track user information on the server-side. The cookie holds the session id, and whenever a request is made to the server, the server retrieves the session id and use it to get the user information on the server/database.'
        },
        {
            id: 27,
            question:
                '___-driven programming is building our application based on and respond to events.',
            options: ['Cookie', 'Node', 'Test', 'Event'],
            answer: 'Event',
            answerDescription:
                'Event-driven programming is building our application based on and respond to events. When an event occurs, like click or keypress, we are running a callback function which is registered to the element for that event.'
        },
        {
            id: 28,
            question:
                "___ holds various metadata information about the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.",
            options: ['index.js', 'server.js', 'package.json', 'config.json'],
            answer: 'package.json',
            answerDescription:
                "package.json holds various metadata information about the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies."
        },
        {
            id: 29,
            question:
                'Node.js, being an asynchronous platform, doesn’t wait around for things like file I/O to finish — Node.js uses ___.',
            options: ['methods', 'callbacks', 'classes', 'actions'],
            answer: 'callbacks',
            answerDescription:
                'Node.js, being an asynchronous platform, doesn’t wait around for things like file I/O to finish — Node.js uses callbacks. A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run in the meantime.'
        }
    ]
};

export default NodeExpressData;

import React from 'react';

const ReactData = {
    title: 'React With Redux',
    label: 'Redux',
    param: 'redux',
    image: 'Redux.png',
    color: '#9d42c3',
    description: 'Test your knowledge of React & Redux.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>The redux data flow.</li>
                    <li>Action creators.</li>
                    <li>Application state and reducers.</li>
                    <li>Data immutability.</li>
                </ul>
            </>
        );
    },
    items: [
        {
            id: 0,
            question: 'Redux is a predictable state ___ for JavaScript apps.',
            options: ['validator', 'container', 'boundary', 'function'],
            answer: 'container',
            answerDescription:
                'Container. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.'
        },
        {
            id: 1,
            question:
                'One of the three principles of Redux is the "Single Source of Truth". The state of your whole application is stored in an object tree within a single ___',
            options: ['reducer', 'store', 'action', 'payload'],
            answer: 'store',
            answerDescription:
                'The whole state of your app is stored in an object tree inside a single store. This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort.'
        },

        {
            id: 2,
            question:
                'One of the three principles of Redux is "State Is Read-Only". The only way to change the state is to emit an ___, an object describing what happened.',
            options: ['pushes', 'stores', 'reducers', 'action'],
            answer: 'action',
            answerDescription:
                'The only way to change the state tree is to emit a/an action, an object describing what happened.'
        },
        {
            id: 3,
            question:
                'One of the three principles of Redux is "Changes Are Made With Pure Functions". To specify how the state tree is transformed by actions, you write pure ___.',
            options: ['containers', 'states', 'reducers', 'classes'],
            answer: 'reducers',
            answerDescription:
                'To specify how the actions transform the state tree, you write pure reducers.'
        },
        {
            id: 4,
            question:
                '___ are payloads of information that send data from your application to your store. They are the only source of information for the store.',
            options: ['Storage', 'Actions', 'Reducers', 'Expressions'],
            answer: 'Actions',
            answerDescription:
                'Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().'
        },
        {
            id: 5,
            question:
                'Actions are plain JavaScript objects. Actions must have a ___ property that indicates the type of action being performed.',
            options: ['key', 'payload', 'type', 'id'],
            answer: 'type',
            answerDescription:
                'Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.'
        },
        {
            id: 6,
            question: 'What creates actions to dispatch to reducers?',
            options: [
                'Actioners',
                'Action Generators',
                'Action Producers',
                'Action Creators'
            ],
            answer: 'Action Creators',
            answerDescription:
                "It's easy to conflate the terms “action” and “action creator”, so do your best to use the proper term."
        },
        {
            id: 7,
            question: "It's very important that the reducer stays ___.",
            options: ['pure', 'flexible', 'responsive', 'true'],
            answer: 'pure',
            answerDescription:
                'A reducer should stay pure. Things you should never do inside a reducer: mutate its arguments; perform side effects like API calls and routing transitions; call non-pure functions, e.g. Date.now() or Math.random().'
        },
        {
            id: 8,
            question: 'You must never mutate ___ directly.',
            options: ['components', 'actions', 'state', 'objects'],
            answer: 'state',
            answerDescription:
                'If you change the state, you must return a new state object. Redux looks at whether the object reference has changed to decide to update its store.'
        },
        {
            id: 9,
            question:
                "When you want to split your data handling logic, you'll use ___ composition instead of many stores.",
            options: ['component', 'action', 'store', 'reducer'],
            answer: 'reducer',
            answerDescription:
                "It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores."
        },
        {
            id: 10,
            question:
                'Redux architecture revolves around a strict ___ data flow.',
            options: [
                'bidirectional',
                'tridirectional',
                'monodirectional',
                'unidirectional'
            ],
            answer: 'unidirectional',
            answerDescription:
                'Redux architecture revolves around a strict unidirectional data flow. This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand.'
        },
        {
            id: 11,
            question:
                'Redux works especially well with libraries like React because React lets you describe UI as a function of ___.',
            options: ['storage', 'state', 'properties', 'components'],
            answer: 'state',
            answerDescription:
                'Redux works especially well with libraries like React because React lets you describe UI as a function of state, and Redux emits state updates in response to actions.'
        },
        {
            id: 12,
            question:
                'To connect a React component to Redux, you must utilize ___ from "react-redux"',
            options: [
                'mapStateToProps',
                'connect()',
                'dispatch()',
                'subscribe()'
            ],
            answer: 'connect()',
            answerDescription:
                "Redux suggests generating container components with the React Redux library's connect() function, which provides many useful optimizations to prevent unnecessary re-renders."
        },
        {
            id: 13,
            question:
                'Redux recommends to use a special React Redux component called ___ to magically make the store available to all container components in the application without passing it explicitly.',
            options: ['<Deliver>', '<Router>', '<Connector>', '<Provider>'],
            answer: '<Provider>',
            answerDescription:
                'All container components need access to the Redux store so they can subscribe to it. Redux recommends to use a special React Redux component called <Provider> to magically make the store available to all container components in the application without passing it explicitly.'
        },
        {
            id: 14,
            question:
                'When you call a/an ___ API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).',
            options: ['application', 'asynchronous', 'network', 'synchronous'],
            answer: 'asynchronous',
            answerDescription:
                'When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).'
        },
        {
            id: 15,
            question:
                'To use the synchronous action creators together with network requests, the standard way to do it with Redux is to use the Redux ___ middleware.',
            options: ['Thunk', 'Async', 'Network', 'Deliver'],
            answer: 'Thunk',
            answerDescription:
                'To use the synchronous action creators together with network requests, the standard way to do it with Redux is to use the Redux Thunk middleware. It comes in a separate package called redux-thunk.'
        },
        {
            id: 16,
            question:
                'In computer programming, a thunk is a subroutine used to ___ in another subroutine.',
            options: [
                'inject additional calculation',
                'skip sequences',
                'authenticate data',
                'branch statements'
            ],
            answer: 'inject additional calculation',
            answerDescription:
                'In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine.'
        },
        {
            id: 17,
            question:
                'By using the Thunk middleware, an action creator can return a/an ___ instead of an action object. This way, the action creator becomes a thunk.',
            options: ['component', 'array', 'function', 'reducer'],
            answer: 'function',
            answerDescription:
                'By using the Thunk middleware, an action creator can return a function instead of an action object. This way, the action creator becomes a thunk.'
        },
        {
            id: 18,
            question:
                "When an action creator returns a function, that function will get executed by the Redux Thunk middleware. This function doesn't need to be pure; it is thus allowed to have side effects, including executing ___.",
            options: [
                'asynchronous API calls',
                'synchronous calls',
                'telegraphed actions',
                'concurrent calls'
            ],
            answer: 'asynchronous API calls',
            answerDescription:
                "When an action creator returns a function, that function will get executed by the Redux Thunk middleware. This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls. The function can also dispatch actions"
        },
        {
            id: 19,
            question:
                'How do you include the Redux Thunk middleware in the dispatch mechanism? Use the ___ store enhancer from Redux.',
            options: [
                'setupMiddleware()',
                'applyMiddleware()',
                'designateThunk()',
                'applyThunk()'
            ],
            answer: 'applyMiddleware()',
            answerDescription:
                'How do you include the Redux Thunk middleware in the dispatch mechanism? Use the applyMiddleware() store enhancer from Redux.'
        },
        {
            id: 20,
            question:
                'Without middleware, Redux store only supports ___ data flow.',
            options: ['concurrent', 'parallel', 'asynchronous', 'synchronous'],
            answer: 'synchronous',
            answerDescription:
                'Without middleware, Redux store only supports synchronous data flow. This is what you get by default with createStore().'
        },
        {
            id: 21,
            question:
                'Redux leverages ___ equality checking for increased performance and rendering determination. It simply checks whether two variables reference the same object.',
            options: ['arbitrary', 'hollow', 'shallow', 'deep'],
            answer: 'shallow',
            answerDescription:
                'Redux uses shallow equality checking in its combineReducers function to return either a new mutated copy of the root state object, or, if no mutations have been made, the current root state object.'
        },
        {
            id: 22,
            question:
                'Shallow equality checking cannot be used to detect if a function mutates an object passed into it if that object is mutable. This is because two variables that reference the same object will always be ___.',
            options: ['shallow', 'separate', 'different', 'equal'],
            answer: 'equal',
            answerDescription:
                "Shallow equality checking cannot be used to detect if a function mutates an object passed into it if that object is mutable. This is because two variables that reference the same object will always be equal, regardless of whether the object’s values changes or not, as they're both referencing the same object."
        },
        {
            id: 23,
            question:
                'When working within reducers to return state, as long as you make a copy of the state first, you can safely ___ the copy.',
            options: ['reduce', 'mutate', 'negate', 'dispatch'],
            answer: 'mutate',
            answerDescription:
                'When working within reducers to return state, as long as you make a copy of the state first, you can safely mutate the copy.'
        },
        {
            id: 24,
            question:
                'To inject redux state properties into a react component, you must use ___ to make them available as props.',
            options: [
                'connectToProps',
                'reduxToProps',
                'mapStateToProps',
                'dispatchToProps'
            ],
            answer: 'mapStateToProps',
            answerDescription:
                'To inject redux state properties into a react component, you must use mapStateToProps to make them available as props.'
        },
        {
            id: 25,
            question:
                'By far the most common mistake that prevents components from rendering properly is accidentally ___.',
            options: [
                'forgetting to call dispatch',
                'not mapping state to props',
                'not properly setting up reducers',
                'returning a mutated state'
            ],
            answer: 'returning a mutated state',
            answerDescription:
                'Redux expects that your reducers will update their state “immutably”, which effectively means always making copies of your data, and applying your changes to the copies. If you return the same object from a reducer, Redux assumes that nothing has been changed, even if you made changes to its contents.'
        },
        {
            id: 26,
            question:
                'To inject redux action creators into a component, you must incorporate mapDispatchToProps or manually assign the action creator to the second argument of the ___ function.',
            options: ['dispatch', 'connect', 'return', 'action'],
            answer: 'connect',
            answerDescription:
                'To inject redux action creators into a component, you must incorporate mapDispatchToProps or manually assign the action creator to the second argument of the connect function.'
        },
        {
            id: 27,
            question:
                'Internally, Redux uses the React ___ API that allows it to pass the store along your component tree.',
            options: ['hook', 'connect', 'callback', 'context'],
            answer: 'context',
            answerDescription:
                'Both Redux and React\'s Context API deal with "prop drilling". That said, they both allow you to pass data without having to pass the props through multiple layers of components. Internally, Redux uses the React context API that allows it to pass the store along your component tree.'
        },
        {
            id: 28,
            question:
                'With Redux, you get the the power of ___ Extension. It automatically logs every action your app performs, and it allows time traveling – you can click on any past action and jump to that point in time.',
            options: [
                'Redux Dev Tools',
                'Thunk',
                'Middleware',
                'Error Checking'
            ],
            answer: 'Redux Dev Tools',
            answerDescription:
                'With Redux, you get the the power of Redux Dev Tools Extension. It automatically logs every action your app performs, and it allows time traveling – you can click on any past action and jump to that point in time.'
        },
        {
            id: 29,
            question:
                'Avoid putting ___ values such as Promises, Symbols, Maps/Sets, functions, or class instances into the Redux store state or dispatched actions.',
            options: ['non-serializable', 'serializable'],
            answer: 'non-serializable',
            answerDescription:
                'Avoid putting non-serializable values such as Promises, Symbols, Maps/Sets, functions, or class instances into the Redux store state or dispatched actions. This ensures that capabilities such as debugging via the Redux DevTools will work as expected. It also ensures that the UI will update as expected.'
        }
    ]
};

export default ReactData;

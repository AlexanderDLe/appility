const ReactData = {
    title: 'Modern React',
    label: 'React',
    param: 'react',
    color: '#61dafb',
    items: [
        {
            id: 0,
            question:
                'React is an open-source JavaScript library created by ___ for building complex, interactive UIs in web and mobile applications.',
            options: ['Amazon', 'Microsoft', 'Google', 'Facebook'],
            answer: 'Facebook',
            answerDescription: 'React is built and maintained by Facebook.'
        },
        {
            id: 1,
            question:
                'Specifying classes within JSX will require to you to change the syntax from class to ___.',
            options: ['className', 'classJSX', 'classCall', 'No change.'],
            answer: 'className',
            answerDescription:
                'Changing from class to className is necessary because JavaScript already has built-in class objects/definitions.'
        },
        {
            id: 2,
            question:
                'The ____ is a programming concept where a virtual representation of a UI is kept in memory and synced with the "real" DOM. This process is called reconciliation.',
            options: ['Virtual DOM', 'Buffer', 'State', 'Abstraction'],
            answer: 'Virtual DOM',
            answerDescription:
                'This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.'
        },
        {
            id: 3,
            question:
                '____ let you split the UI into independent, reusable pieces.',
            options: ['Pieces', 'Partials', 'Aspects', 'Components'],
            answer: 'Components',
            answerDescription:
                'React leverages components, which allows different aspects of the UI to be seperated into reusable pieces. This facilitate maintainence, code readability, and a seperation of concerns.'
        },
        {
            id: 4,
            question:
                'All React components must act like pure functions with respect to their prop inputs. In essence, React components _____.',
            options: [
                'must never attempt to change their props.',
                'must always change their props.',
                'can only be rendered once.',
                'must have independent data.'
            ],
            answer: 'must never attempt to change their props.',
            answerDescription:
                'Props are read-only. Whether you declare a component as a function or a class, it must never modify its own props.'
        },
        {
            id: 5,
            question:
                'Whether you use class-based state or react hook states, you must ___.',
            options: [
                'reassign the state with your own variables directly',
                'use a "setState" method to change state',
                'modify the state directly',
                'never change the state'
            ],
            answer: 'use a "setState" method to change state',
            answerDescription:
                'Whether you use class-based state or react hook states, you must use a "setState" method to change the state. React must see that the state being change is actually being replaced by a "new" item in order to rerender any changes.'
        },
        {
            id: 6,
            question:
                'You can render different components depending on the state of your application. This is called ___.',
            options: [
                'component rendering',
                'react rendering',
                'differ rendering',
                'conditional rendering'
            ],
            answer: 'conditional rendering',
            answerDescription:
                'Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators to create elements representing the current state, and let React update the UI to match them.'
        },
        {
            id: 7,
            question:
                '___ help React identify which items have changed, are added, or are removed.',
            options: ['keys', 'id', 'props', 'classes'],
            answer: 'keys',
            answerDescription:
                'Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside a rendered array of components to give the elements a stable identity:'
        },
        {
            id: 8,
            question:
                "A ___ component is a component which has it's inputs tracked by state while a ___ component is a component which does not have its inputs tracked by state.",
            options: [
                'uncontrolled, controlled',
                'controlled, uncontrolled',
                'tracked, untracked',
                'captive, free'
            ],
            answer: 'controlled, uncontrolled',
            answerDescription:
                'Having an uncontrolled element/component in your React application can lead to unwanted behavior and therefore bugs. You want to drive your UI from one source of truth instead; which in React should be props and state.'
        },
        {
            id: 9,
            question: 'React highly reccommends a ___ model.',
            options: [
                'encapsulation',
                'polymorphism',
                'composition',
                'inheritance'
            ],
            answer: 'composition',
            answerDescription:
                'React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components. In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props.'
        },
        {
            id: 10,
            question:
                '___ provides a way to pass data through the component tree without having to pass props down manually at every level.',
            options: ['Consumer', 'Suspense', 'Hooks', 'Context'],
            answer: 'Context',
            answerDescription:
                'In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.'
        },
        {
            id: 11,
            question:
                '___ are React components that catch JavaScript errors anywhere in their child component tree.',
            options: [
                'Error boundaries',
                'Check handlers',
                'Fallbacks',
                'Catchers'
            ],
            answer: 'Error boundaries',
            answerDescription:
                'Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.'
        },
        {
            id: 12,
            question:
                '___ let you return/render a group of children without adding extra nodes to the DOM.',
            options: ['Refs', 'Fragments', 'Props', 'Nodes'],
            answer: 'Fragments',
            answerDescription:
                'A common pattern in React is for a component to return multiple elements. Fragments let you group of children without adding extra nodes to the DOM.'
        },
        {
            id: 13,
            question:
                '___ provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
            options: ['Modals', 'Fragments', 'Portals', 'Class Components'],
            answer: 'Portals',
            answerDescription:
                'Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.'
        },
        {
            id: 14,
            question:
                'React leverages the ability to implement HTML within JavaScript code. This implementation is ___.',
            options: ['ESJ', 'XML', 'JSX', 'CSS'],
            answer: 'JSX',
            answerDescription:
                'JSX. Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.'
        },
        {
            id: 15,
            question:
                'Which of these is NOT a general category in the React lifecycle?',
            options: [
                'Render',
                'State/Property Updates',
                'Initialization',
                'Destruction'
            ],
            answer: 'Render',
            answerDescription:
                'At the highest level, React components have lifecycle events that fall into three general categories: Initialization, State/Property Updates, and Destruction. Every React component defines these events as a mechanism for managing its properties, state, and rendered output.'
        },
        {
            id: 16,
            question:
                'While ES2015 is becoming more and more widespread, it is still far from universally supported on all browsers. To convert modern JavaScript/React code into more legacy code, tools like ___ and webpack are necessary.',
            options: ['Babel', 'Angular', 'jQuery', 'TypeScript'],
            answer: 'Babel',
            answerDescription:
                'Babel will automatically compile modern JavaScript/React/JSX into common legacy JavaScript for compatibility across browsers.'
        },
        {
            id: 17,
            question:
                'The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called ___.',
            options: [
                'documentation',
                'reconciliation',
                'classification',
                'differing'
            ],
            answer: 'reconciliation',
            answerDescription:
                'Reconciliation. React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where necessary.'
        },
        {
            id: 18,
            question:
                'To configure React to build in Production mode, you set process.env.NODE_ENV to ___',
            options: ['production', 'build', 'development', 'null'],
            answer: 'production',
            answerDescription:
                'You set process.env.NODE_ENV to production. When React in production mode, it’ll strip out any extra development features like warnings.'
        },
        {
            id: 19,
            question:
                'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a ___.',
            options: ['function', 'component', 'prop', 'class'],
            answer: 'class',
            answerDescription:
                'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are 100% backwards-compatible - they don’t contain any breaking changes.'
        },
        {
            id: 20,
            question:
                'React Hook ___ returns a pair: the current state value and a function that lets you update it. The only argument to useState is the initial state.',
            options: ['useHook', 'useState', 'useRef', 'useCurrent'],
            answer: 'useState',
            answerDescription:
                'The only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want.'
        },
        {
            id: 21,
            question:
                'Hooks are functions that let you “hook into” React state and lifecycle features from ___ components.',
            options: ['function', 'class', 'render', 'prop'],
            answer: 'function',
            answerDescription:
                'Functions. Hooks don’t work inside classes — they let you use React without classes.'
        },
        {
            id: 22,
            question:
                'You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations ___',
            options: ['mounts', 'hooks', 'updates', 'side-effects'],
            answer: 'side-effects',
            answerDescription:
                'You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.'
        },
        {
            id: 23,
            question: 'By default, React Hook useEffect runs the effects ___.',
            options: [
                'after the first render',
                'only on the first render',
                'on every render including the first'
            ],
            answer: 'on every render including the first',
            answerDescription:
                'When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render.'
        },
        {
            id: 24,
            question:
                'Only call Hooks ___. Don’t call Hooks inside loops, conditions, or nested functions.',
            options: [
                'outside of the functional component',
                'within class components',
                'within the return function',
                'at the top level'
            ],
            answer: 'at the top level',
            answerDescription:
                'Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.'
        },
        {
            id: 25,
            question:
                'Which hook tells React that your component needs to do something after render?',
            options: ['useState', 'Suspense', 'useEffect', 'useContext'],
            answer: 'useEffect',
            answerDescription:
                'React will remember the function you passed (referred to as “effect”), and call it later after performing the DOM updates. By default, it runs both after the first render and after every update.'
        },
        {
            id: 26,
            question:
                'If your effect returns a function, React will run it ___.',
            options: [
                'before component mount',
                'when component first mounts',
                'on every render',
                'on clean up'
            ],
            answer: 'on clean up',
            answerDescription:
                'If your effect returns a function, React will run it when it is time to clean up. React performs the cleanup when the component unmounts.'
        },
        {
            id: 27,
            question:
                'The second argument of useEffect is a dependency ___ that determines whether useEffect is run on each render.',
            options: ['array', 'object', 'variable', 'component'],
            answer: 'array',
            answerDescription:
                'The second argument of useEffect is a dependency array that determines whether useEffect is run on each render. On every render, useEffect checks the state of every element in the dependency array to see if there are any items that need be be updated.'
        },
        {
            id: 28,
            question:
                '___ is used to access data from components further up the component tree without having to manually pass down data.',
            options: ['useEffect', 'useRef', 'useContext', 'useState'],
            answer: 'useContext',
            answerDescription:
                'A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization.'
        },
        {
            id: 29,
            question:
                'The ____ hook is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.',
            options: ['useEffect', 'useReducer', 'useState', 'useContext'],
            answer: 'useReducer',
            answerDescription:
                'useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.'
        }
    ]
};

export default ReactData;

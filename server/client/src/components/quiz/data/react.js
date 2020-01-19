import React from 'react';

const ReactData = {
    title: 'Modern React',
    label: 'React',
    param: 'react',
    image: 'React.png',
    color: '#61dafb',
    description: 'Test your Modern React knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>The Virtual DOM and performance.</li>
                    <li>Stateful components and conditional rendering.</li>
                    <li>Rendering JSX.</li>
                    <li>
                        React Hooks such as useState, useEffect, Suspense, etc.
                    </li>
                </ul>
            </>
        );
    },
    items: [
        {
            id: 0,
            question:
                'React leverages the ability to implement HTML within JavaScript code. This implementation is ___.',
            options: ['ESJ', 'XML', 'JSX', 'CSS'],
            answer: 'JSX',
            answerDescription:
                'JSX. Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.'
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
            id: 3,
            question:
                'The ____ is a programming concept where a virtual representation of a UI is kept in memory and synced with the "real" DOM. This process is called reconciliation.',
            options: ['Virtual DOM', 'Buffer', 'State', 'Abstraction'],
            answer: 'Virtual DOM',
            answerDescription:
                'This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.'
        },
        {
            id: 4,
            question:
                '____ let you split the UI into independent, reusable pieces.',
            options: ['Pieces', 'Partials', 'Aspects', 'Components'],
            answer: 'Components',
            answerDescription:
                'React leverages components, which allows different aspects of the UI to be seperated into reusable pieces. This facilitate maintainence, code readability, and a seperation of concerns.'
        },
        {
            id: 5,
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
            id: 6,
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
            id: 7,
            question:
                'You can render different components depending on the state of your application. This is called ___.',
            options: [
                'component rendering',
                'prop rendering',
                'state rendering',
                'conditional rendering'
            ],
            answer: 'conditional rendering',
            answerDescription:
                'Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators to create elements representing the current state, and let React update the UI to match them.'
        },
        {
            id: 8,
            question:
                '___ help React identify which items have changed, are added, or are removed.',
            options: ['keys', 'id', 'props', 'classes'],
            answer: 'keys',
            answerDescription:
                'Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside a rendered array of components to give the elements a stable identity:'
        },
        {
            id: 9,
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
            id: 10,
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
            id: 11,
            question:
                '___ provides a way to pass data through the component tree without having to pass props down manually at every level.',
            options: ['Consumer', 'Suspense', 'Hooks', 'Context'],
            answer: 'Context',
            answerDescription:
                'In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.'
        },
        {
            id: 12,
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
            id: 13,
            question:
                '___ let you return/redner a group a list of children without adding extra nodes to the DOM.',
            options: ['Refs', 'Fragments', 'Props', 'Nodes'],
            answer: '',
            answerDescription:
                'A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.'
        },
        {
            id: 14,
            question:
                '___ provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
            options: ['Modals', 'Fragments', 'Portals', 'Class Components'],
            answer: 'Portals',
            answerDescription:
                'Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.'
        },
        {
            id: 15,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 16,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 17,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 18,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 19,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 20,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 21,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 22,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 23,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 24,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 25,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 26,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 27,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 28,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 29,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 30,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        }
    ]
};

export default ReactData;

import React from 'react';

const JavaScriptData = {
    title: 'JavaScript Fundamentals',
    label: 'JavaScript',
    param: 'javascript',
    image: 'JavaScript.png',
    color: '#f0da50',
    description: 'Test your JavaScript fundamentals.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>
                        Basics such as variables, functions, arrays, objects,
                        etc.
                    </li>
                    <li>Functional Programming concepts.</li>
                    <li>Object Orientation concepts.</li>
                    <li>Promises and Async-Await.</li>
                </ul>
            </>
        );
    },
    items: [
        {
            id: 0,
            question: 'JavaScript is a ___ typed programming language.',
            options: ['Dynamically', 'Statically', 'Strongly', 'Formally'],
            answer: 'Dynamically',
            answerDescription:
                'JavaScript is dynamically typed; at runtime your compiler will infer what type your variables are and a variable can contain different data types throughout its lifetime.'
        },
        {
            id: 1,
            question:
                'All of the following are valid JavaScript data types except ____.',
            options: ['Number', 'String', 'Float', 'Boolean'],
            answer: 'Float',
            answerDescription:
                'Although float is valid is many other languages, it is consolidated into Number along with integers.'
        },
        {
            id: 2,
            question: 'What are undeclared variables?',
            options: [
                'Variables that do not exist.',
                'Variables that are true.',
                'Variables that are not within scope.',
                'Variables that are false.'
            ],
            answer: 'Variables that do not exist.',
            answerDescription:
                'Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.'
        },
        {
            id: 3,
            question:
                'Which concept determines the accessibility of a given variable in a program?',
            options: ['Prompts', 'Boolean', 'Type', 'Scope'],
            answer: 'Scope',
            answerDescription:
                'Scope determines the accessibility (visibility) of these variables. For exampe, variables defined inside a function are not accessible (visible) from outside the function '
        },
        {
            id: 4,
            question: 'What is the "this" keyword in JavaScript?',
            options: [
                'It always refers to the global object.',
                'It refers to the object from which it was called.',
                'It refers to a simple variable.',
                'It refers to bananas.'
            ],
            answer: 'It refers to the object from which it was called.',
            answerDescription:
                'It refers to the object from which it was called. For example, within a Dog class method, "this" would refer to the Dog class itself.'
        },
        {
            id: 5,
            question:
                'Which operator is used to compare to values that are exactly the same (without any type conversions)?',
            options: ['===', '==', '=', '===='],
            answer: '===',
            answerDescription:
                '=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.'
        },
        {
            id: 6,
            question: 'What would be the result of 3+2+"7"?',
            options: ['"12"', '12', '"57"', '57'],
            answer: '"57"',
            answerDescription:
                'Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. The result would ultimately be the string "57".'
        },
        {
            id: 7,
            question: 'What is the NULL value in Javascript?',
            options: [
                'There is no value.',
                'The value is undefined.',
                'The value is the boolean: false',
                'The value is not declared.'
            ],
            answer: 'There is no value.',
            answerDescription:
                'The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object.'
        },
        {
            id: 8,
            question: 'What is the pop() method?',
            options: [
                'It removes and returns the item at the beginning of the array.',
                'It adds an item to the beginning of the array.',
                'It adds an item to the end of the array.',
                'It removes and returns the item at the end of the array.'
            ],
            answer: 'It removes and returns the item at the end of the array.',
            answerDescription:
                'The pop() method removes the last element off of the given array and returns it. The array on which is called is then altered.'
        },
        {
            id: 9,
            question: 'What is the break statement of a loop?',
            options: [
                'Break statements exit the current loop.',
                'Break statements exit the current iteration but continues to the next loop.',
                'Break statements exit the entire function.',
                'Break statements exit the program.'
            ],
            answer: 'Break statements exit the current loop.',
            answerDescription:
                'Break statement exits from the current loop. Continue statement continues with next statement of the loop.'
        },
        {
            id: 10,
            question: 'What is a primitive data type?',
            options: [
                'A type that is always returns true.',
                'A type that has no methods of its own.',
                'A type that stores other objects.',
                'A type that is an Object.'
            ],
            answer: 'A type that has no methods of its own.',
            answerDescription:
                'A primitive is not an object and has no methods of its own. All primitives are immutable. JavaScript primitives are Boolean, Null, Undefined, Number, String, and Symbol. (Do not confuse constructors with primitives)'
        },
        {
            id: 11,
            question:
                'Which keyword when declaring variables will not allow reassignment?',
            options: ['var', 'let', 'const', 'stay'],
            answer: 'const',
            answerDescription:
                'In JavaScript, "const" means that the identifier cannot be reassigned.'
        },
        {
            id: 12,
            question:
                'Which keyword when declaring variables will allow reassignment but signals it will only be used within its block scope?',
            options: ['var', 'let', 'const', 'block'],
            answer: 'let',
            answerDescription:
                'let is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.'
        },
        {
            id: 13,
            question:
                'Which keyword will allow a child class to inherit from a parent class?',
            options: ['inherit', 'extends', 'evolve', 'from'],
            answer: 'extends',
            answerDescription:
                'To create a class inheritance, use the "extends" keyword.'
        },
        {
            id: 14,
            question:
                'In JavaScript, variables & functions can be declared after it has been used. This is called ___.',
            options: ['declaration', 'hoisting', 'predeclaration', 'func'],
            answer: 'hoisting',
            answerDescription:
                'In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared. This is called hoisting. However, classes are NOT hoisted so you must declare a class before use.'
        },
        {
            id: 15,
            question:
                'Which of the following can be stored and passed into parameters as reference?',
            options: [
                'Primitive Data Types',
                'Reference Data Types',
                'Declared Data Types',
                'Dynamic Data Types'
            ],
            answer: 'Reference Data Types',
            answerDescription:
                'One of the main differences between reference data type and primitive data types is reference data type’s value is stored as a reference, it is not stored directly on the variable, as a value, as the primitive data types are.'
        },
        {
            id: 16,
            question:
                "A ___ is an inner function that has access to the outer (enclosing) function's variable-scope chain.",
            options: ['parameter', 'closure', 'object', 'argument'],
            answer: 'closure',
            answerDescription:
                'The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.'
        },
        {
            id: 17,
            question: 'In JavaScript, functions are ___ objects.',
            options: [
                'primitive',
                'second-class',
                'undocumented',
                'first-class'
            ],
            answer: 'first-class',
            answerDescription:
                'Functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. They can be “stored in variables, passed as arguments to functions, created within functions, and returned from functions”.'
        },
        {
            id: 18,
            question:
                'JavaScript leverages functional programming principles, which specifies the use of functions as ___',
            options: ['scope', 'tests', 'arguments', 'classes'],
            answer: 'arguments',
            answerDescription:
                'At a fundamental level, functional programming specifies the use of functions as arguments.'
        },
        {
            id: 19,
            question: 'What is a function without a name?',
            options: ['anonymous', 'alien', 'private', 'hidden'],
            answer: 'anonymous',
            answerDescription:
                'Anonymous functions can be passed into other functions as parameters.'
        },
        {
            id: 20,
            question: 'Callback functions are ___.',
            options: ['undefined', 'closures', 'low priority', 'second-class'],
            answer: 'closures',
            answerDescription:
                'When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function. This means the callback is a closure.'
        },
        {
            id: 21,
            question:
                'The bundling of data and the methods that act on that data such that access to that data is restricted from outside the bundle is called ___.',
            options: [
                'extension',
                'encapsulation',
                'polymorphism',
                'inheritance'
            ],
            answer: 'encapsulation',
            answerDescription:
                'Encapsulation refers to enclosing all the functionalities of an object within that object so that the object’s internal workings (its methods and properties) are hidden from the rest of the application.'
        },
        {
            id: 22,
            question:
                'The ____ operator, which uses the ... synxtax, copies elements from an array/object into a different array/object.',
            options: ['dot', 'bracket', 'pop', 'spread'],
            answer: 'spread',
            answerDescription:
                'The spread operator ... is used to pull the individual elements out the array.'
        },
        {
            id: 23,
            question:
                'The splice array method ___ the original array while the slice array method ___ the original.',
            options: ['alters, copies', 'copies, alter'],
            answer: 'alters, copies',
            answerDescription:
                'The splice method modifies the array in place while the slice method returns a copy of the desired subset.'
        },
        {
            id: 24,
            question:
                'Aync/Await is a special syntax to facilitate working with JavaScript ___.',
            options: ['classes', 'objects', 'promises', 'functions'],
            answer: 'promises',
            answerDescription:
                'Aync/Await is a special syntax to facilitate working with JavaScript promises. When a function is delcared async, the function always returns a promise. The keyword await makes JavaScript wait until that promise is settled and returns its result.'
        },
        {
            id: 25,
            question:
                'Each JavaScript object has a private property which holds a link to another object called its ___.',
            options: [
                'prototype',
                'class definition',
                'extension links',
                'ancestors'
            ],
            answer: 'prototype',
            answerDescription:
                'When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.'
        },
        {
            id: 26,
            question:
                'JavaScript classes are primary syntactical sugar over the existing ____-based inheritance.',
            options: ['extended', 'dynamic', 'prototype', 'ancestor'],
            answer: 'prototype',
            answerDescription:
                'JavaScript classes, introduced in ES6, are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.'
        },
        {
            id: 27,
            question:
                "The programming technique that attempts to increase a function's performance by caching its previously computed results is called ____.",
            options: [
                'data pipelining',
                'multi-threading',
                'memoization',
                'parallel processing'
            ],
            answer: 'memoization',
            answerDescription:
                'Memoization. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. However, if the data is not cached, then the function is executed, and the result is added to the cache.'
        },
        {
            id: 28,
            question:
                'JavaScript has capability that can execute code out of sequential order to accomodate functions that require some passage of time, interaction etc. This capability is ___ programming.',
            options: ['synchronous', 'asynchronous', 'in-order', 'sequential'],
            answer: 'asynchronous',
            answerDescription:
                "Asynchronous. If you're running an operation that takes time like querying a database and using the results to populate templates, it may be better to push this off the main thread and complete the task asynchronously."
        },
        {
            id: 29,
            question:
                'The ___ object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.',
            options: ['pending', 'synchronous', 'instance', 'promise'],
            answer: 'promise',
            answerDescription:
                'The promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.'
        }
    ]
};

export default JavaScriptData;

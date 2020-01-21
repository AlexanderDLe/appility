import React from 'react';

const TypeScriptData = {
    title: 'TypeScript',
    label: 'TypeScript',
    param: 'typescript',
    image: 'TypeScript.png',
    color: '#007acc',
    description: 'Test your TypeScript knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>Type annotations and inference.</li>
                    <li>TypeScript configuration.</li>
                    <li>Features such as generics, interfaces, etc.</li>
                    <li>Decorators, modules, etc.</li>
                </ul>
            </>
        );
    },
    items: [
        {
            id: 0,
            question:
                'TypeScript is a ___ of JavaScript which primarily provides optional static typing, classes and interfaces.',
            options: ['class', 'superset', 'module', 'subset'],
            answer: 'superset',
            answerDescription:
                'TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. Adopting TypeScript might result in more robust software, while still being deployable where a regular JavaScript application would run.'
        },
        {
            id: 1,
            question: 'JavaScript code is ___  within TypeScript code.',
            options: ['invalid', 'valid'],
            answer: 'valid',
            answerDescription: 'JavaScript code is valid TypeScript code.'
        },
        {
            id: 2,
            question:
                'TypeScript is a free and open source programming language developed and maintained by ___.',
            options: ['Google', 'Facebook', 'Microsoft', 'Amazon'],
            answer: 'Microsoft',
            answerDescription: 'Microsoft'
        },
        {
            id: 3,
            question:
                '___ are able to create a component or function to work over a variety of types rather than a single one.',
            options: ['Generics', 'Actions', 'Variables', 'Decorators'],
            answer: 'Generics',
            answerDescription:
                'Generics are able to create a component or function to work over a variety of types rather than a single one.'
        },
        {
            id: 4,
            question:
                'Which of the following Object Oriented Programming principles does TypeScript support?',
            options: [
                'Encapsulation',
                'Inheritance',
                'Abstraction',
                'Polymorphism',
                'All of these'
            ],
            answer: 'All of these',
            answerDescription:
                'TypeScript can implement all four of them with its smaller and cleaner syntax.'
        },
        {
            id: 5,
            question:
                'In TypeScript, the ___ keyword cannot be used to declare class properties.',
            options: ['try', 'let', 'var', 'const'],
            answer: 'const',
            answerDescription:
                'In TypeScript, the const keyword cannot be used to declare class properties. Doing so causes the compiler to an error with "A class member cannot have the \'const\' keyword."'
        },
        {
            id: 6,
            question:
                '___ files are source map files that let tools map between the emitted JavaScript code and the TypeScript source files that created it.',
            options: ['.ts', '.map', '.object', '.set'],
            answer: '.map',
            answerDescription:
                ".map files are source map files that let tools map between the emitted JavaScript code and the TypeScript source files that created it. Many debuggers (e.g. Visual Studio or Chrome's dev tools) can consume these files so you can debug the TypeScript file instead of the JavaScript file."
        },
        {
            id: 7,
            question:
                'TypeScript supports ___ as a way of intercepting accesses to a member of an object.',
            options: ['retrievers', 'mailers', 'actions', 'getters/setters'],
            answer: 'getters/setters',
            answerDescription:
                'TypeScript supports getters/setters as a way of intercepting accesses to a member of an object. This gives you a way of having finer-grained control over how a member is accessed on each object.'
        },
        {
            id: 8,
            question:
                '___ can be used to modify the behavior of a class or become even more powerful when integrated into a framework.',
            options: [
                'Actions',
                'Decorators',
                'Getters/Setters',
                'Integrations'
            ],
            answer: 'Decorators',
            answerDescription:
                'Decorators can be used to modify the behavior of a class or become even more powerful when integrated into a framework. For instance, if your framework has methods with restricted access requirements (just for admin), it would be easy to write an @admin method decorator to deny access to non-administrative users, or an @owner decorator to only allow the owner of an object the ability to modify it.'
        },
        {
            id: 9,
            question:
                'One of the biggest advantages of Typescript is its code ___.',
            options: [
                'reusability',
                'There are no advantages',
                'flexibility compared to JavaScript',
                'completion and intelligence'
            ],
            answer: 'completion and intelligence',
            answerDescription:
                'One of the biggest advantages of Typescript is its code completion and intelligence.'
        },
        {
            id: 10,
            question:
                'An ___ is a syntactical contract which defines the syntax of any entity.',
            options: ['variable', 'class', 'interface', 'generic'],
            answer: 'interface',
            answerDescription:
                'An interface is a syntactical contract which defines the syntax of any entity. Interfaces in Typescript define properties, methods, and events which are the members of the interface.'
        },
        {
            id: 11,
            question:
                '___ function is used to called parent or base class constructor from Child Class.',
            options: ['super()', 'extend()', 'base()', 'call()'],
            answer: 'super()',
            answerDescription:
                'super() function is used to called parent or base class constructor from Child Class.'
        },
        {
            id: 12,
            question:
                '___ are functions that support annotating or modifying classes and their members. It allows a way to add both annotations and a meta-programming syntax for class declarations and members.',
            options: ['Interfaces', 'Decorators', 'Generics', 'Templates'],
            answer: 'Decorators',
            answerDescription:
                'Decorators are functions that support annotating or modifying classes and thier members. It allows a way to add both annotations and a meta-programming syntax for class declarations and members.'
        },
        {
            id: 13,
            question:
                'In Javascript ___ are another way of building up classes from reusable components is to build them by combining simpler partial classes.',
            options: ['Templates', 'Generics', 'Decorators', 'Mixins'],
            answer: 'Mixins',
            answerDescription:
                'In Javascript Mixins are another way of building up classes from reusable components is to build them by combining simpler partial classes.'
        },
        {
            id: 14,
            question:
                'The ___ keyword is additional syntax for Type assertion in TypeScript.',
            options: ['id', 'key', 'as', 'is'],
            answer: 'as',
            answerDescription:
                'The as keyword is additional syntax for Type assertion in TypeScript.'
        },
        {
            id: 15,
            question:
                'Can an interface extends a class just like a class implements interface?',
            options: ['Yes', 'No'],
            answer: 'Yes',
            answerDescription:
                'An interface can extend a class just like a class implements interface'
        },
        {
            id: 16,
            question:
                '___ - All the members of the class, its child classes, and the instance of the class can access.',
            options: ['Public', 'Private', 'Protected'],
            answer: 'Public',
            answerDescription: 'Public'
        },
        {
            id: 17,
            question:
                '___ - All the members of the class and its child classes can access them. But the instance of the class can not access.',
            options: ['Public', 'Private', 'Protected'],
            answer: 'Protected',
            answerDescription: 'Protected'
        },
        {
            id: 18,
            question: '___ - Only the members of the class can access them.',
            options: ['Public', 'Private', 'Protected'],
            answer: 'Private',
            answerDescription: 'Private'
        },
        {
            id: 19,
            question:
                'In TypeScript, ___ is used to provide type information when there is no explicit type annotation.',
            options: [
                'interfacing',
                'type annotation',
                'type inference',
                'generics'
            ],
            answer: 'type inference',
            answerDescription:
                'In TypeScript, type inference is used to provide type information when there is no explicit type annotation.'
        },
        {
            id: 20,
            question:
                'TypeScript is referred as optionally statically typed, which means we can make the compiler to ignore the type of a variable optionally. To do this, we can use the keyword ___',
            options: ['is', 'any', 'as', 'now'],
            answer: 'any',
            answerDescription:
                'TypeScript is referred as optionally statically typed, which means we can make the compiler to ignore the type of a variable optionally. To do this, we can use the keyword any'
        },
        {
            id: 21,
            question:
                'A ___ is a way that is used for logical grouping of functionalities.',
            options: ['namespace', 'generic', 'template', 'language'],
            answer: 'namespace',
            answerDescription:
                'A namespace is a way that is used for logical grouping of functionalities.'
        },
        {
            id: 22,
            question:
                'The ___ keyword is used for ambient declarations and methods where we want to define a variable that may exist elsewhere.',
            options: ['leverage', 'utilize', 'use', 'declare'],
            answer: 'declare',
            answerDescription:
                'The ___ keyword is used for ambient declarations and methods where we want to define a variable that may exist elsewhere.'
        },
        {
            id: 23,
            question:
                'In the ___ file, we can specify various options to tell the compiler how to compile the current project.',
            options: [
                'tsconfig.module',
                'tsconfig.map',
                'tsconfig.json',
                'tsconfig.lib'
            ],
            answer: 'tsconfig.json',
            answerDescription:
                'In the tsconfig.json file, we can specify various options to tell the compiler how to compile the current project.'
        },
        {
            id: 24,
            question:
                "___ works like a typecasting in other languages, but it doesn't perform type checking or restructuring of data just like other languages can do like C# and Java.",
            options: [
                'Type inference',
                'Type assertion',
                'Type annotating',
                'Type moldling'
            ],
            answer: 'Type assertion',
            answerDescription:
                "Type assertion works like a typecasting in other languages, but it doesn't perform type checking or restructuring of data just like other languages can do like C# and Java."
        },
        {
            id: 25,
            question:
                '___ are a TypeScipt data type that allow us to define a set of named constants.',
            options: ['Interfaces', 'Generics', 'Enums', 'Vars'],
            answer: 'Enums',
            answerDescription:
                'Enums or enumerations are a TypeScipt data type that allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. It is a collection of related values that can be numeric or string values.'
        },
        {
            id: 26,
            question:
                'An ___ function is a function that was declared without any named identifier.',
            options: ['anonymous', 'unknown', 'unleveraged', 'abstained'],
            answer: 'anonymous',
            answerDescription:
                'An anonymous function is a function that was declared without any named identifier.'
        },
        {
            id: 27,
            question:
                'If subclass (child class) has the same method as declared in the parent class, it is known as method ___.',
            options: ['replacing', 'virtualizing', 'knocking', 'overriding'],
            answer: 'overriding',
            answerDescription:
                'If subclass (child class) has the same method as declared in the parent class, it is known as method overriding.'
        },
        {
            id: 28,
            question: '___ is a benefit of TypeScript',
            options: [
                'Modularity',
                'Networking',
                'Flexibility',
                'Compile time error checking.'
            ],
            answer: 'Compile time error checking.',
            answerDescription: 'Compile time error checking.'
        },
        {
            id: 29,
            question: 'To compile any .ts file into .js use following command:',
            options: [
                'typescript compiler',
                'tsc -init',
                'ts compile',
                'tsc <TypeScript File Name>'
            ],
            answer: 'tsc <TypeScript File Name>',
            answerDescription: 'tsc <TypeScript File Name>'
        }
    ]
};

export default TypeScriptData;

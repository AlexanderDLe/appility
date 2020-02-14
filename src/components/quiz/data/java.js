const JavaData = {
    title: 'Java Fundamentals',
    label: 'Java',
    param: 'java',
    image: 'Java.png',
    color: '#e5292d',
    items: [
        {
            id: 0,
            question:
                'The ___ keyword means the class can be used by other classes.',
            options: ['public', 'private', 'protected', 'static'],
            answer: 'public',
            answerDescription:
                'The public keyword means the class can be used by other classes.'
        },
        {
            id: 1,
            question:
                "A ___ method is the gateway between the startup of a Java process, which is managed by the Java Virtual Machine (JVM), and the beginning of the programmer's code.",
            options: ['class()', 'begin()', 'main()', 'run()'],
            answer: 'main()',
            answerDescription:
                "A main() method is the gateway between the startup of a Java process, which is managed by the Java Virtual Machine (JVM), and the beginning of the programmer's code."
        },
        {
            id: 2,
            question:
                'To create an instance of a class, you have to write ___ before it.',
            options: ['instance', 'create', 'init', 'new'],
            answer: 'new',
            answerDescription:
                'To create an instance of a class, you have to write new before it.'
        },
        {
            id: 3,
            question:
                'The purpose of a constructor is to ___, although you can put any code in there.',
            options: [
                'create a class',
                'initialize fields',
                'set a class to public',
                'set a class to private'
            ],
            answer: 'initialize fields',
            answerDescription:
                'The purpose of a constructor is to initialize fields, although you can put any code in there.'
        },
        {
            id: 4,
            question:
                'A ___ type refers to an object (an instance of a class).',
            options: ['reference', 'primitive', 'static'],
            answer: 'reference',
            answerDescription:
                'A reference type refers to an object (an instance of a class). A reference "points" to an object by storing the memory address where the object is located, a concept referred to as a pointer.'
        },
        {
            id: 5,
            question:
                '___ types in Java can be assigned null, which means they do not currently refer to an object.',
            options: ['Instance', 'Static', 'Reference', 'Primitive'],
            answer: 'Reference',
            answerDescription:
                'Reference types can be assigned null, which means they do not currently refer to an object. Primitive types will give you a compiler error if you attempt to assign them null.'
        },
        {
            id: 6,
            question:
                'Garbage collection refers to the process of automatically freeing memory on the ___ by deleting objects that are no longer reachable in your program.',
            options: ['heap', 'stack', 'tree', 'class'],
            answer: 'heap',
            answerDescription:
                'Heap. An object will remain on the heap until it is no longer reachable. An object is no longer reachable when one of two situations occurs: The object no longer has any references pointing to it or when all references to the object have gone out of scope.'
        },
        {
            id: 7,
            question:
                'A key benefit is that Java code gets compiled once rather than needing to be recompiled for different operating systems. This is known as ___.',
            options: ['', '', '', ''],
            answer: 'Platform Independence',
            answerDescription: 'Platform Independence'
        },
        {
            id: 8,
            question:
                '___ occurs when there are different method signatures with the same name but different type parameters.',
            options: ['', '', '', ''],
            answer: 'Method overloading',
            answerDescription: 'Method overloading'
        },
        {
            id: 9,
            question:
                'When Java sees the ___ keyword, it allocates memory for the new object. Java also looks for a constructor and calls it.',
            options: ['', '', '', ''],
            answer: 'new',
            answerDescription: 'new'
        },
        {
            id: 10,
            question:
                'The ___ keyword tells Java you want to reference an instance variable.',
            options: ['', '', '', ''],
            answer: 'this',
            answerDescription: 'this'
        },
        {
            id: 11,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 12,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 13,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 14,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
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
        },
        {
            id: 31,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 32,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 33,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 34,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 35,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 36,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 37,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 38,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 39,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 40,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 41,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 42,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 43,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 44,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 45,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 46,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 47,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 48,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 49,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 50,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 51,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 52,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 53,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 54,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 55,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 56,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 57,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 58,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 59,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        }
    ]
};

export default JavaData;

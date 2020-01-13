import React from 'react';

const TypeScriptData = {
    title: 'TypeScript',
    label: 'TypeScript',
    image: 'TypeScript.png',
    color: '#007acc',
    description: 'Test your TypeScript knowledge with this quiz!',
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
            id: 1,
            Question: 'Is Earth round?',
            Option1: 'Yes',
            Option2: 'No',
            Option3: 'Not anymore.',
            Option4: 'The Earth is flat.',
            AnswerDescription: 'Yes. The Earth is actually round.'
        },
        {
            id: 2,
            Question: 'Who is the punkiest monkie?',
            Option1: 'Vivian',
            Option2: 'Peter',
            Option3: 'You.',
            Option4: 'A monkey.',
            AnswerDescription: 'Vivian is of course the punkiest.'
        },
        {
            id: 3,
            Question: 'Are you sick?',
            Option1: 'Yes I am',
            Option2: 'Nope',
            Option3: 'Not anymore.',
            Option4: "I don't know.",
            AnswerDescription: 'Yes, I havea the cold.'
        }
    ]
};

export default TypeScriptData;

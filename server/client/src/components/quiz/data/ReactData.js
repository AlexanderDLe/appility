import React from 'react';

const ReactData = {
    title: 'Modern React',
    label: 'React',
    image: 'React.png',
    color: '#61dafb',
    description: 'Test your React fundamentals with this quiz!',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>
                        Fundamental React concepts such as the Virtual DOM,
                        stateful components, conditional rendering, JSX, etc.
                    </li>
                    <li>
                        New React Hooks such as useState, useEffect, Suspense,
                        etc.
                    </li>
                </ul>
            </>
        );
    },
    items: [
        {
            id: 1,
            Question: 'Is Earth round?',
            Options: ['Yes', 'No', 'Not anymore.', 'The Earth is flat.'],
            AnswerDescription: 'Yes. The Earth is actually round.'
        },
        {
            id: 2,
            Question: 'Who is the punkiest monkie?',
            Options: ['Yes', 'No', 'Not anymore.', 'The Earth is flat.'],
            AnswerDescription: 'Vivian is of course the punkiest.'
        },
        {
            id: 3,
            Question: 'Are you sick?',
            Options: ['Yes', 'No', 'Not anymore.', 'The Earth is flat.'],
            AnswerDescription: 'Yes, I havea the cold.'
        }
    ]
};

export default ReactData;

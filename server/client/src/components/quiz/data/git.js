import React from 'react';

const GitData = {
    title: 'Version Control With Git/Github',
    label: 'Git',
    param: 'git',
    image: 'Git.png',
    color: '#f44c28',
    description: 'Test your git knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>Version control systems.</li>
                    <li>Push and pull requests.</li>
                    <li>Staging and committing.</li>
                    <li>Branching and merging.</li>
                </ul>
            </>
        );
    },
    items: [
        {
            id: 0,
            question:
                'Git is a free and open source distributed ___ designed to handle everything from small to very large projects with speed and efficiency.',
            options: [
                'application framework',
                'server render',
                'database manager',
                'version control system'
            ],
            answer: 'version control system',
            answerDescription:
                'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.'
        },
        {
            id: 1,
            question:
                'The command to create an empty Git repository or reinitialize an existing one:',
            options: ['git init', 'git start', 'git begin', 'git go'],
            answer: 'git init',
            answerDescription:
                'git init creates an empty Git repository - basically a .git directory with subdirectories for objects, refs/heads, refs/tags, and template files. An initial HEAD file that references the HEAD of the master branch is also created.'
        },
        {
            id: 2,
            question: 'The command to copy a repository into a new directory:',
            options: ['git add', 'git start', 'git init', 'git clone'],
            answer: 'git clone',
            answerDescription:
                'git clone clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository (visible using git branch --remotes), and creates and checks out an initial branch that is forked from the cloned repository’s currently active branch.'
        },
        {
            id: 3,
            question: 'The command to copy add file contents to the index:',
            options: ['git init', 'git add', 'git commit', 'git start'],
            answer: 'git add',
            answerDescription:
                'git add updates the index using the current content found in the working tree, to prepare the content staged for the next commit.'
        },
        {
            id: 4,
            question: 'The command to show the working tree status:',
            options: ['git add', 'git status', 'git show', 'git graph'],
            answer: 'git status',
            answerDescription:
                'git status displays paths that have differences between the index file and the current HEAD commit, paths that have differences between the working tree and the index file, and paths in the working tree that are not tracked by Git.'
        },
        {
            id: 5,
            question: 'The command to record changes to the repository:',
            options: ['git stick', 'git promise', 'git add', 'git commit'],
            answer: 'git commit',
            answerDescription:
                'git commit creates a new commit containing the current contents of the index and the given log message describing the changes.'
        },
        {
            id: 6,
            question: 'The command to list, create, or delete branches:',
            options: ['git tree', 'git branch', 'git path', 'git fork'],
            answer: 'git branch',
            answerDescription: 'git branch lists, creates, or deletes branches.'
        },
        {
            id: 7,
            question:
                'The command to join two or more development histories together:',
            options: ['git mash', 'git fork', 'git merge', 'git combine'],
            answer: 'git merge',
            answerDescription:
                'git merge incorporates changes from the named commits (since the time their histories diverged from the current branch) into the current branch.'
        },
        {
            id: 8,
            question:
                'The command to fetch from and integrate with another repository or a local branch:',
            options: ['git pull', 'git push', 'git commit', 'git take'],
            answer: 'git pull',
            answerDescription:
                'git pull incorporates changes from a remote repository into the current branch'
        },
        {
            id: 9,
            question:
                'The command to update remote refs along with associated objects:',
            options: ['git update', 'git pull', 'git merge', 'git push'],
            answer: 'git push',
            answerDescription: ''
        }
    ]
};

export default GitData;

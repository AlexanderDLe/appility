import React from 'react';

export const JavaScriptData = {
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
    }
};

export const GitData = {
    title: 'Version Control With Git',
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
    }
};

export const NodeExpressData = {
    title: 'APIs With Node & Express',
    label: 'NodeExpress',
    param: 'nodeexpress',
    image: 'NodeExpress.png',
    color: '#4bae4f',
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
    }
};

export const ReactData = {
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
                        React Hooks such as useState, useEffect, context, etc.
                    </li>
                </ul>
            </>
        );
    }
};

export const ReduxData = {
    title: 'React With Redux',
    label: 'Redux',
    param: 'redux',
    image: 'Redux.png',
    color: '#7f42c3',
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
    }
};

export const TypeScriptData = {
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
    }
};

export const JavaData = {
    title: 'OOP With Java (Incomplete)',
    label: 'Java',
    param: 'java',
    image: 'Java.jpg',
    color: '#e5292d',
    description: 'Test your Java knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>This quiz is incomplete.</li>
                    <li>Content will be placed here</li>
                </ul>
            </>
        );
    }
};

export const AWSFundamentalsData = {
    title: 'AWS Fundamentals',
    label: 'AWS Fundamentals',
    param: 'awsfundamentals',
    image: 'AWS.jpg',
    color: '#fcb134',
    description: 'Test your AWS Fundamentals knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>The Pillars of AWS</li>
                    <li>EC2 Instances</li>
                    <li>Route 53, RDS, Elasticache.</li>
                    <li>ELB, ASG, EBS, Target Groups, etc.</li>
                    <li>S3 Buckets, Policies, Security, and more.</li>
                </ul>
            </>
        );
    }
};

export const AWSDevAssociatesData = {
    title: 'AWS Associate Developer',
    label: 'AWS Associate Developer',
    param: 'awsassociatedeveloper',
    image: 'AWS.jpg',
    color: '#fcb134',
    description: 'Test your AWS Associate Developer knowledge.',
    dropdownText: () => {
        return (
            <>
                <h3>This Quiz Covers:</h3>
                <ul>
                    <li>AWS CLI, SDK, IAM Roles and Policies.</li>
                    <li>Elastic Beanstalk</li>
                    <li>CICD: CodeCommit, CodePipeline, CodeBuild, etc.</li>
                    <li>CloudFormation</li>
                    <li>CloudWatch, X-Ray, CloudTrail, and more...</li>
                </ul>
            </>
        );
    }
};

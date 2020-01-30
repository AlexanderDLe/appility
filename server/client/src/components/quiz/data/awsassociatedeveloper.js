const AWSAssociatesData = {
    title: 'AWS Associate Developer',
    label: 'AWS Associate Developer',
    param: 'awsassociatedeveloper',
    color: '#fcb134',
    items: [
        {
            id: 0,
            question:
                'To properly access EC2 instances with the CLI, you should configure ___ to allow access.',
            options: ['SNS', 'SQS Policy', 'IAM Roles', 'CLI Configs'],
            answer: 'IAM Roles',
            answerDescription:
                'To properly access EC2 instances with the CLI, you should configure IAM Roles to allow access. You must attach a role ontoEC2 instances, which can then use these profiles automatically.'
        },
        {
            id: 1,
            question: '___ can be attached to IAM Roles',
            options: ['EC2s', 'Policies', 'Data Streams', 'Accessors'],
            answer: 'Policies',
            answerDescription:
                'Policies can be attached to roles. You can use preset policies or you can create your own with the visual editor or the AWS JSON generator.'
        },
        {
            id: 2,
            question:
                'You can use the AWS ___ to test accesses/denies when setting up policies.',
            options: ['CloudWatch', 'CloudFront', 'SQS', 'Policy Simulator'],
            answer: 'Policy Simulator',
            answerDescription:
                'You can use the AWS Policy Simulator to test accesses/denies when setting up policies. Great for debugging policies/accesses.'
        },
        {
            id: 3,
            question:
                'You can use the ___ flag in the CLI to test whether a command works - it will only let you know if the CLI command has permission or not.',
            options: ['--dry-run', '--test', '--watch', '-dart'],
            answer: '--dry-run',
            answerDescription:
                'You can use the --dry-run flag in the CLI to test whether a command works - it will only let you know if the CLI command has permission or not.'
        },
        {
            id: 4,
            question:
                'If API calls fail, you can decode the error message with the ___.',
            options: [
                'SQS Long Polling',
                'ECR Registry',
                'STS decode-auth-decrypt',
                'STS decode-authorization-message'
            ],
            answer: 'STS decode-authorization-message',
            answerDescription:
                'If API calls fail, you can decode the error message with the STS decode-authorization-message. It will give you JSON response with relevant information about the error.'
        },
        {
            id: 5,
            question:
                'EC2 instances can learn about themselves with EC2 Instance Metadata. You can use the URL ____',
            options: [
                'http://169.254.169.254/latest/meta/',
                'http://169.254.169.254/user/meta-data/',
                'http://169.254.169.254/access/meta-data/',
                'http://169.254.169.254/latest/meta-data/'
            ],
            answer: 'http://169.254.169.254/latest/meta-data/',
            answerDescription:
                'EC2 instances can learn about themselves with EC2 Instance Metadata. You can use the URL http://169.254.169.254/latest/meta-data/ - you can retrieve the IAM Role name from the metadata but not the policies.'
        },
        {
            id: 6,
            question:
                'To perform actions directly from your application code, you can use the AWS ___.',
            options: ['SDK', 'CLI', 'SQS', 'SNS'],
            answer: 'SDK',
            answerDescription:
                'To perform actions directly from your application code, you can use the AWS SDK. AWS CLI uses the Python SDK (boto3).'
        },
        {
            id: 7,
            question: 'It is recommended to use the ___ when using SDKs.',
            options: [
                'preset AWS authorization',
                'default credential provider chain',
                'application CLI interface'
            ],
            answer: 'default credential provider chain',
            answerDescription:
                'It is recommended to use the default credential provider chain when using SDKs. It works seamlessly with AWS credentials, IAM Roles, and environment variables.'
        },
        {
            id: 8,
            question:
                'When any API fails too many times, SDK will have a retry mechanism which will double in time every call to prevent overloading the API. This is called ___',
            options: [
                'Exponential Backoff',
                'Operational Overload',
                'Eventual Consistency',
                'Doubling Consistency'
            ],
            answer: 'Exponential Backoff',
            answerDescription:
                'When any API fails too many times, SDK will have a retry mechanism which will double in time every call to prevent overloading the API. This is called ___'
        },
        {
            id: 9,
            question: 'To use multiple AWS accounts via the CLI, use AWS ___.',
            options: ['roles', 'policies', 'profiles', 'SDK'],
            answer: 'profiles',
            answerDescription:
                'To use multiple AWS accounts via the CLI, use AWS profiles.'
        },
        {
            id: 10,
            question:
                'Elastic ___ lets you deploy applications from a developer centric point of view.',
            options: ['EC2', 'RDS', 'S3', 'Beanstalk'],
            answer: 'Beanstalk',
            answerDescription:
                'Elastic Beanstalk lets you deploy applications from a developer centric point of view. It contains all AWS components from one view.'
        },
        {
            id: 11,
            question: 'Beanstalk is a ___ service.',
            options: ['3rd party', 'deprecated', 'managed'],
            answer: 'managed',
            answerDescription:
                'Beanstalk is a managed service; configuration and OS is handled by beanstalk. A managed service is a service managed by AWS.'
        },
        {
            id: 12,
            question:
                'Beanstalk has 3 components - Application, Application Version, and ___.',
            options: ['Database', 'Daemon', 'Environment', 'Queue'],
            answer: 'Environment',
            answerDescription:
                'Beanstalk has 3 components - Application, Application Version, and Environment.'
        },
        {
            id: 13,
            question:
                'AWS ___ allows you to send emails using SMTP or AWS SDK. Ability to receive or send emails.',
            options: ['SES', 'SQS', 'SNS', 'RDS'],
            answer: 'SES',
            answerDescription:
                'AWS SES (Simple Email Service) allows you to send emails using SMTP or AWS SDK. Ability to receive or send emails. Integrates with S3, SNS, and Lambda.'
        },
        {
            id: 14,
            question: 'AWS RedShift is used for processing ___.',
            options: ['emails', 'big data', 'queries', 'applications'],
            answer: 'big data',
            answerDescription:
                'AWS RedShift - OLAP - is used for processing. Analytical Processing/Analytics queries.'
        },
        {
            id: 15,
            question:
                'Single Instance Beanstalk configuration is best for ___ environments.',
            options: ['production', 'test/dev'],
            answer: 'test/dev',
            answerDescription:
                'Single Instance Beanstalk configuration is best for test/dev environments - it comes with a minimal cost setup that will get you up and running. Single AZ.'
        },
        {
            id: 16,
            question:
                'High Availability Beanstalk configuration is best for ___',
            options: ['production', 'test/dev'],
            answer: 'production',
            answerDescription:
                'High Availability Beanstalk configuration is best for full production - it comes with a load balancer, auto scaling groups, and other system components. Multi AZ.'
        },
        {
            id: 17,
            question:
                'For production, it is better to create an RDS ___ to Beanstalk because if Beanstalk is deleted, so is the RDS.',
            options: ['internal', 'external'],
            answer: 'external',
            answerDescription:
                'For production, it is better to create an RDS external to Beanstalk because if Beanstalk is deleted, so is the RDS.'
        },
        {
            id: 18,
            question:
                '___ Beanstalk Deployment: All instances update simultaneously but will be unavailable - fastest/cheapest.',
            options: [
                'Rolling',
                'Rolling With Additional Batches',
                'All-At-Once',
                'Immutable',
                'Blue/Green'
            ],
            answer: 'All-At-Once',
            answerDescription:
                'All-At-Once Beanstalk Deployment: All instances update simultaneously but will be unavailable - fastest/cheapest.'
        },
        {
            id: 19,
            question:
                '___ Beanstalk Deployment: Progressively update a few instances at a time to avoid unavailability - will take longer.',
            options: [
                'Rolling',
                'Rolling With Additional Batches',
                'All-At-Once',
                'Immutable',
                'Blue/Green'
            ],
            answer: 'Rolling',
            answerDescription:
                'Rolling Beanstalk Deployment: Progressively update a few instances at a time to avoid unavailability - will take longer.'
        },
        {
            id: 20,
            question:
                '___ Beanstalk Deployment: Similar to Rolling Deployment - but creates new instances for updating instances to move the batch so instances are still available.',
            options: [
                'Rolling',
                'Rolling With Additional Batches',
                'All-At-Once',
                'Immutable',
                'Blue/Green'
            ],
            answer: 'Rolling With Additional Batches',
            answerDescription:
                'Rolling With Additional Batches Beanstalk Deployment: Similar to Rolling Deployment - but creates new instances for updating instances to move the batch so instances are still available.'
        },
        {
            id: 21,
            question:
                '___ Beanstalk Deployment: Creates new instances in new ASG, versions these new instances, then swap instances when everything is healthy.',
            options: [
                'Rolling',
                'Rolling With Additional Batches',
                'All-At-Once',
                'Immutable',
                'Blue/Green'
            ],
            answer: 'Immutable',
            answerDescription:
                'Immutable Deployment: Creates new instances in new ASG, versions these new instances, then swap instances when everything is healthy.'
        },
        {
            id: 22,
            question:
                '___ Beanstalk Deployment: Not a "direct feature" - Create a new "stage" environment and deploy v2 there. Route 53 can be setup using weighted policies to redirect a little bit of traffic to stage the environment. Using Beanstalk, "swap URLS" when done with the environment test.',
            options: [
                'Rolling',
                'Rolling With Additional Batches',
                'All-At-Once',
                'Immutable',
                'Blue/Green'
            ],
            answer: 'Blue/Green',
            answerDescription:
                'Blue/Green Beanstalk Deployment: Not a "direct feature" - Create a new "stage" environment and deploy v2 there. The new environment (green) can be validated independently and roll back if any issues. Route 53 can be setup using weighted policies to redirect a little bit of traffic to stage the environment. Using Beanstalk, "swap URLS" when done with the environment test.'
        },
        {
            id: 23,
            question: 'All code must be ___ when deployed to Beanstalk.',
            options: ['zipped', 'unzipped'],
            answer: 'zipped',
            answerDescription:
                'All code must be zipped when deployed to Beanstalk.'
        },
        {
            id: 24,
            question:
                'All parameters set in the Beanstalk UI can also be configured in the code using files. Requirements: place a ___ directory in the root of the source code in YAML/JSON format. .config extensions for each file.',
            options: ['.ebx', '.ebextend', '.ebextensions'],
            answer: '.ebextensions',
            answerDescription:
                'All parameters set in the UI can also be configured in the code using files. Requirements: place .ebextensions directory in the root of the source code in YAML/JSON format. .config extensions for each file. You can modify default settings, add resources (RDS, etc.). Resources managed by .ebextensions will be deleted if environment is deleted.'
        },
        {
            id: 25,
            question:
                'AWS ___ is a CDN (Content Delivery Network). Improves performance by caching content at the edge (global networks).',
            options: ['CloudWatch', 'CloudFront', 'CloudEvents', 'CloudCommit'],
            answer: 'CloudFront',
            answerDescription:
                'AWS CloudFront is a CDN (Content Delivery Network). Improves performance by caching content at the edge (global networks).'
        },
        {
            id: 26,
            question:
                'AWS ___ allows you to host public SSL certificates. ACM can provision and renew a public certificate for you free of cost.',
            options: ['SNS', 'SQS', 'ELB', 'ACM'],
            answer: 'ACM',
            answerDescription:
                'AWS ACM (AWS Certificate Manager) allows you to host public SSL certificates. ACM can provision and renew a public certificate for you free of cost. ACM loads SSL certificates for Load Balancers, CloudFront distributions, APIs on Gateways, etc.'
        },
        {
            id: 27,
            question:
                'When deploying to Beanstalk, you can package ___ with the zip file to increase performance and speed.',
            options: ['speedup', 'JSON', 'dependencies'],
            answer: 'dependencies',
            answerDescription:
                'When deploying to Beanstalk, you can package dependencies (eg. node_modules) with the zip file to increase performance and speed.'
        },
        {
            id: 28,
            question:
                'You can create ___ that leverage policy variables (such as usernames) to scale unique IAM policies.',
            options: ['Static Policies', 'Normal Policies', 'Dynamic Policies'],
            answer: 'Dynamic Policies',
            answerDescription:
                'You can create Dynamic Policies that leverage policy variables (such as usernames) to scale unique IAM policies.'
        },
        {
            id: 29,
            question:
                'AWS ___ is a visual workflow to orchestrate Lambda Functions.',
            options: ['X-Ray', 'Step Functions', 'RedShift', ''],
            answer: 'Step Functions',
            answerDescription:
                'AWS Step Functions is a visual workflow to orchestrate Lambda Functions. Represent flow as a JSON state machine. SWF (Simple Workflow Service) coordinates work amongst work on EC2 (not serverless). Step Functions is recommended except if you need external signals to intervene in the process or if you need child processes that return values to parent processes.'
        },
        {
            id: 30,
            question: 'Beanstalk can store at most ___ application versions.',
            options: ['1', '10', '1000', '100'],
            answer: '1000',
            answerDescription:
                'Beanstalk can store at most 1000 application versions. If you do not remove old versions, you will not be able to deploy anymore. You use can a Lifestyle Policy to phase out older versions based on time or space. Versions currently used will not be deleted.'
        },
        {
            id: 31,
            question:
                'If your application performs tasks that are long to complete, offload these tasks to a dedicated ___ environment.',
            options: ['web-server', 'worker', 'test'],
            answer: 'worker',
            answerDescription:
                'If your application performs tasks that are long to complete, offload these tasks to a dedicated worker environment. Decoupling your application into two tiers is common. (Example: processing a video, generating a zip file, etc.) You can define periodic tasks in a cron.yaml file.'
        },
        {
            id: 32,
            question:
                'KMS can only encrypt up to 4KB of data per call. If data > 4KB, use ___.',
            options: ['Parallel Upload', 'Envelope Encryption', 'Multi Load'],
            answer: 'Envelope Encryption',
            answerDescription:
                'KMS can only encrypt up to 4KB of data per call. If data > 4KB, use Envelope Encryption == Encryption SDK == GenerateDataKey API.'
        },
        {
            id: 33,
            question:
                'AWS ___ is secure storage for AWS configuration and secrets.',
            options: ['DynamoDB', 'EC2', 'Resource Center', 'Parameter Store'],
            answer: 'Parameter Store',
            answerDescription:
                'AWS Parameter Store - Secure storage for configuration and secrets. Optional seamless encryption using KMS. Serverless, scalable, durable, easy SDK, free. Config management using path & IAM.'
        },
        {
            id: 34,
            question:
                'AWS manages encryption keys with ___. Fully integrated with IAM for authorization.',
            options: ['AES', 'KMS', 'AWS Keys', 'Key Storage'],
            answer: 'KMS',
            answerDescription:
                'AWS manages encryption keys with KMS (Key Management Service). Fully integrated with IAM for authorization. Anytime you need to share sensitive information, use KMS. You can create, rotate, disable, end enable keys.'
        },
        {
            id: 35,
            question:
                'When evaluating if an IAM Principal can perform an operation on a bucket, the ___ of its assigned IAM Policies and S3 Bucket Policies will be evaluated.',
            options: ['UNION', 'INTERSECTION'],
            answer: 'UNION',
            answerDescription:
                'When evaluating if an IAM Principal can perform an operation on a bucket, the UNION of its assigned IAM Policies and S3 Bucket Policies will be evaluated. Denies override Allows.'
        },
        {
            id: 36,
            question: 'AWS CodeCommit offers unlimited sized private ___.',
            options: [
                'NoSQL Databases',
                'SQL Databases',
                'Git repositories',
                'Streams'
            ],
            answer: 'Git repositories',
            answerDescription:
                'AWS CodeCommit offers unlimited sized private Git repositories. Code only available in your AWS Cloud Accout. Secure. Integrated with Jenkins/CodeBuild/Other CI Tools. AWS CodeCommit interactions are standard Git commands.'
        },
        {
            id: 37,
            question:
                'To ensure the X-Ray Daemon is correctly discovered on ECS, you can configure the environment variable ___. Set the host and port of the XRAY Daemon listener.',
            options: [
                'AWS_XRAY_DAEMON_SERVE',
                'AWS_XRAY_DAEMON_REGISTER',
                'AWS_XRAY_DAEMON_ADDRESS'
            ],
            answer: 'AWS_XRAY_DAEMON_ADDRESS',
            answerDescription:
                'To ensure the X-Ray Daemon is correctly discovered on ECS, you can configure the environment variable AWS_XRAY_DAEMON_ADDRESS. Set the host and port of the XRAY Daemon listener.'
        },
        {
            id: 38,
            question:
                'You can trigger notifications in CodeCommit using ___ or Lambda or CloudWatch Event Rules.',
            options: ['SQS', 'RDS', 'EC2', 'SNS'],
            answer: 'SNS',
            answerDescription:
                'You can trigger notifications in CodeCommit using AWS SNS (Simple Notification Service) or AWS Lambda or AWS CloudWatch Event Rules. 1) SNS/Lambda For branch deletion, master branch pushes, etc. 2) Cloudwatch for pull request updates/commit comment events.'
        },
        {
            id: 39,
            question:
                '___ has a visual workflow and orchestrates all of the follow stages: 1) Source: Github/CodeCommit. 2) Build: CodeBuild/Jenkins/etc. 3) Load Testing: 3rd party tools 4) Deploy: CodeDeploy/BeanStalk/CloudFormation.',
            options: ['RedShift', 'Kinesis', 'CodePipeline', 'X-Ray'],
            answer: 'CodePipeline',
            answerDescription:
                'CodePipeline has a visual workflow and orchestrates all of the follow stages: 1) Source: Github/CodeCommit. 2) Build: CodeBuild/Jenkins/etc. 3) Load Testing: 3rd party tools 4) Deploy: CodeDeploy/BeanStalk/CloudFormation. Each stage can have sequential actions and/or parallel actions. You can have manual approval at any stage.'
        },

        {
            id: 40,
            question:
                'Each CodePipeline stage can create ___. Artifacts are passed stored in Amazon S3 and passed onto the next stage.',
            options: ['assets', 'artifacts', 'items', 'pipes'],
            answer: 'artifacts',
            answerDescription:
                'Each CodePipeline stage can create artifacts. Artifacts are passed stored in Amazon S3 and passed onto the next stage.'
        },
        {
            id: 41,
            question:
                'CodePipeline stage changes happen in AWS ___, which can in return create SNS notifications. (eg. you can create events for failed pipelines, cancelled stages, etc).',
            options: ['CloudWatch Events', 'SNS', 'Lambda', 'SES'],
            answer: 'CloudWatch Events',
            answerDescription:
                'CodePipeline stage changes happen in AWS CloudWatch Events, which can in return create SNS notifications. (eg. you can create events for failed pipelines, cancelled stages, etc).'
        },
        {
            id: 42,
            question:
                'If CodePipeline fails a stage, your pipeline stops and you can get information in the console. AWS ___ can also be used to audit AWS API calls.',
            options: ['CloudFollow', 'CloudTrail', 'CloudPath', 'CloudAudit'],
            answer: 'CloudTrail',
            answerDescription:
                'If CodePipeline fails a stage, your pipeline stops and you can get information in the console. AWS CloudTrail can also be used to audit AWS API calls. If Pipeline cannot perform an action, make sure the "IAM Service Role" attached does have enough permissions (IAM Policy).'
        },
        {
            id: 43,
            question:
                'ECR CLI Commands: To obtain "docker login" use ___. To Pull (docker pull URL). Create service (aws ecs create-service). Build image (docker build -t demo)',
            options: [
                'aws ecr get-login',
                'aws ecr configure',
                'aws ecr sign-in'
            ],
            answer: 'aws ecr get-login',
            answerDescription:
                'ECR CLI Commands: To obtain "docker login", use aws ecr get-login. To Pull (docker pull URL). Create service (aws ecs create-service). Build image (docker build -t demo)'
        },
        {
            id: 44,
            question:
                'CodeBuild offers continuous scaling (no servers to manage or provision). Pay for the time it takes to complete the builds. It leverages ___ under the hook for reproducible builds.',
            options: ['CloudCommit', 'AWS Docker', 'Kubernetes', 'Docker'],
            answer: 'Docker',
            answerDescription:
                'CodeBuild offers continuous scaling (no servers to manage or provision). Pay for the time it takes to complete the builds. It leverages Docker under the hook for reproducible builds.'
        },
        {
            id: 45,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeBuild instructions can be defined in code (buildspec.yml file). Output logs to Amazon S3 & AWS CloudWatch Logs. Use CloudWatch Alarms to detect failed builds & trigger notifications. Builds can be defined with CodePipeline or CodeBuild itself.'
        },
        {
            id: 46,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeBuild utilizes CodeBuild Containers (which uses docker containers) to run build instructions found on the buildspec.yml in the root.'
        },
        {
            id: 47,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeBuild can use S3 to cache artifacts for better performance for future builds. If a build is successful, it will output artifacts and also store into the S3 cache again.'
        },
        {
            id: 48,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Within the buildspec.yml file at the root, you can define environment variables. '
        },
        {
            id: 49,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeBuild buildspec.yml can define 4 phases: Install dependencies, Pre Build/Final commands to execute before build, Build actual files, Post Build - finishing touches.'
        },
        {
            id: 50,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeDeploy lets you deploy your application to many EC2 instances. These instances are not managed by Elastic Beanstalk - but by you.'
        },
        {
            id: 51,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Steps to work CodeDeploy: 1) Each EC2 must run a CodeDeploy Agent. 2) The agent is continuously polling AWS CodeDeploy for work to do. 3) CodeDeploy sends appspec.yml file. 4) Application is pulled from Github or S3. 5) EC2 will run the deployment instructions. 6) CodeDeploy Agent will report of success/failure of deployment on the instance.'
        },
        {
            id: 52,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'In CodeDeploy, EC2 instances are grouped by deployment group (dev/test/prod). Lots of flexibility to define any kind of deployment. CodeDeploy can be chained into CodePipeline and use artifacts from there. CodeDeploy can re-use existing setup tools, works with any application, auto scaling integration. CodeDeploy does not provision EC2 instances.'
        },
        {
            id: 53,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AppSpec has the following: 1) File Section: how to source and copy from S3/Github to filesystem. 2) Hooks: Set of instructions to deploy the new version.'
        },
        {
            id: 54,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'The order of AppSpec hooks is 1) Application Stop (Stop current applications) 2) Download Bundle 3) BeforeInstall 4) AfterInstall 5. Validate Service.'
        },
        {
            id: 55,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeDeploy Deployment Targets can be a set of EC2 instances with tags, an ASG, a mix of ASG/Tags, or custom environment variables.'
        },
        {
            id: 56,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeStart is an integrated solution that regroups: GitHub, CodeCommit, CodeBuild, CodeDeploy, CloudFormation, CodePipeline, CloudWatch. Helps you create "CICD-Ready" projects. One dashboard to view all your components.'
        },
        {
            id: 57,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CloudFormation is a delcarative way of outlining your AWS Infrastructure, for most resources. No resources are manually created; the code can be version controlled; and reviewed using code. Each resource is tagged with a cost identifier so you can see your costs.'
        },
        {
            id: 58,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Benefits of CloudFormation: 1) Productivity - Ability to re-create an infrastructure on the fly; declarative programming; automated generation. 2) Separation of Concerns - VPC Stacks; Network Stacks; App Stacks 3) Leverage existing templates or documentation.'
        },
        {
            id: 59,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CloudFormation does not allow you to simply edit a template - you must upload a new version of the template to AWS S3.'
        },
        {
            id: 60,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CloudFormation templates must be uploaded onto S3 then referenced in CloudFormation.'
        },
        {
            id: 61,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CloudFormation Building Blocks: 1) Your AWS resources declared in the template - MANDATORY. 2) Parameters - the dynamic inputs for your template. 3) Mappings - the static variables for your template. 4) Outputs - references to what has been created. 5) Conditionals - conditions to perform resource creation.'
        },
        {
            id: 62,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can use YAML or JSON for CloudFormation - but YAML is recommended.'
        },
        {
            id: 63,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CloudFormation resources are the core of CloudFormation templates. They represent the different AWS components that will be created and configured. They are declared and can reference each other.'
        },
        {
            id: 64,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CloudFormation parameters are a way to provide inputs to your AWS CloudFormation template. They are important if you want to reuse your templates across the company. You will not have to reupload a template to change its content.'
        },
        {
            id: 65,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'The shorthand to reference parameters/resources is !Ref. If you reference a parameter, it will return the value. If you reference a resource, it will return the physical ID of the resource.'
        },
        {
            id: 66,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Mappings in CloudFormation Templates are fixed variables. They are very handy to differentiate between different environments (dev vs prod), regions (AWS regions), AMI types, etc. All the values are hardcoded within the template.'
        },
        {
            id: 67,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Mappings are great when you know in advance all the values and that can be deduced from variables such as region, AZ, account, etc. They allow safer control over the template. Use parameters when values are user-specific.'
        },
        {
            id: 68,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Use Fn::FindInMap to return a named value from a specific key. !FindInMap [MapName, TopLevelKey, SecondLevelKey ].'
        },
        {
            id: 69,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Outputs are optional values that you can import into OTHER stacks if you export them. You can view these outputs in the AWS console or the AWS CLI. They are very useful if you have cross communication/collaboration between different components or different stacks. You cannot delete a CloudFormation Stack if its outputs are being referenced by another stack.'
        },
        {
            id: 70,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'In the CloudFormation YAML file, you can use Fn::GetAtt to access the attributes of your resources. Attributes are attached to any resources you create.'
        },
        {
            id: 71,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'In the CloudFormation YAML file, you can use Fn::Join to join values with a delimiter. You can use Fn::Sub to substitute variables from text. Very useful for customizing templates.'
        },
        {
            id: 72,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS CloudWatch: Metrics - Collects and track key metrics. Logs - Collect, monitor, and store log files. Events - Send notifications when certain AWS events occur. Monitors almost every metric for AWS.'
        },
        {
            id: 73,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'X-Ray: Troubleshoot application performance and errors. Distributed tracing of microservices.'
        },
        {
            id: 74,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CloudTrail: Internal monitoring of API calls being made. Audit changes to AWS Resources by your users.'
        },
        {
            id: 75,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'By default, EC2 instance metrics have metrics "every 5 minutes.". With Detailed Monitor (extra coset), you get data every 1 minute. Use detailed monitoring if you want to more promptly scale your ASG.'
        },
        {
            id: 76,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'By default, metrics have a resolution of 1 minute. However, for higher cost you can get a resolution up to 1 second (StoreResolution API parameter).'
        },
        {
            id: 77,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Alarms are used to trigger notifications for any metric. Alarms can go to Auto Scaling, EC2 Actions, SNS notifications, etc.'
        },
        {
            id: 78,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'X-Ray leverages tracing - which is an end to end way to following a "request". Each component dealing with the request adds its own "trace". Annotations can be added to traces to provide extra information. You can trace every request or a sample of the request.'
        },
        {
            id: 79,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'To enable X-Ray, your code you must 1) import the X-Ray SDK. Very little code modification but the application SDK will capture calls to AWS, HTTP/HTTPS, database calls, and queue calls. 2) Install the X-Ray daemon or enable X-Ray AWS integration. Each application must have the IAM rights to write data to X-Ray.'
        },
        {
            id: 80,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'The X-Ray Daemon/Agent has a config to send traces cross account. Make sure the IAM permissions are correct - the agent will assume the role. This allows a central account for all app tracing.'
        },
        {
            id: 81,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Each application will send a segment. All segments collected together form an end-to-end trace. Sampling: decrease the amount of request sent to X-Ray to reduce cost. Annotations: key value pairs used to index traces and use with filters. Meta data is not indexed.'
        },
        {
            id: 82,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CloudTrail provides governance, compliance, and audit for your AWS Account. Enabled by default. Get a history of events/API calls within your AWS account. If a resource is deleted in AWS, look into CLoudTrail.'
        },
        {
            id: 83,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'There are two patterns of application communication: 1) Synchronous (app to app) 2) Asynchronous (app to queue to app). Synchronous can be problematic if there are sudden spikes in traffic (overwhelm servers) - in that case, it can help to decouple applications using a queue (SQS), pub/sub models (SNS), or Kinesis (streaming model).'
        },
        {
            id: 84,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS - Standard Queue: Takes messages from a "producer" and sends forwards messages to "consumers". Scales from 1 msg/sec to 10,000 msgs/sec. Default retention is 4 days - max 14 days. No queue limit. Message can be up to 256kb. Scales automatically.'
        },
        {
            id: 85,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS - Delay Queue: Delay a message up to 15 minutes. Default is 0 seconds. You can override the default using the DelaySeconds parameter.'
        },
        {
            id: 86,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Consumers poll SQS for messages (receive up to 10 messages at a time). Consumers process the message within the visibility timeout, then delete the message ID & receipt handle on the SQS Queue.'
        },
        {
            id: 87,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS - The Visibility Timeout: When a consumer polls a message from a queue, the message is "invisible" to other consumers for a defined period (default 30 seconds). ChangeMessageVisibility API can change the visibility duration.'
        },
        {
            id: 88,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS - Dead Letter Queue: If a consumer fails to process a message within the timeout, the message goes back into the Queue. You can set a threshold of how many times a message can go back to the queue - called a "redrive policy". After the threshold is exceeded, the message goes back into a Dead Letter Queue. Make sure to process the messages in the DLQ before they expire.'
        },
        {
            id: 89,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS - Long Polling: When a consumer requests messages from the queue, it can optimally "wait" for messages to arrive if there are none in the queue. LongPolling decreases the number of API calls made to SQS while increasing the efficiency and latency of your application. The wait time can be between 1 - 20 secs. Use the WaitTimeSeconds API to adjust.'
        },
        {
            id: 90,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS - FIFO Queue: First in, first out. Name of the queue must end in .fifo. Lower throughput (3000/sec with batch vs 300/sec without). Messages are processed in order by the consumer. Messages are sent exactly once.'
        },
        {
            id: 91,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS - Deduplication: Will not send same message twice. Deduplication interval is 5 minutes. Provide a Deduplication ID with your message. MessageDeduplicationId is generated as the SHA-256 of the message body.'
        },
        {
            id: 92,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS - Sequencing: To ensure strict ordering between messaging, specify a MessageGroupId. Messages with different GroupIds may be received out of order. Messages with the same GroupId are delivered to one consumer at a time.'
        },
        {
            id: 93,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS Extended Client: Leverages S3 to send messages larger than 256kb.'
        },
        {
            id: 94,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SQS Security: 1) SSE only encrypts the body of the message - not metadata. 2) Encryption in flight using HTTPS endpoint. 3) IAM Policy must allow usage of SQS. 4) No VPC endpoint - need internet access.'
        },
        {
            id: 95,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SNS - Allows you to send one message to many receivers. Direct Integration or Pub/Sub (SNS Topic). The event "producer" only sends message to one SNS Topic while many receivers can listen to the SNS Topic. Each subscriber to the SNS Topic will get all messages sent to that SNS Topic.'
        },
        {
            id: 96,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'To publish SNS: 1) Create Topic 2) Create subscription(s) 3) Publish to the topic.'
        },
        {
            id: 97,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SNS + SQS Fan Out: Push once in SNS - Receive in many SQS, which then forwards messages to multiple consumers. Fully decoupled, no data loss. Ability to add receivers of data later. SQS allows for delayed processing - SQS allows for retries of work. May have many workers on one queue and one worker on the other queue.'
        },
        {
            id: 98,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS Kinesis: Great for app logs, metrics, IoT, clickstreams. Great for "real-time" big data. Great for streaming processing frameworks. Data is automatically replicated to 3 AZ.'
        },
        {
            id: 99,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Kinesis Streams are divided in ordered Shards/Partitions (like lanes on a highway). Data retention is 1 day by default - up to 7 days. You have ability to reprocess/replay data. Multiple applications can consume the same stream.'
        },
        {
            id: 100,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Kinesis shards divides data via Partition Key. Choose a key that is highly distributed - helps prevent overloading particular shards. (User ID is more distributed than Country)'
        },
        {
            id: 101,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Kinesis Client Library (KCL) helps read records from a Kineses Stream with distributed applications sharing the read workload. Each shard is read by only one KCL instance. Ex. 4 shards = max 4 KCL instances. Progress is checkpointed into DynamoDB (Need IAM Access). Records are read in order at the shard level.'
        },
        {
            id: 102,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Amazon Lambda: Virtual functions - no servers to manage. Limited by time - short executions. Run on-demand. Scaling is automated. Pay per request and compute time. Integrated with whole AWS stack. Very cheap and very popular.'
        },
        {
            id: 103,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Lambda Functions can set a "reserved concurrency" at the function level. Each invocation over the concurrency limit will trigger a "throttle". If synchronous, it will return an error - if async, then it will retry automatically until it goes into Dead Letter Queue. The original event is sent to the DLQ.'
        },
        {
            id: 104,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Make sure your AWS Lambda Functions has an execution role with an IAM Policy that authorizes writes to CloudWatch for monitoring.'
        },
        {
            id: 105,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can enable X-Ray configuration in Lambda Functions. This runs the X-Ray Daemon for you. Then use the AWS SDK in code, and ensure the IAM Role.'
        },
        {
            id: 106,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Lambda Function allocates memory from 128MB to 3008MB (64MB increments). Maximum execution time is 900 seconds (15 minutes but the exam assumes 5). Disk capacity in the function container is 512MB. Concurrency limits is 1000.'
        },
        {
            id: 107,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Lambda Function deployment must be zipped up to 50MB (Compressed) or 250MB (Uncompressed code + deployment). If your Lambda Function requires a bigger file or needs more disk space to perform operations, you can use /tmp directory to load other files at startup. If you need permanent persistence of object, use S3. 4KB for environment variables.'
        },
        {
            id: 108,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Current Lambda version is mutable. Previous lambda versions are immutable. If you create a new version - the one being replaced will become immutable.'
        },
        {
            id: 109,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS Lambda Aliases are "pointers" to Lambda versions. You can define a "dev", "test", and "prod" alias and have them point at different lambda versions. Aliases are mutable.'
        },
        {
            id: 110,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'If you Lambda Functions requires dependencies, you must install the packages alongside your code and zip it together. Upload straight to Lambda if less than 50MB else to S3 first.'
        },
        {
            id: 111,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You use Lambda Functions in CloudFormation, you must store the Lambda Zip in S3 then refer to that S3 zip location in the CloudFormation code.'
        },
        {
            id: 112,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Lambda Best Practices: Perform heavy-duty work outside of your function handler (connect to databases, intialize AWS SDK, pull in dependencies, outside of your function handler).'
        },
        {
            id: 113,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Lambda Best Practices: Use environment variables for Database Connection Strings, S3 Bucket, etc. do not place these values directly in your code.'
        },
        {
            id: 114,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Lambda Best Practices: Minimize your deployment package size to its runtime necessities. Break down the function if necessary, remember limits. Avoid using recursive code.'
        },
        {
            id: 115,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can use Lambda@Edge to deploy alongside CDN globally. Build more repsonsive applications and customize CDN.'
        },
        {
            id: 116,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS DynamoDB is a NoSQL Serverless Database. They are distributed - have horizontal scaling. Fast and consistent performance. Integrated with IAM. Enables event driven programming with DynamoDB.'
        },
        {
            id: 117,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Basics - 1) Made up of tables 2) Each table has primary key 3) Each table can have an infinite number of items (=rows) 4) Each item has attributes (can be added over time) 5)Maximum size of an item is 400KB. 6) Supports String, Number, Binary, Boolean, Null. Lists, Maps.'
        },
        {
            id: 118,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Primary Keys: Option1) Partition Key Only (HASH); Partition key must be unique for each item. Partition key must be "diverse" so that data is distributed. Option2) Partition Key + Sort Key: Combination must be unique. Data is grouped via partition key. Sort key == range key.'
        },
        {
            id: 119,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB tables must have provisioned read and write capacity units. Capacity Units for Read (RCU) and Writes (WCU). Option to set up auto-scaling to meet demand. Throughput can be exceeded via "burst credit". It is advised to do exponential backoff.'
        },
        {
            id: 120,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Write Capacity Unit (WCU) represents one write per second for an item up to 1KB in size. For items larger than 1KB, more WCU are consumed. Ex1. 10 objects per seconds of 2KB each requires 20 WCU. Ex2. 6 Objects per second at 4.5 KB requires 30 WCU because 4.5KB gets rounded up to 5KB.'
        },
        {
            id: 121,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Eventually Consistent Read: If you read just after a write, it is possible you will get unexpected response because of replication. Strongly Consistent Read: You will always get correct data after write. By default, DynamoDB uses Eventually Consistent Read but GetItem, Query & Scan provide a "ConsistentRead" parameter you can set to true.'
        },
        {
            id: 122,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Read Capacity Unit (RCU) - One RCU represents one strongly consistent read per second, or two eventually consistent reads per second, for an item up to 4KB in size. If an item is larger than 4KB, then more RCU is consumed. Ex1. 16 Eventually consistent reads per seconds of 12 KB each is 24 RCU total.'
        },
        {
            id: 123,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB APIs: 1) PutItem - Write data 2) UpdateItem 3) Conditional Writes - Accept a write/update only if conditions are true. 4) DeleteItem - Delete a row (conditional optional) 5) DeleteTable table. 6) BatchWriteItem - Up to 25 PutItem and/or DeleteItem in one call. 7) GetItem - Via Primary Key 8) BatchGetItem 9) Query - based on PartitionKey (=) 10) Scan - scan entire table.'
        },
        {
            id: 124,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB - Local Secondary Index (LSI) - Alternate range key for your table, local to hash key. LSI must be defined at table creation time. The sort key consists of exactly one scalar attribute. Must be String, Number, or Binary. Up to 5 LSI per table.'
        },
        {
            id: 125,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB - Global Secondary Index (GSI) - Define a new globa key = partition key + optional sort key. Speed up non-key attributes. The index is a new "table" and you can project attributes on it. If the writes are throttled on the GSI, then the main table will be throttled as well.'
        },
        {
            id: 126,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Concurrency - Feature called "Conditional Update/Delete". You can ensure an item has not changed before altering it. DyanmoDB is an optimistic locking/concurrency database.'
        },
        {
            id: 127,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB DAX - Accelerator. Seamless cache for DynamoDB, no application re-write. Writes go through DAX to DynamoDB. Solves the Hot Key Problem (too many reads on a particular item). 5 minute TTL. Up to 10 nodes in the cluster.'
        },
        {
            id: 128,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Streams - Changes in DynamoDB can end up in a DynamoDB Stream. This stream can be read by AWS Lambda, which can then trigger actions (React to changes in real time, analytics, insert into ElasticSearch etc.). Stream has 24 hours of data retention.'
        },
        {
            id: 129,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Time To Live (TTL) - Automatically delete an item after an expiration date/time. Helps reduce storage and manage the table size over time. Enabled per row. Typically deletes items within 48 hours of expiration.'
        },
        {
            id: 130,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'DynamoDB Transaction - Ability to Create/Update/Delete multiple rows in different tables at the same time.'
        },
        {
            id: 131,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS API Gateway lets you build, deploy, and manage APIs. They are interfaces you can expose other people. API Gateways receive API requests from clients and forward them to Lambdas for processing/business logic. API Gateway + Lambda allows you to be serverless.'
        },
        {
            id: 132,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You need to "deploy" an API Gateway to put them into effect. Changes are deployed in "stages". Each stage will have its own config parameters. Stages can be rolled back. You can use stage variables like environment variables - you can use them to change variables. You can use stage variables to indicate the corresponding Lambda alias.'
        },
        {
            id: 133,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'API Gateway Mapping Templates can be used to modify request/responses. You can rename parameters, modify body content, add headers, map JSON to XML for sending to backend or back to client. You can filter and output results.'
        },
        {
            id: 134,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS API Gateway Swagger/Open API: a common way of defining REST APIs using API definition as code. Import existing Swagger/OpenAPI spec to API Gateawy. It can be written in JSON or YAML.'
        },
        {
            id: 135,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'API Gateway Caching - You can reduce the number of calls made to the backend. API Gateway will check Gatway Cache before invoking backend (then placing into cache). Default TTL is 300 seconds. Caches are defined per stage. Clients can invalidate cache with header: Cache-Control:max-age=0'
        },
        {
            id: 136,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS API Gateway - CORS must be enabled when you receive API calls from another domain.'
        },
        {
            id: 137,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'API Gateway Security - 1) You can create a IMA Policy to User/Role; leverages Sigv4 capability where IAM credentials are in headers. 2) Lambda Authorizer - Uses Lambda to validate the token in header being passed. You can cache result of authorization. Helps use oAuth/3rd party auth. 3) AWS Cognito - Manages user lifecycle. Only helps with authentication - not authorization. API Gateway verifies identity automatically from Cognito.'
        },
        {
            id: 138,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS Cognito - Give users an identity so they can interact with our application. 1) User Pools: Sign in functionality for users and integrates with API Gateway. 2) Identity Pools: Provide AWS credentials to users they can access AWS directly. 3) Cognito Sync: Sync data from device to Cognito.'
        },
        {
            id: 139,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS Serverless Application Model (SAM): Framework for developing and deploying serverless applications. All configuration is YAML Code -> Generate CloudFormation from SAM YAML file. Supports anything from CloudFormation. SAM can use CodeDeploy to deploy Lambda Functions. SAM can help you run Lambda, API Gateway, DynamoDB locally.'
        },
        {
            id: 140,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SAM Recipe: 1) Transform header indicates it is a SAM Template (AWS::Serverless-2016-10-31). 2) Lambda Functions (AWS::Serverless::Function) 3) API Gateway (AWS::Serverless::Api) 4) DynamoDB (AWS::Serverless::SimpleTable)'
        },
        {
            id: 141,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'SAM Reciple for Deploy/Package: 1) aws cloudformation package / sam package 2) aws cloudformation deploy / sam deploy'
        },
        {
            id: 142,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS ECS (Elastic Container Service) Clusters are logical groupings of EC2 instances w/ containers or Fargate containers. EC2 instances run the ECS Agent (Docker Container). ECS Agents register the instance to the ECS Cluster. EC2 instances run a specialized AMI made for ECS.'
        },
        {
            id: 143,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'ECS Task Definition: Metadata in JSON form to tell ECS how to run a Docker Container. Includes: Image Name, Port Binding for Container/Host, Memory and CPU required, Env Vars, Networking info.'
        },
        {
            id: 144,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'ECR is an AWS Private docker image repository. Access is controlled through IAM policies. Tightly integrated with IAM. If you cannot pull Docker image, check IAM.'
        },
        {
            id: 145,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS Fargate - Fargate is a serverless container service. You just need to create task definitions, and Fargate will create containers for you. To scale, just increase the task number. No need to provision EC2 instances. Provisioned via contaner specs (CPU/RAM).'
        },
        {
            id: 146,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can integrate X-Ray by creating a Daemon Container in each EC2 cluster or via a "Side Car" method that requires you to load a Daemon on each container.'
        },
        {
            id: 147,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can run Beanstalk in Single & Multi Docker Container mode. This will create a ECS Cluster, EC2 insatnces, Load balancer, task definitions and execution. Requires a config file Dockerrun.aws.json at the root of source code. Your docker images must be pre-built and stored in ECR for example.'
        },
        {
            id: 148,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'For each ECS Classic cluster, you must configure the file /etc/ecs/ecs.config with the cluster name.'
        },
        {
            id: 149,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'ECS EC2 Instances can run multiple containers on the same type. You must not specify the host port - only container port. You should use an ALB with dynamic port mapping. The EC2 Instance Security Group must allow traffic from the ALB on all ports. ECS tasks can have IAM roles to execute AWS actions.'
        }
    ]
};

export default AWSAssociatesData;

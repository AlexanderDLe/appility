const AWSAssociatesData = {
    title: 'AWS Associate Developer',
    label: 'AWS Associate Developer',
    param: 'awsassociatedeveloper',
    color: '#fcb134',
    items: [
        {
            id: 0,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'To properly access EC2 instances with the CLI, you should configure IAM Roles to allow access. You must attach a role ontoEC2 instances, which can then use these profiles automatically.'
        },
        {
            id: 1,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Policies can be attached to roles. You can use preset policies or you can create your own with the visual editor or the AWS JSON generator.'
        },
        {
            id: 2,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can use the AWS Policy Simulator to test accesses/denies when setting up policies. Great for debugging policies/accesses.'
        },
        {
            id: 3,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can use the --dry-run flag in the CLI to test whether a command works - it will only let you know if the CLI command has permission or not.'
        },
        {
            id: 4,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'If API calls fail, you can decode the error message with the STS decode-authorization-message. It will give you JSON response with relevant information about the error.'
        },
        {
            id: 5,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'EC2 instances can learn about themselves with EC2 Instance Metadata. You can use the URL http://169.254.169.254/latest/meta-data/ - you can retrieve the IAM Role name from the metadata but not the policies.'
        },
        {
            id: 6,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'To perform actions directly from your application code, you can use the AWS SDK. AWS CLI uses the Python SDK (boto3).'
        },
        {
            id: 7,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'It is recommended to use the default credential provider chain when using SDKs. It works seamlessly with AWS credentials, IAM Roles, and environment variables. Never store AWS credentials within your code.'
        },
        {
            id: 8,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'When any API fails too many times, SDK will have a retry mechanism which will double in time every call to prevent overloading the API.'
        },
        {
            id: 9,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'To use multiple AWS accounts via the CLI, use AWS profiles.'
        },
        {
            id: 10,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Elastic Beanstalk lets you deploy applications from a developer centric point of view. It contains all AWS components from one view. You have full control.'
        },
        {
            id: 11,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Beanstalk is a managed service; configuration and OS is handled by beanstalk. You can focus more on the code.'
        },
        {
            id: 12,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Beanstalk has 3 components - Application, Application Version, and Environment.'
        },
        {
            id: 13,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Beanstalk has a rollback feature that can let you revert to a previous version.'
        },
        {
            id: 14,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can write your own custom platform on Beanstalk.'
        },
        {
            id: 15,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Single Instance Beanstalk configuration is best for test/dev environments - it comes with a minimal cost setup that will get you up and running. Single AZ.'
        },
        {
            id: 16,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'High Availability Beanstalk configuration is best for full production - it comes with a load balancer, auto scaling groups, and other system components. Multi AZ.'
        },
        {
            id: 17,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'It is better to create an RDS external to Beanstalk because if Beanstalk is deleted, so is the RDS.'
        },
        {
            id: 18,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'All-At-Once Deployment: All instances update simultaneously but will be unavailable - fastest/cheapest.'
        },
        {
            id: 19,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Rolling Deployment: Progressively update a few instances at a time to avoid unavailability - will take longer.'
        },
        {
            id: 20,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Rolling With Additional Batches Deployment: Similar to Rolling Deployment - but creates new instances for updating instances to move the batch so instances are still available.'
        },
        {
            id: 21,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Immutable Deployment: Creates new instances in new ASG, versions these new instances, then swap instances when everything is healthy.'
        },
        {
            id: 22,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Blue/Green Deployment: Not a "direct feature" - Create a new "stage" environment and deploy v2 there. The new environment (green) can be validated independently and roll back if any issues. Route 53 can be setup using weighted policies to redirect a little bit of traffic to stage the environment. Using Beanstalk, "swap URLS" when done with the environment test.'
        },
        {
            id: 23,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'All code must be zipped when deployed to Beanstalk.'
        },
        {
            id: 24,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'All parameters set in the UI can also be configured in the code using files. Requirements: place .ebextensions directory in the root of the source code in YAML/JSON format. .config extensions for each file. You can modify default settings, add resources (RDS, etc.). Resources managed by .ebextensions will be deleted if environment is deleted.'
        },
        {
            id: 25,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can use the Elastic Beanstalk (EB) CLI to make things easier. Helpful when you want to automate deployment.'
        },
        {
            id: 26,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Under the hood, Elastic Beanstalk relies on Cloud Formation - another AWS service.'
        },
        {
            id: 27,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'When deploying to Beanstalk, you can package dependies (eg. node_modules) with the zip file to increase performance and speed.'
        },
        {
            id: 28,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Beanstlak can work with HTTPS. Load the SSL Certificate onto the Load Balancer; Can be done from console; can be done from code; can be provisioned via ACM. Must configure a security group to allow incoming port 443 (HTTPS Port).'
        },
        {
            id: 29,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Beanstalk redirect from HTTP to HTTPS - configure your instances or use the ALB with a rule. Make sure health checks are not redirect (so they keep giving 200).'
        },
        {
            id: 30,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Beanstalk can store at most 1000 application versions. If you do not remove old versions, you will not be able to deploy anymore. You use can a Lifestyle Policy to phase out older versions based on time or space. Versions currently used will not be deleted.'
        },
        {
            id: 31,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'If you application performs tasks that are long to complete, offload these tasks to a dedicated worker environment. Decoupling your application into two tiers is common. (Example: processing a video, generating a zip file, etc.) You can define periodic tasks in a cron.yaml file.'
        },
        {
            id: 32,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'To migrate from RDS coupled with EB to standalone: Take RDS snapshot, enable deletion prevention, create a new v2 environment point to existing old RDS, perform Blue/Green deployment and swap new/old environments, terminate old environment. Delete CloudFormation stack.'
        },
        {
            id: 33,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Continuous Integration allows devs to push to a code repo (Github/CodeCommit/etc.) often. A test/build server checks the code as soon as it is pushed (CodeBuild/Jenkins/etc.) The developer gets feedback about the tests and checks that have passed/failed.'
        },
        {
            id: 34,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Continuous Delivery ensures software can be released reliably whenever needed. Ensures deployments happen often and are quick. Shift from releasing every 3 months to 5 releases a day. AWS CodeDeploy.'
        },
        {
            id: 35,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: 'CodeCommit is the AWS version of GitHub.'
        },
        {
            id: 36,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'AWS CodeCommit offers unlimited sized private Git repositories. Code only available in your AWS Cloud Accout. Secure. Integrated with Jenkins/CodeBuild/Other CI Tools. AWS CodeCommit interactions are standard Git commands.'
        },
        {
            id: 37,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeCommit can be authenticated with SSH or HTTPs. CodeCommit can be authorized with IAM Policies. Repos are encrypted at rest using KMS and in flight using HTTPS/SSH. Use IAM Role in your AWS Accoutn and use STS.'
        },
        {
            id: 38,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'You can trigger notifications in CodeCommit using AWS SNS (Simple Notification Service) or AWS Lambda or AWS CloudWatch Event Rules. 1) SNS/Lambda For branch deletion, master branch pushes, etc. 2) Cloudwatch for pull request updates/commit comment events.'
        },
        {
            id: 39,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodePipeline has a visual workflow and orchestrates all of the follow stages: 1) Source: Github/CodeCommit. 2) Build: CodeBuild/Jenkins/etc. 3) Load Testing: 3rd party tools 4) Deploy: CodeDeploy/BeanStalk/CloudFormation. Each stage can have sequential actions and/or parallel actions. You can have manual approval at any stage.'
        },

        {
            id: 40,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'Each CodePipeline stage can create "artifacts. Artifacts are passed stored in Amazon S3 and passed onto the next stage.'
        },
        {
            id: 41,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodePipeline stage changes happen in AWS CloudWatch Events, which can in return create SNS notifications. (eg. you can create events for failed pipelines, cancelled stages).'
        },
        {
            id: 42,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'If CodePipeline fails a stage, your pipeline stops and you can get information in the console. AWS CloudTrail can also be used to audit AWS API calls.'
        },
        {
            id: 43,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'If Pipeline cannot perform an action, make sure the "IAM Service Role" attached does have enough permissions (IAM Policy).'
        },
        {
            id: 44,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription:
                'CodeBuild offers continuous scaling (no servers to manage or provision). Pay for the time it takes to complete the builds. It leverages DOcker under the hook for reproducible builds.'
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
                'You can use YAML or JSON for CloudFormation - but YAML is recommended. '
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
            answerDescription: ''
        },
        {
            id: 73,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 74,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 75,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 76,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 77,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 78,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 79,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 80,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 81,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 82,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 83,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 84,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 85,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 86,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 87,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 88,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 89,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 90,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 91,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 92,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 93,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 94,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 95,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 96,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 97,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 98,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        },
        {
            id: 99,
            question: '',
            options: ['', '', '', ''],
            answer: '',
            answerDescription: ''
        }
    ]
};

export default AWSAssociatesData;

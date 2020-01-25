const AWSFundamentalsData = {
    title: 'AWS Fundamentals',
    label: 'AWS Fundamentals',
    param: 'awsfundamentals',
    color: '#fcb134',
    items: [
        {
            id: 0,
            question:
                'By hosting on cloud services such as AWS, companies now have the benefit of:',
            options: [
                'Stop guessing capacity needs.',
                'Testing at production scale.',
                'Experimenting more easily.',
                'Evolving architectures.',
                'All of the above.'
            ],
            answer: 'All of the above.',
            answerDescription:
                'All of these are benefits of working on the cloud.'
        },
        {
            id: 1,
            question:
                'All of the following are part of the Operational Excellence Pillar except:',
            options: ['Prepare', 'Operate', 'Secure', 'Evolve'],
            answer: 'Secure',
            answerDescription:
                'All except secure are part of the operational excellence pillar.'
        },
        {
            id: 2,
            question:
                'All of the following are part of the Security Pillar except:',
            options: [
                'Detective Controls',
                'Identity/Access Management',
                'Infrastructure Protection',
                'Data Protection',
                'Operational Costs'
            ],
            answer: 'Operational Costs',
            answerDescription:
                'All except operational costs are part of security. Security Pillar is the ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies.'
        },
        {
            id: 3,
            question:
                '___ is the ability of a system to recover from infrastructure/service failures.',
            options: ['Security', 'Reliability', 'Operation', 'Performance'],
            answer: 'Reliability',
            answerDescription:
                'Reliability is the ability of a system to recover from infrastructure/service failures, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or network issues.'
        },
        {
            id: 4,
            question:
                '___ is the ability to use computing resources efficiently to meet system requirements, and to maintain efficiency as demand changes and tech evolves.',
            options: ['Selection', 'Review', 'Performance', 'Reliability'],
            answer: 'Performance',
            answerDescription:
                'Performance is the ability to use computing resources efficiently to meet system requirements, and to maintain efficiency as demand changes and tech evolves.'
        },
        {
            id: 5,
            question:
                '___ is the ability to avoid or eliminate unndeeded or suboptimal cost.',
            options: [
                'Cost optimization',
                'Reliability',
                'Security',
                'Performance'
            ],
            answer: 'Cost optimization',
            answerDescription:
                'Cost optimization is the ability to avoid or eliminate unndeeded or suboptimal cost.'
        },
        {
            id: 6,
            question: 'IAM is short for ___.',
            options: [
                'Inquiry Access Management',
                'Identity Assess Modal',
                'Identity and Access Management'
            ],
            answer: 'Identity and Access Management',
            answerDescription:
                'Identity and Access Management. IAM is at the center of AWS and has a global regional view. AWS security is based on IAM; Users, Groups, and Roles. Root must never be used/shared. Users can be created with proper permissions. Policies are written in JSON.'
        },
        {
            id: 7,
            question:
                'Which of the following practices should you following regarding IAM?',
            options: [
                'One IAM USER per PERSON',
                'One IAM ROLE per APPLICATION',
                'IAM must NEVER be shared or committed into a code base',
                'NEVER use the root account except for initial setup',
                'All of these'
            ],
            answer: 'All of these',
            answerDescription: 'All of these are true.'
        },
        {
            id: 8,
            question:
                'EC2 is one of the most popular of the AWS offerings. It has the capability of:',
            options: [
                'Renting Virtual Machines (EC2)',
                'Storing data on virtual drives (EBS)',
                'Distributing load across machines (ELB)',
                'Scaling the services using an auto-scaling group (ASG)',
                'All of the above'
            ],
            answer: 'All of the above',
            answerDescription:
                'All of the above. Knowing EC2 is fundamental to understanding howo the Cloud works. This is where the "revolution started".'
        },
        {
            id: 9,
            question:
                'An ___ is a template that contains the software configuration (operating system, app server, and app) required to launch your instance.',
            options: ['ASG', 'EBS', 'BDG', 'AMI'],
            answer: 'AMI',
            answerDescription:
                'AMI. Amazon Machine Image. Examples would be Ubuntu web servers, Windows Enterprise server, etc.'
        },
        {
            id: 10,
            question: '___ act as a "firewall" on EC2 instances.',
            options: [
                'Secure Boundries',
                'IP Blockers',
                'Web Shields',
                'Security Groups'
            ],
            answer: 'Security Groups',
            answerDescription:
                'Security Groups act as a "firewall" on EC2 instances. They control access to ports, control inbound/outbound traffic, authorize IP ranges, and more. Can be attached to multiple instances. Live "outside" the EC2; if they block traffic, EC2 will not even see it. It is good practice to maintain one security group for SSH access.'
        },
        {
            id: 11,
            question:
                'When you restart your EC2 instance with a non-elastic IP public address, your public IP will ___. Therefore, you will need to SSH with the new IP.',
            options: ['remain', 'change'],
            answer: 'change',
            answerDescription:
                'When you restart your EC2 instance, your public IP will change. Therefore, you will need to SSH with the new IP.'
        },
        {
            id: 12,
            question:
                'An advantage of using cloud computation is flexibility in resource utilization on an on-demand basis. This is called scalability and ___.',
            options: ['growth', 'shrinkage', 'elasticity', 'flexibility'],
            answer: 'elasticity',
            answerDescription:
                'An advantage of using cloud computation is flexibility in resource utilization on an on-demand basis; when demand rises, more server resources are acquired to meet the demand - likewise, when demand shrinks, so do the resources. This is called scalability and elasticity.'
        },
        {
            id: 13,
            question:
                '___ lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.',
            options: ['VPC', 'EC2', 'EPS', 'EBG'],
            answer: 'VPC',
            answerDescription:
                'Virtual Private Clouds (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways.'
        },
        {
            id: 14,
            question:
                '___ is a webservice that provides secure, resizable compute capacity in the cloud.',
            options: ['S3', 'EC2', 'VPC', 'EPS'],
            answer: 'EC2',
            answerDescription:
                'Elastic Compute Cloud (EC2) is a webservice that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment.'
        },
        {
            id: 15,
            question:
                '___ is the storage platform of AWS. It is an unlimited "bucket" storage container that can store digital content.',
            options: ['EC2', 'Bucket', 'RDB', 'S3'],
            answer: 'S3',
            answerDescription:
                'S3 is the storage platform of AWS. It is an unlimited "bucket" storage container that can store digital content.'
        },
        {
            id: 16,
            question:
                'RDS is a relational database service of AWS. It offers database management systems to store relational data.',
            options: ['S3', 'Dynamo', 'RDS', 'RDM'],
            answer: 'RDS',
            answerDescription:
                'RDS is a relational database service of AWS. It offers database management systems to store relational data. Common uses include customer account info in an easy-access database.'
        },
        {
            id: 17,
            question:
                'Which EC2 Launch Type allows you to book an entire physical server?',
            options: [
                'Dedicated Instances',
                'Reserved Instances',
                'Scheduled Reserved Instances',
                'Dedicated Hosts'
            ],
            answer: 'Dedicated Hosts',
            answerDescription:
                'Dedicated Hosts; allow you to book an entire physical server for your use. Full control of EC2 Instance payment. Visibility into the underlying sockets/cores of the hardware. Allocated for your account for a 3 year period reservation.'
        },
        {
            id: 18,
            question:
                'Which EC2 Launch Type is best for long workloads with flexible instances?',
            options: [
                'On Demand Instances',
                'Spot Instances',
                'Convertible Reserved Instances',
                'Dedicated Instances'
            ],
            answer: 'Convertible Reserved Instances',
            answerDescription:
                'Convertible Reserved Instances; long workloads with flexible instances. On Demand Instances; Short workload, predictable pricing, pay for what you use. Spot Instances; bid for short workloads, can lose instances.'
        },
        {
            id: 19,
            question:
                'Which EC2 launch type has highest cost but has no upfront cost?',
            options: [
                'Dedicated Instances',
                'Spot Instances',
                'Dedicated Hosts',
                'On Demand'
            ],
            answer: 'On Demand',
            answerDescription:
                'On Demand. Pay for what you use (billing per second, after the first minute). Has the highest cost but no upfront payment. No long term committment. Recommended for short-term and un-interrupted workloads where you cannot predict application behavior.'
        },
        {
            id: 20,
            question:
                'Which EC2 launch type has up to a 75% discount compared to On-Demand, but requires upfront cost and long term committment?',
            options: [
                'Reserved Instances',
                'Dedicated Instances',
                'Dedicated Hosts',
                'Spot Instances'
            ],
            answer: 'Reserved Instances',
            answerDescription:
                'Reserved Instances; reservation period can be 1-3 years. Reserve a specific instance type. Recommended for steady state usage applications (think database). Convertible Reserved Instance type is a variation of this that allows you to flexibly change the EC2 instance type but only has up to a 54% discount. Scheduled Reserved Instances allow you to reserve instances within a time window.'
        },
        {
            id: 21,
            question:
                'Which EC2 Launch Type has up to a 90% discount compared to On-Demand, but requires you to bid a price and to get the instance as long as its under the price?',
            options: [
                'Reserved Instances',
                'Dedicated Instances',
                'Dedicated Hosts',
                'Spot Instances'
            ],
            answer: 'Spot Instances',
            answerDescription:
                'Spot Instances. If you get outbid, you may lose instance. Price varies based on offer and demand. Spot instances are reclaimed with a 2 minute notification warning when the spot prices goes above your bid. Used for batch jobs, Big Data analysis, or workloads that are resilient to failures. Not great for critical apps/databases.'
        },
        {
            id: 22,
            question:
                '___ are hardware dedicated to you but you do not get access to hardware. May share hardware with other instances in account.',
            options: [
                'Reserved Instances',
                'Dedicated Instances',
                'Dedicated Hosts',
                'Spot Instances'
            ],
            answer: 'Dedicated Instances',
            answerDescription:
                'Dedicated Instances are hardware dedicated to you but you do not get access to hardware. May share hardware with other instances in account. No control over instance placement.'
        },
        {
            id: 23,
            question: 'EC2 Pricing is based on which of the following?',
            options: [
                'Region',
                'Instance Type',
                'Launch Type',
                'Operating System',
                'All of these'
            ],
            answer: 'All of these',
            answerDescription:
                'EC2 Pricing is based on all of these. You also pay for other factors such as storage, data transfer, fixed IP public addresses, load balancing, and more. You do not pay for instance if instance is stopped.'
        },
        {
            id: 24,
            question:
                'Instances have 5 distinct characteristics: RAM, CPU, I/O, Network, and ___.',
            options: ['SSD', 'AMD', 'GPU', 'RGB'],
            answer: 'GPU',
            answerDescription:
                'Instances have 5 distinct characteristics: RAM, CPU, I/O, Network, and GPU. There are over 50 instance types with these variations.'
        },
        {
            id: 25,
            question:
                '___ instances have decent CPU performance, but can be VERY good under load while there are appropriate credits available.',
            options: ['Dynamic', 'Burstable', 'Super', 'Power'],
            answer: 'Burstable',
            answerDescription:
                'Burstable instances (T2) have decent CPU performance, but can be VERY good under load while there are appropriate credits available. If all the "burst credits" are gone, the CPU becomes BAD. Bursts help you handle large unexpected load.'
        },
        {
            id: 26,
            question:
                'Which command lets you change .pem file permissions on Linux/Mac to protected?',
            options: ['chmod 0400', 'chpass401', 'chem1002', 'chem392'],
            answer: 'chmod 0400',
            answerDescription:
                'chmod 0400 works on Linux/Mac only. Alternatively on Putty, you can use a puttyGen to create a protected version of the .ppk, or on Windows 10 adjust security settings on the .pem file.'
        },
        {
            id: 27,
            question:
                '___ IP lets you reserve a specific public IP over restarts.',
            options: ['public', 'private', 'elastic'],
            answer: 'elastic',
            answerDescription:
                'Elastic IP addresses can be reserved but cost money. Public IPs are what is public available on the internet. Private IPs are IPs private to the Amazon network.'
        },
        {
            id: 28,
            question:
                'To provide startup instructions for EC2 instances, you can provide ___ data',
            options: ['Role', 'Region', 'App', 'User'],
            answer: 'User',
            answerDescription: 'User'
        },
        {
            id: 29,
            question:
                '___ are servers that forward internet traffic to multiple servers (EC2 instances) downstream.',
            options: [
                'Network Balancers',
                'Load Balancers',
                'Load Scalers',
                'Security Queues'
            ],
            answer: 'Load Balancers',
            answerDescription:
                'Load balancers are servers that forward internet traffic to multiple servers (EC2 instances) downstream. Users will first connect to the load balancer, which will distribute users to different instances. Expose a single point of access (DNS) to application. It helps seamlessly handle failures of downstream instances. Provide SSL termination.'
        },
        {
            id: 30,
            question: "___ binds a user's session to a specific instance.",
            options: ['Binding', 'Formatting', 'Transgressions', 'Stickiness'],
            answer: 'Stickiness',
            answerDescription:
                "Stickiness binds a user's session to a specific instance."
        },
        {
            id: 31,
            question:
                '___ Load Balancers (v2) allow you to load balance multiple HTTP applications across machines (target groups) and/or on the same machine (containers).',
            options: ['Sticky', 'Application', 'Management', 'Network'],
            answer: 'Application',
            answerDescription:
                'Application Load Balancers (ALB v2) allow you to load balance multiple HTTP applications across machines (target groups) and/or on the same machine (containers). Load balancing based on route or hostname in URL. Great for micro services & container based applications. Has a port mapping feature to redirect to dynamic port. ALBs support HTTP/HTTPS & Websocket protocols. Stickiness can be enabled at the target group level.'
        },
        {
            id: 32,
            question:
                'When using load balancers, applications ___ see the IP of the client directly.',
            options: ['do not', 'do'],
            answer: 'do not',
            answerDescription:
                'When using load balancers, applications do not see the IP of the client directly. The true IP of the client is inserted in the header X-Forwarded-For and the application can reach there if necessary.'
        },
        {
            id: 33,
            question:
                '___ Load Balancer (v2) foward TCP traffic to your instances.',
            options: ['Sticky', 'Application', 'Management', 'Network'],
            answer: 'Network',
            answerDescription:
                'Network Load Balancer (NLB v2) foward TCP traffic to your instances. Handle millions of requests per second; support static/elastic IP; less latency (vs 400 ms for ALB); very good for performance. NLB directly see the client IP.'
        },
        {
            id: 34,
            question: 'All Load Balancers have a ___ ability.',
            options: ['health check', 'spire check', 'convertible'],
            answer: 'health check',
            answerDescription: 'All Load Balancers have a health check ability.'
        },
        {
            id: 35,
            question: 'An ___ is used to match an increased or decreased load.',
            options: ['', '', 'Auto Scaling Group', ''],
            answer: 'Auto Scaling Group',
            answerDescription:
                'An Auto Scaling Group (ASG) is used to match an increased (scaling out) or decreased (scaling in) load. It can ensure that you have a maximum and minimum number of machines running. You can also automatically register new instances to a load balancer.'
        },
        {
            id: 36,
            question:
                '___ are used to monitor traffic and alert the system to scale in or scale out.',
            options: ['', 'Auto Scaling Alarms', '', ''],
            answer: 'Auto Scaling Alarms',
            answerDescription:
                'Auto Scaling Alarms (such as CloudWatch) alarms are used to monitor traffic and alert the system to scale in or scale out. The alarms can monitor various metrics such as average CPU usage, number of request on the ELB per instance, average network in/out, etc.'
        },
        {
            id: 37,
            question:
                'A/An ___ is a network drive you can attach to your instances while they run. It allows your instances to persist data.',
            options: ['', '', '', ''],
            answer: 'EBS',
            answerDescription:
                'A/An EBS (Elastic Block Store) is a network drive you can attach to your instances while they run. It allows your instances to persist data. It uses the network to communicate the instance. Can be detached and attached to EC2 instances quickly. Locked to an AZ (Availability Zone). To move across AZ, you must snapshot. EBS can be attached to only one instance at a time.'
        },
        {
            id: 38,
            question:
                'Data at rest in an EBS Volume and in flight between a EC2 instances/EBS volumes are ___.',
            options: ['', '', '', ''],
            answer: 'encrypted',
            answerDescription:
                'Data at rest and in flight between a EC2 instance and in an EBS volume are encrypted. All snapshots are encrypted. Encryption and decryption are handled transparently (you have nothing to do).'
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

export default AWSFundamentalsData;

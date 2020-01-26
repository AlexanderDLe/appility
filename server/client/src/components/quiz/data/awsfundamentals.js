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
                '___ is the ability to avoid or eliminate unneeded or suboptimal cost.',
            options: [
                'Cost optimization',
                'Reliability',
                'Security',
                'Performance'
            ],
            answer: 'Cost optimization',
            answerDescription:
                'Cost optimization is the ability to avoid or eliminate unneeded or suboptimal cost.'
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
                'When you restart your EC2 instance with a non-elastic IP public address, your public IP will ___.',
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
                '___ is the storage platform of AWS. It is an "unlimited" storage container that can store digital content.',
            options: ['EC2', 'Bucket', 'RDB', 'S3'],
            answer: 'S3',
            answerDescription:
                'S3 is the storage platform of AWS. It is an unlimited "bucket" storage container that can store digital content.'
        },
        {
            id: 16,
            question:
                '___ is a relational database service of AWS. It offers database management systems to store relational data.',
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
                'Dedicated Hosts; allow you to book an entire physical server for your use. Full control of EC2 Instance placement and utilization.'
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
                'Convertible Reserved Instances; long workloads with flexible instances. On Demand Instances: Short workload, predictable pricing, pay for what you use. Spot Instances: bid for short workloads, can lose instances.'
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
            question:
                'An ___ is used to spin EC2s to match an increased or decreased load.',
            options: [
                'Load Balancer',
                'Cloud Front',
                'Auto Scaling Group',
                'Target Group'
            ],
            answer: 'Auto Scaling Group',
            answerDescription:
                'An Auto Scaling Group (ASG) is used to match an increased (scaling out) or decreased (scaling in) load. It can ensure that you have a maximum and minimum number of machines running. You can also automatically register new instances to a load balancer.'
        },
        {
            id: 36,
            question:
                '___ are used to monitor traffic and alert the system to scale in or scale out.',
            options: [
                'Auto Scaling Group',
                'Auto Scaling Alarms',
                'Elastic Load Balancer',
                'Auto Scale Runner'
            ],
            answer: 'Auto Scaling Alarms',
            answerDescription:
                'Auto Scaling Alarms (such as CloudWatch) alarms are used to monitor traffic and alert the system to scale in or scale out. The alarms can monitor various metrics such as average CPU usage, number of request on the ELB per instance, average network in/out, etc.'
        },
        {
            id: 37,
            question:
                'A/An ___ is a network drive you can attach to your instances while they run. It allows your instances to persist data.',
            options: ['EBL', 'EBS', 'EMM', 'AEG'],
            answer: 'EBS',
            answerDescription:
                'A/An EBS (Elastic Block Store) is a network drive you can attach to your instances while they run. It allows your instances to persist data. It uses the network to communicate the instance. Can be detached and attached to EC2 instances quickly. Locked to an AZ (Availability Zone). To move across AZ, you must snapshot. EBS can be attached to only one instance at a time.'
        },
        {
            id: 38,
            question:
                'Data at rest in an EBS Volume and in flight between a EC2 instances/EBS volumes are ___.',
            options: ['encrypted', 'unencrypted'],
            answer: 'encrypted',
            answerDescription:
                'Data at rest and in flight between a EC2 instance and in an EBS volume are encrypted. All snapshots are encrypted. Encryption and decryption are handled transparently (you have nothing to do).'
        },
        {
            id: 39,
            question: '___ records should be used over ___ records.',
            options: [
                'CNAME, Alias',
                'CNAME, AAAA',
                'Alias, AAAA',
                'Alias, CNAME'
            ],
            answer: 'Alias, CNAME',
            answerDescription:
                'Alias records should be used over CNAME records for performance reasons. Route 53 can use public domains, private domains, has client load balancing, health checks, and routing policies you can use.'
        },
        {
            id: 40,
            question:
                '___ is a managed DB service for DB which use SQL as a query language.',
            options: ['S3', 'RDS', 'EC2', 'RMB'],
            answer: 'RDS',
            answerDescription:
                'RDS is a managed DB service for DB which use SQL as a query language. You can create Postgres, Oracle, MySQL, Aurora, etc. You get OS patching, backups, dashboard monitoring, scaling capability, upgrades, read replicas, etc. '
        },
        {
            id: 41,
            question:
                '___ are used to replicate database reads to scale database read utilization.',
            options: [
                'Read Replicas',
                'Write Replicas',
                'Read Throw',
                'Scalers'
            ],
            answer: 'Read Replicas',
            answerDescription:
                'Read Replicas are used to replicate database reads. Replication is ASYNC so reads are eventually consistent with master. Replicas can be promoted to their own DB. Application must update the connection string to leverage read replicas.'
        },
        {
            id: 42,
            question:
                'RDS is encrypted at ___ with AWS KMS AES-256 encryption. SSL certificates encrypt data to RDS in ___ over the network.',
            options: [
                'rest, running',
                'flight, rest',
                'rest, flight',
                'flight, run'
            ],
            answer: 'rest, flight',
            answerDescription: ''
        },
        {
            id: 43,
            question:
                'If you require ___ on a RDS DB, then no user has access to the DB unless they have SSL connection.',
            options: ['HTML', 'KMS', 'SSL', 'XML'],
            answer: 'SSL',
            answerDescription:
                'If you require SSL on a RDS DB, then no user has access to the DB unless they have SSL connection. TO connect using SSL, provide the SSL Trust Certificate (can be downloaded from AWS) or provide SSL options when connecting to a database. Know the difference between connecting and enforcing SSL.'
        },
        {
            id: 44,
            question: 'RDS Databases are usually deployed within a ___ subnet.',
            options: ['public', 'private', 'protected', 'external'],
            answer: 'private',
            answerDescription:
                'RDS Databases are usually deployed within a private subnet. RDS Security works by leveraging security groups (similar to EC2) - it controls who can communicate with the RDS.'
        },
        {
            id: 45,
            question:
                '___ is used to store data in memory for quick access. It can be used to store data that is frequently retrieved in the database to speed the retrieval process.',
            options: ['RDS', 'ElastiCache', 'S3', 'EC2'],
            answer: 'ElastiCache',
            answerDescription:
                'ElastiCache is used to store data in memory for quick access. It can be used to store data that is frequently retrieved in the database to speed the retrieval process. Redis has better feature sets than Memcached. Very useful for read-heavy applications, compute-intensive workloads, etc.'
        },
        {
            id: 46,
            question:
                '___ is when you only load data when necessary. Only the requested data is cached.',
            options: [
                'Write Through',
                'Read Through',
                'Lazy Elastic',
                'Lazy Loading'
            ],
            answer: 'Lazy Loading',
            answerDescription:
                'Lazy loading is when you only load data when necessary. Only the requested data is cached. Node failures are not fatal. Cache miss penalty results in 3 round trips. Data can be updated in the database and outdated in the cache.'
        },
        {
            id: 47,
            question: '___ updates the cache when database is updated.',
            options: [
                'Lazy Loading',
                'Write Through',
                'Read Through',
                'Lazy Wire'
            ],
            answer: 'Write Through',
            answerDescription:
                'Write Through updates the cache when database is updated. Pros: Data in cache is never stale/outdated. Write penalty. Missing data until it is added/updated in the DB. Mitigation is to implement Lazy Loading as well. Cache will have a lot of data that will never be read.'
        },
        {
            id: 48,
            question: 'In S3, you place objects into ___.',
            options: ['Buckets', 'Directories', 'Repositories', 'Containers'],
            answer: 'Buckets',
            answerDescription:
                'In S3, you place objects into Buckets. Buckets must have a globally unique name. Buckets are defined at the regional level.'
        },
        {
            id: 49,
            question: 'The key for an Object in S3 is the ___.',
            options: [
                'short path',
                'FULL path',
                'last parameter',
                'first portion of the path'
            ],
            answer: 'FULL path',
            answerDescription:
                "The key for an Object in S3 is the entire FULL path. There's no concept of directories within Buckets - only long key names. Max size is 5GB - more than that will require multi-part upload."
        },
        {
            id: 50,
            question:
                'You can enable ___ in S3 at the Bucket level. When you overwrite it an object, the object version will increment.',
            options: ['networking', 'applications', 'versioning', 'databases'],
            answer: 'versioning',
            answerDescription:
                'You can enable versioning in S3 at the Bucket level. When you overwrite it an object, the object version will increment. It is best practice to version because you can protect against unintended deletes/overwrites. Any file that is not versioned prior to versioning will have version "null".'
        },
        {
            id: 51,
            question: 'There are ___ methods of encryption in S3.',
            options: ['4', '2', '3', '5'],
            answer: '4',
            answerDescription:
                'There are 4 methods of encryption in S3. SSE-S3, SSE-KMS, SSE-C, and Client Side Encryption. It is important to know which ones are adapted.'
        },
        {
            id: 52,
            question:
                '___: Encryption using keys handled & managed by AWS S3. You must set header, "x-amz-server-side-encryption":"AES256" when sending the request over HTTP/S. AWS will see the header and encrypt it server-side.',
            options: ['SSE-KMS', 'SSE-S3', 'SSE-C', 'Client Side Encryption'],
            answer: 'SSE-S3',
            answerDescription:
                'SSE-S3: Encryption using keys handled & managed by AWS S3. You must set header, "x-amz-server-side-encryption":"AES256" when sending the request over HTTP/S. AWS will see the header and encrypt it server-side.'
        },
        {
            id: 53,
            question:
                '___: Encryption using keys handled & managed by KMS. KMS Advantages: User Control + Audit Trail. Object is encrypted server-side. Must set header: "x-amz-server-side-encryption":"aws:kms". The key used is a KMS that you can manage. Server side.',
            options: ['SSE-KMS', 'SSE-S3', 'SSE-C', 'Client Side Encryption'],
            answer: 'SSE-KMS',
            answerDescription:
                'SSE-KMS: Encryption using keys handled & managed by KMS. KMS Advantages: User Control + Audit Trail. Object is encrypted server-side. Must set header: "x-amz-server-side-encryption":"aws:kms". The key used is a KMS that you can manage. Server side.'
        },
        {
            id: 54,
            question:
                '___: Server side encryption using data keys fully managed by the customer outside of AWS. Amazon S3 does not store the encryption key you provide. HTTPS must be used. Key must be provided in the HTTP header in every request. AWS will take provided key and encrypt the object.',
            options: ['SSE-KMS', 'SSE-S3', 'SSE-C', 'Client Side Encryption'],
            answer: 'SSE-C',
            answerDescription:
                'SSE-C: Server side encryption using data keys fully managed by the customer outside of AWS. Amazon S3 does not store the encryption key you provide. HTTPS must be used. Key must be provided in the HTTP header in every request. AWS will take provided key and encrypt the object.'
        },
        {
            id: 55,
            question:
                '___: Client library such as Amazon S3 Encryption Client. Clients must encrypt data themselves before sending to S3. Clients must decrypt data themselves when retrieving from S3. Custoimer manages key and encryption cycle.',
            options: ['SSE-KMS', 'SSE-S3', 'SSE-C', 'Client Side Encryption'],
            answer: 'Client Side Encryption',
            answerDescription:
                'Client Side Encryption: Client library such as Amazon S3 Encryption Client. Clients must encrypt data themselves before sending to S3. Clients must decrypt data themselves when retrieving from S3. Custoimer manages key and encryption cycle.'
        },
        {
            id: 56,
            question: 'Encryption in flight is also called ___/TLS.',
            options: ['KMS', 'SSL', 'UML', 'AES'],
            answer: 'SSL',
            answerDescription: 'Encryption in flight is also called SSL/TLS.'
        },
        {
            id: 57,
            question:
                '___: User Based and Resource Based. User: IAM policies - which API calls should be allowed for a specific user from IAM console. Resource: Bucket Policies - bucket wide rules from the S3 console, allows cross account; Object Access Control List, Bucket Access Control List.',
            options: [
                'Role Policies',
                'Internal Policies',
                'User Policies',
                'Two Security Basis'
            ],
            answer: 'Two Security Basis',
            answerDescription:
                'Two Security Basis: User Based and Resource Based. User: IAM policies - which API calls should be allowed for a specific user from IAM console. Resource: Bucket Policies - bucket wide rules from the S3 console, allows cross account; Object Access Control List, Bucket Access Control List.'
        },
        {
            id: 58,
            question:
                'S3 ___ utilize JSON based policies. Actions - Set of API to allow/deny. With Bucket policies, you can grant access to buckets, force encryption, or grant acces to another account.',
            options: [
                'Role Policies',
                'Internal Policies',
                'User Policies',
                'Bucket Policies'
            ],
            answer: 'Bucket Policies',
            answerDescription:
                'Bucket Policies: JSON based policies. Actions - Set of API to allow/deny. Principle is the user/account to apply the policy to. With Bucket policies, you can grant access to buckets, force encryption, or grant acces to another account.'
        },
        {
            id: 59,
            question:
                'S3 Networking supports ___ - for instances in VPC without www internet. Your instances can talk to S3 in the internal network.',
            options: ['EBL', 'AGL', 'AES', 'VPC Endpoints'],
            answer: 'VPC Endpoints',
            answerDescription:
                'S3 Networking supports VPC Endpoints - for instances in VPC without www internet. Your instances can talk to S3 in the internal network.'
        },
        {
            id: 60,
            question:
                '___: S3 access logs can be stored in another S3 Bucket. API calls can be logged in AWS CloudTrail.',
            options: [
                'Load Balancing',
                'Logging/Audit',
                'VPC End Points',
                'Bucket Policies'
            ],
            answer: 'Logging/Audit',
            answerDescription:
                'S3 Logging/Audit: S3 access logs can be stored in another S3 Bucket. API calls can be logged in AWS CloudTrail.'
        },
        {
            id: 61,
            question: '___: URLs that are valid only for a limited time.',
            options: [
                'Load Balancing',
                'Logging/Audit',
                'VPC End Points',
                'Signed URLs'
            ],
            answer: 'Signed URLs',
            answerDescription:
                'Signed URLs: URLs that are valid only for a limited time.'
        },
        {
            id: 62,
            question:
                'If you host a ___ on S3, you will need to enable a read Bucket policy.',
            options: ['dynamic page', 'application', 'static page', 'database'],
            answer: 'static page',
            answerDescription:
                'If you host a static page on S3, you will need to enable a read Bucket policy.'
        },
        {
            id: 63,
            question:
                'If you request data from another S3 bucket, you will need to enable ___',
            options: ['CORS', 'VPC', 'EBL', 'ASG'],
            answer: 'CORS',
            answerDescription:
                'If you request data from another S3 bucket, you will need to enable CORS (Cross Origin Resource Sharing allows you to limit the number of websites that can request your files in S3 (and limit your costs)). CORS will allow S3 buckets to share data.'
        },
        {
            id: 64,
            question:
                'S3 is ___. It takes time for data to update and be consistent across requests.',
            options: [
                'Dynamic',
                'Balance',
                'Eventually Consistent',
                'Thorough'
            ],
            answer: 'Eventually Consistent',
            answerDescription:
                'S3 is Eventually Consistent. It takes time for data to update and be consistent across requests. As soon as an object is written, we can retrieve it EXCEPT if you did a GET before to see if a object existed. If you read an object after updating, you might get older version. If you delete an object, you may still be able to retrieve for a short time.'
        },
        {
            id: 65,
            question:
                'Historically and perhaps still on the exam, to optimize for S3 performance, you used to need to ___ in object names. Nowadays, you do not.',
            options: [
                'repeat the last character',
                'suffix your username',
                'prefix 4 random characters',
                'prefix your username'
            ],
            answer: 'prefix 4 random characters',
            answerDescription:
                'Historically and perhaps still on the exam, to optimize for S3 performance, you used to need to prefix 4 random characters in object names. Nowadays, you do not.'
        },
        {
            id: 66,
            question:
                'For objects >= ___, use multipart upload for faster upload. Parallizes PUTs for greater throughput.',
            options: ['10MB', '100MB', '10KB', '1KB'],
            answer: '100MB',
            answerDescription:
                'For objects >= 100MB, use multipart upload for faster upload. Parallizes PUTs for greater throughput. Maximum your network bandwidth and efficiency. Decrease time to retry in case a part fails. MUST use for objects greater than 5GB.'
        },
        {
            id: 67,
            question:
                'Use ___ to cache S3 objects around the world to improve reads. Use S3 Transfer Acceleration (use edge locations) - just need to change the endpoint you write to, not the code.',
            options: ['CloudTrail', 'CloudFront', 'Precipe', 'Consistence'],
            answer: 'CloudFront',
            answerDescription:
                'Use CloudFront to cache S3 objects around the world to improve reads. Use S3 Transfer Acceleration (use edge locations) - just need to change the endpoint you write to, not the code.'
        },
        {
            id: 68,
            question:
                'If you have ___ encryption enabled, then writing to S3 may be throttled from encryption. You can adjust KMS limits.',
            options: ['ASG', 'EBL', 'SSL', 'KMS'],
            answer: 'KMS',
            answerDescription:
                'If you have KMS encryption enabled, then writing to S3 may be throttled from encryption. You can adjust KMS limits.'
        },
        {
            id: 69,
            question:
                'Glacier is another S3 Storage tier for long term archival. You can use SQL ___ queries to let S3 or Glacier know exactly which attributes to filter.',
            options: ['JOIN', 'FROM', 'SELECT', 'AS'],
            answer: 'SELECT',
            answerDescription:
                'Glacier is another S3 Storage tier for long term archival. You can use SQL SELECT queries to let S3 or Glacier know exactly which attributes to filter.'
        }
    ]
};

export default AWSFundamentalsData;

window.integrationsEnabled = {
  aws: {
    autoscaling: false,
    cloudfront: false,
    dynamodb: false,
    ec2: false, //'Elastic Compute Cloud'
    ecs: false, //'EC2 Container Service'
    elasticache: false, //'ElastiCache'
    ebs: false, //'Elastic Block Store'
    elb: false, //'Elastic Load Balancing'
    opsworks: false, // 'OpsWorks'
    rds: false, //'Relational Database Service'
    route53: false, //'Route 53'
    sns: false, //'Simple Notification Service'
    sqs: false, //'Simple Queue Service'
    s3: false, //'Simple Storage Service'
    awsbilling: false //'AWS Billing'
  },
  collectd: {
    apache: false,
    cassandra: false,
    docker: false,
    elasticsearch: false,
    kafka: false,
    memcached: false,
    mongodb: false,
    mysql: false,
    nginx: false,
    postgresql: false,
    redis: false,
    varnish: false,
    zookeeper: false
  }
};

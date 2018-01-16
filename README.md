# cobolambda

Serverless COBOL on AWS Lambda.

## Prerequisites

- AWS Lambda
- Amazon API Gateway
- AWS CloudFormation
- Node.js + npm

## Overview
![Overview](https://github.com/toricls/cobolambda/wiki/res/overview.png)

## Usage

Don't.

## Configure & Deploy

We need both npm and [aws-cli](https://aws.amazon.com/cli/) to configure and deploy.

### Create a S3 bucket to store an app package

```
$ export COBOLAMBDA_S3BUCKET=<your-bucket-name>
$ aws s3api create-bucket --bucket $COBOLAMBDA_S3BUCKET
```

### Install dependencies

```
$ npm install
```

### Package

```
$ aws cloudformation package --template-file app_spec_template.yml --output-template-file app_spec.yml --s3-bucket $COBOLAMBDA_S3BUCKET
```

### Deploy

```
$ aws cloudformation deploy --template-file app_spec.yml --stack-name cobolambda --capabilities CAPABILITY_IAM
```

## Run

```
$ export REST_API_ID=$( aws cloudformation describe-stack-resource --stack-name cobolambda --logical-resource-id ServerlessRestApi --query "StackResourceDetail.PhysicalResourceId" --output text )

$ curl https://$REST_API_ID.execute-api.<your-region>.amazonaws.com/Prod/cobolambda
```

## Writing & Compiling COBOL on Docker container

```
$ docker run -it --rm -v $(pwd):/src toricls/gnucobol:latest bash
root@xxxxxxxxxxxx:/src# cobc --help
```

## Licence

[MIT](LICENCE)

## Author

[toricls](https://github.com/toricls)

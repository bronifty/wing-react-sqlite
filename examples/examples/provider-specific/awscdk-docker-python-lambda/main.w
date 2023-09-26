bring "aws-cdk-lib" as awscdk;

class CdkDockerImageFunction {
  function: awscdk.aws_lambda.DockerImageFunction;

  init() {
    this.function = new awscdk.aws_lambda.DockerImageFunction({
      code: awscdk.aws_lambda.DockerImageCode.fromImageAsset("./container"),
    });
  }
}

new CdkDockerImageFunction();

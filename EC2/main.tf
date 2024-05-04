provider "aws" {

  access_key                  = "mock_access_key"
  secret_key                  = "mock_secret_key"
  region                      = "us-east-1"

  s3_use_path_style           = true
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    s3  = "http://s3.localhost.localstack.cloud:4566"
    ec2 = "http://localhost:4566"
    iam = "http://localhost:4566"
  }
}

# Setup our security group
resource "aws_security_group" "mysg" {
  name   = "localstack"
  vpc_id = var.vpc_id

  ingress {
    description = "Allow inbound ssh traffic"
    cidr_blocks = [var.cidr_block]
    from_port   = var.port
    protocol    = "tcp"
    to_port     = var.port
  }
    tags = {
    name = "locastack"
  }
}
# This will create ab ec2 instance
resource "aws_instance" "ec2-instance" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  key_name = var.key_name
  vpc_security_group_ids = [aws_security_group.mysg.id]
}
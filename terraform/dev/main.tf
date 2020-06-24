provider "aws" {
  region = "ap-south-1"
}

module "awsec2" {
  source = "../modules/ec2"  
  instance_name = "${var.instance_name}"
}
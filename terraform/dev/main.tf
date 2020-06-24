module "awsec2" {
  source = "../modules/ec2"  
  instance_name = "${var.instance_name}"
}
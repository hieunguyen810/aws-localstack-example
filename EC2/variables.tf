variable "ami_id" {
  default = "ami-ff0fea8310f3"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "vpc_id" {
  default = "vpc-bc102dc4"
}

variable "port" {
  default = 22
}

variable "cidr_block" {
  default = "0.0.0.0/0"
}
variable "key_name" {
  default = "myseckey"
}
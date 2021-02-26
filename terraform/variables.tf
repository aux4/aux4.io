variable "env" {
  type = string
}

variable "aws_region" {
  type = string
  default = "us-east-1"
}

variable "aws_profile" {
  type = string
  default = "prod-aux4-deployer"
}

resource "aws_s3_bucket" "logs" {
  bucket = "${var.env}-logs.aux4.io"
  acl = "private"
}
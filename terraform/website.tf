resource "aws_s3_bucket" "website" {
  bucket = var.env == "prod" ? "aux4.io" : "${var.env}.aux4.io"
  acl = "public-read"
  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "WebsitePerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${var.env == "prod" ? "" : "${var.env}."}aux4.io/*"
        }
    ]
}
POLICY

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket" "www" {
  bucket = var.env == "prod" ? "www.aux4.io" : "www.${var.env}.aux4.io"
  acl = "public-read"

  website {
    redirect_all_requests_to = var.env == "prod" ? "https://aux4.io" : "https://${var.env}.aux4.io"
  }

  depends_on = [
    aws_s3_bucket.website
  ]
}

resource "null_resource" "upload" {
  triggers = {
    run_when = sha1(file("../build/index.html"))
  }
  depends_on = [aws_s3_bucket.website]
  provisioner "local-exec" {
    command = "aws --profile ${var.aws_profile} s3 rm --recursive s3://${aws_s3_bucket.website.bucket} && aws --profile ${var.aws_profile} s3 cp --recursive ../build/ s3://${aws_s3_bucket.website.bucket}"
  }
}

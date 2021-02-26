resource "aws_cloudfront_distribution" "aux4_io_distribution" {
  price_class = "PriceClass_100"

  origin {
    domain_name = aws_s3_bucket.website.website_endpoint
    origin_id   = aws_s3_bucket.website.bucket_domain_name

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["SSLv3", "TLSv1"]
    }
  }

  tags = {
    site        = "${var.env}.aux4.io"
    environment = var.env
  }

  aliases             = var.env == "prod" ? ["aux4.io", "www.aux4.io"] : ["${var.env}.aux4.io", "www.${var.env}.aux4.io"]
  default_root_object = "index.html"
  enabled             = "true"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id   = aws_s3_bucket.website.bucket_domain_name

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    compress               = "true"
    min_ttl                = 0

    # default cache time in seconds.  This is 1 day, meaning CloudFront will only
    # look at your S3 bucket for changes once per day.
    default_ttl            = 86400
    max_ttl                = 604800
  }

  custom_error_response {
    error_code = 404
    response_page_path = "/index.html"
    response_code = 200
  }

  logging_config {
    include_cookies = false
    bucket          = aws_s3_bucket.logs.bucket_domain_name
    prefix          = "cf/"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.aux4_io.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }
}


resource "aws_route53_record" "website_domain" {
  name    = var.env == "prod" ? "aux4.io." : "${var.env}.aux4.io."
  zone_id = data.aws_route53_zone.aux4_io.zone_id
  type    = "A"
  allow_overwrite = true

  alias {
    name    = aws_cloudfront_distribution.aux4_io_distribution.domain_name
    zone_id = aws_cloudfront_distribution.aux4_io_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
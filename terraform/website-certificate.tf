resource "aws_acm_certificate" "aux4_io" {
  domain_name = var.env == "prod" ? "*.aux4.io" : "*.${var.env}.aux4.io"
  validation_method = "DNS"

  subject_alternative_names = [var.env == "prod" ? "aux4.io" : "${var.env}.aux4.io"]
}

resource "aws_route53_record" "aux4_io_validation" {
  for_each = {
    for dvo in aws_acm_certificate.aux4_io.domain_validation_options : dvo.domain_name => {
      name = dvo.resource_record_name
      record = dvo.resource_record_value
      type = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name = each.value.name
  records = [each.value.record]
  ttl = 60
  type = each.value.type
  zone_id = data.aws_route53_zone.aux4_io.zone_id
}

resource "aws_acm_certificate_validation" "aux4_io" {
  certificate_arn         = aws_acm_certificate.aux4_io.arn
  validation_record_fqdns = [for record in aws_route53_record.aux4_io_validation : record.fqdn]
}

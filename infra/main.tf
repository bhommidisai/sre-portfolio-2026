provider "github" {
  token = var.github_token
}

resource "github_repository" "portfolio" {
  name        = "sre-portfolio-2026"
  description = "Infrastructure-as-Code managed portfolio for Sai Bhommidi"
  visibility  = "public"
  auto_init   = true
}

resource "github_repository_pages" "hosting" {
  repository = github_repository.portfolio.name
  source {
    branch = "main"
    path   = "/docs"
  }
}

variable "github_token" {
  type      = string
  sensitive = true
}
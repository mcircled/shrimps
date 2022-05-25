# -*- encoding: utf-8 -*-
# stub: jekyll-bookshop 3.0.0.pre.beta.3 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-bookshop".freeze
  s.version = "3.0.0.pre.beta.3"

  s.required_rubygems_version = Gem::Requirement.new("> 1.3.1".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["CloudCannon".freeze]
  s.date = "2022-03-28"
  s.email = ["support@cloudcannon.com".freeze]
  s.homepage = "https://github.com/cloudcannon/bookshop".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.2.3".freeze
  s.summary = "A Jekyll plugin to load components from bookshop".freeze

  s.installed_by_version = "3.2.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.7", "< 5.0"])
    s.add_runtime_dependency(%q<dry-inflector>.freeze, [">= 0.1", "< 1.0"])
    s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.80"])
    s.add_development_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.11"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.7", "< 5.0"])
    s.add_dependency(%q<dry-inflector>.freeze, [">= 0.1", "< 1.0"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.80"])
    s.add_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.11"])
  end
end

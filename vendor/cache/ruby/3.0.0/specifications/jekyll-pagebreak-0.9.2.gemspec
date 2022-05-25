# -*- encoding: utf-8 -*-
# stub: jekyll-pagebreak 0.9.2 ruby lib
# stub: ext/extconf.rb

Gem::Specification.new do |s|
  s.name = "jekyll-pagebreak".freeze
  s.version = "0.9.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Liam Bigelow".freeze]
  s.date = "2022-04-12"
  s.email = ["liam@cloudcannon.com".freeze]
  s.extensions = ["ext/extconf.rb".freeze]
  s.files = ["ext/extconf.rb".freeze]
  s.homepage = "https://github.com/CloudCannon/pagebreak".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.2.3".freeze
  s.summary = "A Jekyll plugin to paginate the output of any static site generator".freeze

  s.installed_by_version = "3.2.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.7", "< 5.0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 12.3.3"])
    s.add_development_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.5.1"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.7", "< 5.0"])
    s.add_dependency(%q<rake>.freeze, [">= 12.3.3"])
    s.add_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.5.1"])
  end
end

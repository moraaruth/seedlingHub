# -*- encoding: utf-8 -*-
# stub: password_strength 1.1.4 ruby lib

Gem::Specification.new do |s|
  s.name = "password_strength".freeze
  s.version = "1.1.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Nando Vieira".freeze]
  s.date = "2016-04-28"
  s.description = "Check password strength against several rules. Includes ActiveRecord/ActiveModel support.".freeze
  s.email = ["fnando.vieira@gmail.com".freeze]
  s.homepage = "http://github.com/fnando/password_strength".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9".freeze)
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Check password strength against several rules. Includes ActiveRecord/ActiveModel support.".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<activemodel>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
    s.add_development_dependency(%q<minitest-utils>.freeze, [">= 0"])
  else
    s.add_dependency(%q<activemodel>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, [">= 0"])
    s.add_dependency(%q<minitest-utils>.freeze, [">= 0"])
  end
end

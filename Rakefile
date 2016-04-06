# rake test
desc "build and test website"
task :test do
  require 'bundler/setup'
  require 'html/proofer'
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./_site", {:verbose => true}).run
end
require 'html-proofer'
# rake test
desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site", assume_extension: true).run
end
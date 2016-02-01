require "extensions/views"
require_relative "./lib/cleaner"

activate :views
activate :directory_indexes
activate :autoprefixer


set :haml, { :ugly => true, :format => :html5 }
set :relative_links, true
set :markdown, :fenced_code_blocks => true, :smartypants => true
set :markdown_engine, :redcarpet
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
set :layout, "layouts/application"

configure :development do
 activate :livereload
end

configure :build do
  # Relative assets needed to deploy to Github Pages
  activate :relative_assets
  activate :build_cleaner
end

after_build do |builder|
  src = File.join(config[:source],"CNAME")
  dst = File.join(config[:build_dir],"CNAME")
  builder.source_paths << File.dirname(__FILE__)
  builder.copy_file(src,dst)
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
  deploy.branch = "master"
end

helpers do
  def nav_link(link_text, page_url, options = {})
    options[:class] ||= ""
    if current_page.url.length > 1
      current_url = current_page.url.chop
    else
      current_url = current_page.url
    end
    options[:class] << " active" if page_url == current_url
    link_to(link_text, page_url, options)
  end
end

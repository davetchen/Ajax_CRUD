2/26/2012 dtc
=============
New Rails 3.2.1 app using ruby 1.9.3, setup rvm as in ../README.txt

Lets implement Ajax_CRUD using unobtrusive JS as described here:

  http://stjhimy.com/posts/07-creating-a-100-ajax-crud-using-rails-3-and-unobtrusive-javascript


Get a good Gemfile from 
  http://ruby.railstutorial.org/chapters/updating-showing-and-deleting-users?version=3.2#code:final_gemfile


Let's try to use Haml by default so add 'haml' and 'haml-rails' to the Gemfile

> rails generate rspec:install

> rails generate scaffold Post name:string title:string content:text
> rake db:migrate

Makes haml templates ... awesome!

And to convert ERB files to Haml,
> gem install hpricot
> gem install ruby_parser

> html2haml application.html.erb application.haml

Wow--this seems to break the UJS ... switching back application.html.erb
And there is an issue with Haml (and erb) "sanitizing" the Html output. See:

  http://stackoverflow.com/questions/1622209/how-to-send-back-js-haml-in-rails

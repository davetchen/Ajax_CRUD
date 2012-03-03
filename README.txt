
http://sharp-samurai-1332.herokuapp.com

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

Wow--this seems to break the UJS ... switching back to application.html.erb
And there is an issue with Haml (and erb) "sanitizing" the Html output. See:

  http://stackoverflow.com/questions/1622209/how-to-send-back-js-haml-in-rails

Seems to run pretty well, but it is difficult to debug extensive JS when 
it's written this way. Errors *do not* show up in the JS console as you
would expect...


3/1/2012 dtc
=============
Lets add some quick CSS ...

  http://ruby.railstutorial.org/chapters/rails-flavored-ruby?version=3.2#sec:cascading_style_sheets

And change the root_path to "posts#index"


3/2/2012 dtc
=============
Lastly, just for fun lets add a JS tooltip to the Show link

  http://craigsworks.com/projects/qtip2

OK, ready to deploy to heroku!

> gem install heroku
> heroku create --stack cedar
Creating sharp-samurai-1332... done, stack is cedar

http://sharp-samurai-1332.herokuapp.com/ | git@heroku.com:sharp-samurai-1332.git
Git remote heroku added

> git push heroku master
> heroku run rake db:migrate


3/3/2012 dtc
=============
Well, that was successful but it created the heroku app under my
'work' account.  Let's see if we can create a separate 'personal' account.

  http://martyhaught.com/articles/2010/12/14/managing-multiple-heroku-accounts/
  http://www.karan.org/blog/index.php/2009/08/25/multiple-ssh-private-keys

> heroku plugins:install git://github.com/ddollar/heroku-accounts.git
> heroku accounts:add locomotive
> heroku accounts:add personal

> heroku create --stack cedar
http://blazing-rain-7907.herokuapp.com/ | git@heroku.com:blazing-rain-7907.git

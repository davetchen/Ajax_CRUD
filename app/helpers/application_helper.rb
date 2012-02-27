module ApplicationHelper
  def title( the_title )
    content_for :title, the_title
  end

  def show_title?
    return 1
  end

  def error_messages_for( amodel )
    str = "<ul>"
    amodel.errors.full_messages.each do |msg|
      str += "<li>" + msg + "</li>"
    end
    str += "</ul>"
  end
end

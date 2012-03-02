// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function ajaxcrud_init_tooltips() {
  $('a.show').each( function(index) {
    $(this).qtip({
      content: {
        text: 'Loading...',
        ajax: {
          url: this.href + '.json',
          type: 'GET',
          data: {},
          success: function( data, status ) {
            var str  = "<strong>Post</strong> <br>";
            str += "Id: " + data.id + "<br>";
            str += "Name: " + data.name + "<br>";
            str += "Title: " + data.title + "<br>";
            str += "Content: " + data.content;

            this.set('content.text', str);
          },
        },
      },
    });
  });
}


$(function() {
  ajaxcrud_init_tooltips();
});

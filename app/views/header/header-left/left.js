define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!./left.css',
  'text!./left.html'
], function($, _, Backbone, Handlebars, css, html){
  var View = Backbone.View.extend({
    el: $('#headerBar'),
    render: function(){
      // Create CSS
      var style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(document.createTextNode(css));
      $("head").append(style);

      // Create HTML
      var template = Handlebars.compile(html);
      var data = {};
      // Append our compiled template to this Views "el"
      $('#headerBar').append( template(data) );
    }
  });
  // Our module now returns our view
  return View;
});
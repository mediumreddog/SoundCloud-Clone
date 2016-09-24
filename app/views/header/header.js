define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!./header.css',
  'text!./header.html',
  './header-left/left'
], function($, _, Backbone, Handlebars, css, html, leftBar){
  var View = Backbone.View.extend({
    el: $('header'),
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
      this.$el.append( template(data) );

      // Render Subviews
      var left = new leftBar();
      left.render();
    }
  });
  // Our module now returns our view
  return View;
});
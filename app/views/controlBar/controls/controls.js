define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!./controls.css',
  'text!./controls.html'
], function($, _, Backbone, Handlebars, css, html){
  var View = Backbone.View.extend({
    el: $('#controlBar'),
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
      $('#controlBar').append( template(data) );

      this.startControls();
    },
    startControls: function(){
      var Player = this.model;

      $("#playPause").click( function(){
        if(Player.get("status") != "playing") {
          $("#playPause").toggleClass("fa-pause");
          Player.play();
        } else {
          $("#playPause").toggleClass("fa-pause");
          Player.pause();
        }
      });
    }
  });
  // Our module now returns our view
  return View;
});
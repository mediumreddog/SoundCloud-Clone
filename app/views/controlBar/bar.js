define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!views/controlBar/bar.css',
  'text!views/controlBar/bar.html',
  'views/controlBar/controls/controls'
], function($, _, Backbone, Handlebars, css, html, controls){
  var View = Backbone.View.extend({
    el: $('#control'),
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
      var controlButtons = new controls({model: this.model});
      controlButtons.render();

      this.model.on("curTimeChange", this.updateSeekBar, this);
    },
    updateSeekBar: function(){
      var Player = this.model;
      var w = (Player.get("curTime") / Player.get("length")) * 100;

      $('#seekBar').width(w + "%");
    }
  });
  // Our module now returns our view
  return View;
});
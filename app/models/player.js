define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
    var player = Backbone.Model.extend({
      initialize: function() {
        this.set({status: 'stopped', curPlaying: 0});

        this.set("audioOBJ", new Audio());

        //var test = this.updateTime();

        this.get("audioOBJ").addEventListener('timeupdate', this.updateTime.bind(this), false);

        this.load(1);
        
      },
      load: function(audioID) {
        //var audioFile = lookup(audioID); Eventually will convert audioID to audioFile
        var audioFile = "audio/myhero.mp3";

        this.get("audioOBJ").src = audioFile;
        this.set({status: "paused", length: "238"});

      },
      play: function() {
        this.set("status", "playing");
        this.get("audioOBJ").play();
      },
      pause: function() {
        this.set("status", "paused");
        this.get("audioOBJ").pause();
      },
      updateTime: function() {
        this.set("curTime", this.get("audioOBJ").currentTime);
        this.trigger('curTimeChange');
      }
    });

    return player;
});
require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    handlebars: 'lib/handlebars',
    css: 'plugins/css',
    text: 'plugins/text'
  }

});

require(['app'], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});
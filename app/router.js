define([
  'jquery',
  'underscore',
  'backbone',
  'views/header/header',
  'views/home/home',
  'views/list/list',
  'views/controlBar/bar',
  'models/player',
], function($, _, Backbone, Header, Home, List, Control, Player){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Home
      '(./)': 'home',

      // Define some URL routes
      'list(/)': 'listMusic',

      // User search (?)
      ':param': 'searchUser',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    var app_player = new Player();

    // Render Header
    var header = new Header();
    header.render();

    // Render Controls
    var controls = new Control({model: app_player});
    controls.render();

    // HOME
    app_router.on('route:home', function(){
      var homeView = new Home();
      homeView.render();
    });

    // LIST SOME MUSIC
    app_router.on('route:listMusic', function(){
      var listView = new List();
      listView.render();
    });

    // SEARCH USER
    app_router.on('route:searchUser', function(param){
      alert("searchUser");
      console.log('Search for:', param);
    });

    // DEFAULT
    app_router.on('route:defaultAction', function(actions){
      alert("default");
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });

    Backbone.history.start({pushState: true, root: "/cliff/sc/"});

    startLinker();
  };

  var startLinker = function() {
    $(document).on("click", "a:not([data-bypass])", function(evt) {
      var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
      var root = location.protocol + "//" + location.host + Backbone.history.options.root;

      console.log(href.prop + "; " + href.attr);

      if (href.prop && href.prop.slice(0, root.length) === root) {
        evt.preventDefault();
        Backbone.history.navigate(href.attr, true);
      }
    });
  };

  return {
    initialize: initialize
  };
});
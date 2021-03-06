// made to bootstrap the app
// global configuration

var LIB_PATH = 'lib/';

// we need to configure require.js so it will know where these modules are located
require.config({
   paths: {
       jquery: LIB_PATH+ 'jquery-min',
       underscore: LIB_PATH+ 'underscore-min',
       backbone: LIB_PATH+ 'backbone-min',
       doT: LIB_PATH+ 'doT',

       SearchInputView: 'views/searchInputView',

       searchInputModel: 'models/searchInputModel',
   }
});

// only need app to require all other modules
define(['app'], function(App,generalUtils){
    App.initialize(generalUtils);
});

define([
    'jquery',
    'underscore',
    'backbone',
    'doT',
    'SearchInputView',
    'searchInputModel',
], function ( $, _, Backbone, dot, SearchInputView, searchInputModel ){

    // because this is the app module, it is nice to have an initialize method on it
    // which is responsible for starting the application
    // which we can call from the main module

    var initialize = function (){

        var searchInputView = new SearchInputView({el: "#abc", model: searchInputModel, template: null, name: 'asddfgfghghjhjk 12'});
        searchInputView.render();

    };

    // here we are using the revealing module pattern
    // what we are returning here we expose to the world as public
    return {
        initialize: initialize
    }
});


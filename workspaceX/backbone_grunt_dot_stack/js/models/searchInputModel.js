// now we need to wrap each one of these types inside a require.js module
// the define function comes with require.js
// the define function takes two arguments - an array of dependencies and a factory function which is called when all of the dependencies are loaded
define([
    'jquery',
    'underscore',
    'backbone',
], function ( $, _, Backbone ) {

    var SearchInputModel = Backbone.Model.extend({
        defaults: {
            name: 'Guest User',
            age: 23,
            occupation: 'worker',
            title: 'some title...'
        },
    });

    var searchInputModel = new SearchInputModel();

    return searchInputModel;
});


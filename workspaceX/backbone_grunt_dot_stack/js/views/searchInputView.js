
define([
    'jquery',
    'underscore',
    'backbone',
    'doT',
], function( $, _, Backbone, doT ){
    var SearchInputView = Backbone.View.extend({
        el: 'input',
        template: '../templates/greeting.html',
        attributes: {
            className: 'click',
            id: 'click'
        },

        events: {
            "click .click": "onSearchSubmitHandler",
            "input .textInput": "onInputChangeHandler"
        },

        initialize: function(){
            console.log(doT.template);
            console.log(this);
            console.log(this.template);
            console.log(this.defaults);
            console.log(this.model);
            console.log(this.model.attributes);
            console.log(this.model.defaults);
            //this.contents= '<h1>asdasd</h1>';
            //this.contents= doT.template();
            this.tempFn = _.template($('#someTemplate').html());
            this.tempFn2 = doT.template($('#someTemplate').html());
            this.tempFn3 = doT.template($('#someTemplate'));
            this.tempFn4= doT.template("<h1>Here is a {{=it.subject}} with some {{=it.title}}</h1>");
            this.resultText = this.tempFn({foo: 'template',foo2: 'content', title: 'some title...'});
            this.resultText2 = this.tempFn2({foo: 'template',foo2: 'content', title: 'some title...'});
            this.resultText3 = this.tempFn(this.model.toJSON());
            this.resultText4 = this.tempFn4({subject:'message', title: 'title...'});

            console.dir(this.resultText);
            console.dir(this.resultText2);
            console.dir(this.resultText3);
            console.dir(this.resultText4);

        },

        render: function(){
            var content = `
                           ${this.resultText} <br />
                           ${this.resultText2} <br />
                           ${this.resultText3} <br />
                           ${this.resultText4} 
                           `;
            this.$el.prepend(content);

            return this;
        }
    });

    return SearchInputView;

});


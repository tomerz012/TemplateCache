/**
 * This is a short example to my templateCache
 * the main idea is to  
 */


var ExampleView = Backbone.View.extend({
    templateName:"#tmpl-skill",

    initialize:function () {
        global.templateCache.add(this.templateName)
    },

    render:function () {
        //render with data 
        this.$el.html(global.templateCache.get(this.templateName)(data));
        return this;
    }
});


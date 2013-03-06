/**
 * User: Tomerz
 * Date: 06/03/13
 * Time: 10:20
 *
 * TemplateCacheManager is a utility which helps caching templates.
 * this specific one is using handlebars, but it can be changed (see line 20)
 *
 */
(function (global) {
    var TemplateCacheManager = ({
        cache:this.cache || {},

        initialize:function () {
            this.cache = {};
        },

        add:function (templateName) {
            // cache only if not exists, if exists do nothing.
            if (TemplateCacheManager.cache[templateName] == undefined || TemplateCacheManager.cache[templateName] == null) {
                TemplateCacheManager.cache[templateName] = {
                    value:Handlebars.compile($(templateName).html())
                }
            }
        },

        remove:function (templateName) {
            this.cache[templateName] = null;
        },

        removeAll:function () {
            this.cache = {};
        },

        get:function (templateName) {
            return this.cache[templateName].value;
        }
    });
    global.templateCache = TemplateCacheManager;
}(this));

define(function(require, exports, module) {
    var $ = require('jquery');
    var TplManager = require('root/src/js/tplmanager');
    var PageSlider = require('root/src/js/pageslider');
    var moduleId = module.id;

    exports.init = function(module, id) {
        var tpl = TplManager.get(moduleId + '/' + id);
        if (!tpl) {
            $.get('/partial/' + module + '.html', function(data) {
                var rawHtml = data.replace(/\{\{id\}\}/ig, id)
                PageSlider.slide($(rawHtml));
                TplManager.push(moduleId + '/' + id, rawHtml);
            });
        } else {
            PageSlider.slide($(tpl));
        }
    };
});

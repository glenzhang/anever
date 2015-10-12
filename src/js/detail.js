define(function(require, exports, module) {
    var $ = require('jquery');
    var TplManager = require('root/src/js/tplmanager');
    var PageSlider = require('root/src/js/pageslider');
    var moduleId = module.id;
    var $view = $('#J_view');

    exports.init = function(module, id) {
        var tpl = TplManager.get(moduleId + '/' + id);
        if (!tpl) {
            $.get('/partial/' + module + '.html', function(data) {
                var rawHtml = data.replace(/\{\{id\}\}/ig, id)
                    //$view.html(rawHtml);
                PageSlider.slide($(rawHtml));
                TplManager.push(moduleId + '/' + id, rawHtml);
            });
        } else {
            //$view.html($(tpl));
            PageSlider.slide($(tpl));
        }
    };
});

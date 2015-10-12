define(function(require, exports, module) {
    var $ = require('jquery');
    var TplManager = require('root/src/js/tplmanager');
    var PageSlider = require('root/src/js/pageslider');
    var moduleId = module.id;
    var $view = $('#J_view');

    exports.init = function(module) {
        var tpl = TplManager.get(moduleId);
        if (!tpl) {
            $.get('/partial/' + module + '.html', function(data) {
                //$view.html(data);
                PageSlider.slide($(data));
                TplManager.push(moduleId, data);
            });
        } else {
            //$view.html(tpl);
            PageSlider.slide($(tpl));
        }
    };
});

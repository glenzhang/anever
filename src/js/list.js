define(function(require, exports, module) {
    var $ = require('jquery');
    var TplManager = require('root/src/js/tplmanager');
    var PageSlider = require('root/src/js/pageslider');
    var moduleId = module.id;

    exports.init = function(module) {
        var tpl = TplManager.get(moduleId);
        if (!tpl) {
            $.get('/partial/' + module + '.html', function(data) {
                PageSlider.slide($(data));
                TplManager.push(moduleId, data);
            });
        } else {
            PageSlider.slide($(tpl));
        }
    };
});

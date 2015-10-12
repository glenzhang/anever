define(function(require, exports) {
    var transformCss = "-webkit-transform";

    function getLoadingDirection($el) {
        var matrix = (function() {
            var mx;
            if ($el.is(':hidden')) {
                mx = $el.show().css(transformCss);
                $el.hide();
            } else {
                mx = $el.css(transformCss);
            }
            return mx;
        }());

        var matrixArr;
        var margin;

        if (matrix == 'none') {
            return 0;
        }

        matrixArr = matrix.replace(/matrix\(|\)/g, "").split(',');
        margin = parseInt(matrixArr[4]);

        if (margin > 0) {
            return 1;
        } else if (margin == 0) {
            return 0;
        } else {
            return -1;
        }
    }

    exports.getDirection = getLoadingDirection;
});

"use strict";
/**
 * @hidden
 */
var DEFAULTS = {
    allowUnsort: true,
    mode: 'single'
};
/**
 * @hidden
 */
exports.normalize = function () {
    var settings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        settings[_i - 0] = arguments[_i];
    }
    return Object.assign.apply(Object, [DEFAULTS].concat(settings));
};

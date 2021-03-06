'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var proxy = function (a, b) { return function (e) { return b(a(e)); }; };

var bind = function (el, event, callback) { return el.addEventListener && el.addEventListener(event, callback); };

var unbind = function (el, event, callback) { return el.removeEventListener && el.removeEventListener(event, callback); };

var touchRegExp = /touch/;

function normalizeEvent(e) {
    if (e.type.match(touchRegExp)) {
        return {
            pageX: e.changedTouches[0].pageX,
            pageY: e.changedTouches[0].pageY,
            type: e.type,
            originalEvent: e
        };
    }

    return {
        pageX: e.pageX,
        pageY: e.pageY,
        type: e.type,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        originalEvent: e
    };
}

var noop = function() { };

// 300ms is the usual mouse interval;
// However, an underpowered mobile device under a heavy load may queue mouse events for a longer period.
var IGNORE_MOUSE_TIMEOUT = 2000;

var Draggable = function Draggable(ref) {
    var this$1 = this;
    var press = ref.press; if ( press === void 0 ) press = noop;
    var drag = ref.drag; if ( drag === void 0 ) drag = noop;
    var release = ref.release; if ( release === void 0 ) release = noop;

    this._pressHandler = proxy(normalizeEvent, press);
    this._dragHandler = proxy(normalizeEvent, drag);
    this._releaseHandler = proxy(normalizeEvent, release);

    this._ignoreMouse = false;

    this._touchstart = function (e) {
        if (e.touches.length === 1) {
            this$1._pressHandler(e);
        }
    };

    this._touchmove = function (e) {
        if (e.touches.length === 1) {
            this$1._dragHandler(e);
        }
    };

    this._touchend = function (e) {
        // the last finger has been lifted, and the user is not doing gesture.
        // there might be a better way to handle this.
        if (e.touches.length === 0 && e.changedTouches.length === 1) {
            this$1._releaseHandler(e);
            this$1._ignoreMouse = true;
            setTimeout(this$1._restoreMouse, IGNORE_MOUSE_TIMEOUT);
        }
    };

    this._restoreMouse = function () {
        this$1._ignoreMouse = false;
    };

    this._mousedown = function (e) {
        var which = e.which;

        if ((which && which > 1) || this$1._ignoreMouse) {
            return;
        }

        bind(document, "mousemove", this$1._mousemove);
        bind(document, "mouseup", this$1._mouseup);
        this$1._pressHandler(e);
    };

    this._mousemove = function (e) {
        this$1._dragHandler(e);
    };

    this._mouseup = function (e) {
        unbind(document, "mousemove", this$1._mousemove);
        unbind(document, "mouseup", this$1._mouseup);
        this$1._releaseHandler(e);
    };
};

Draggable.prototype.bindTo = function bindTo (element) {
    if (element === this._element) {
        return;
    }

    if (this._element) {
        this._unbindFromCurrent();
    }

    this._element = element;

    bind(element, "mousedown", this._mousedown);
    bind(element, "touchstart", this._touchstart);
    bind(element, "touchmove", this._touchmove);
    bind(element, "touchend", this._touchend);
};

Draggable.prototype._unbindFromCurrent = function _unbindFromCurrent () {
    unbind(this._element, "mousedown", this._mousedown);
    unbind(this._element, "touchstart", this._touchstart);
    unbind(this._element, "touchmove", this._touchmove);
    unbind(this._element, "touchend", this._touchend);
};

Draggable.prototype.destroy = function destroy () {
    this._unbindFromCurrent();
    this._element = null;
};

exports.Draggable = Draggable;
exports['default'] = Draggable;

//# sourceMappingURL=main.js.map

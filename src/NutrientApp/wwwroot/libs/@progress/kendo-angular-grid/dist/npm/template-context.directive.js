"use strict";
var core_1 = require('@angular/core');
/**
 * @hidden
 */
var TemplateContextDirective = (function () {
    function TemplateContextDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TemplateContextDirective.prototype, "templateContext", {
        set: function (context) {
            if (this.insertedViewRef) {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
                this.insertedViewRef = undefined;
            }
            if (context.templateRef) {
                this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    TemplateContextDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[templateContext]' // tslint:disable-line:directive-selector
                },] },
    ];
    /** @nocollapse */
    TemplateContextDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
    ]; };
    TemplateContextDirective.propDecorators = {
        'templateContext': [{ type: core_1.Input },],
    };
    return TemplateContextDirective;
}());
exports.TemplateContextDirective = TemplateContextDirective;

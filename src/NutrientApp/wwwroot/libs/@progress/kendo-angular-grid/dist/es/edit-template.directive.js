import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the column edit cell template of the Kendo UI Grid which helps to customize the content
 * of the edited cells.
 *
 * To define the cell template, nest a `<template>` tag with the `kendoGridEditTemplate` directive
 * inside a `<kendo-grid-column>` tag.
 *
 * The template context contains the following fields:
 * - `formGroup`&mdash;The current [`FormGroup`](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html).
 * If you use the Grid inside [Template-Driven Forms](https://angular.io/docs/ts/latest/guide/forms.html), it will be `undefined`.
 * - `rowIndex`&mdash;The current row index. If inside a new item row, it is `-1`.
 * - `dataItem`&mdash;The current data item.
 * - `column`&mdash;The current column instance.
 * - `isNew`&mdash;The state of the current item.
 */
export var EditTemplateDirective = (function () {
    function EditTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    EditTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoGridEditTemplate]'
                },] },
    ];
    /** @nocollapse */
    EditTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, decorators: [{ type: Optional },] },
    ]; };
    return EditTemplateDirective;
}());

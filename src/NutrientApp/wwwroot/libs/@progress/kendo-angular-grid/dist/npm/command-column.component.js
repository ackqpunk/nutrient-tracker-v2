"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var column_base_1 = require('./column-base');
/**
 * Represents the command columns of the Kendo UI Grid for Angular.
 *
 * The content of the column has to be defined inside a `<template>` tag. The template context
 * is set to the current data item and the following additional fields are passed:
 * - `columnIndex`&mdash;The current column index.
 * - `rowIndex`&mdash;The current row index. If inside a new item row, it will be `-1`.
 * - `dataItem`&mdash;The current data item.
 * - `column`&mdash;The current column instance.
 * - `isNew`&mdash;The state of the current item.
 *
 * Usually, the template contains CRUD command directives such as:
 * - [`EditCommandDirective`]({% slug api_grid_editcommanddirective_kendouiforangular %})
 * - [`RemoveCommandDirective`]({% slug api_grid_removecommanddirective_kendouiforangular %})
 * - [`CancelCommandDirective`]({% slug api_grid_cancelcommanddirective_kendouiforangular %})
 * - [`SaveCommandDirective`]({% slug api_grid_savecommanddirective_kendouiforangular %})
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *    selector: 'my-app',
 *    template: `
 *        <kendo-grid [data]="gridData">
 *          <kendo-grid-column field="ProductID" title="Product ID" width="120">
 *          </kendo-grid-column>
 *          <kendo-grid-column field="ProductName" title="Product Name">
 *          </kendo-grid-column>
 *          <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
 *          </kendo-grid-column>
 *          <kendo-grid-command-column title="command" width="220">
 *               <template>
 *                   <button kendoGridEditCommand class="k-primary">Edit</button>
 *                   <button kendoGridRemoveCommand>Remove</button>
 *               </template>
 *           </kendo-grid-command-column>
 *        </kendo-grid>
 *    `
 * })
 *
 * class AppComponent {
 *    private gridData: any[];
 *
 *    constructor() {
 *        this.gridData = products;
 *    }
 * }
 *
 * const products = [{
 *    "ProductID": 1,
 *    "ProductName": "Chai",
 *    "UnitPrice": 18.0000,
 *    "Discontinued": true
 *  }, {
 *    "ProductID": 2,
 *    "ProductName": "Chang",
 *    "UnitPrice": 19.0000,
 *    "Discontinued": false
 *  }
 * ];
 *
 * ```
 */
var CommandColumnComponent = (function (_super) {
    __extends(CommandColumnComponent, _super);
    function CommandColumnComponent(parent) {
        _super.call(this, parent);
        this.parent = parent;
    }
    CommandColumnComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: column_base_1.ColumnBase,
                            useExisting: core_1.forwardRef(function () { return CommandColumnComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-grid-command-column',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    CommandColumnComponent.ctorParameters = function () { return [
        { type: column_base_1.ColumnBase, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host }, { type: core_1.Optional },] },
    ]; };
    CommandColumnComponent.propDecorators = {
        'templateRef': [{ type: core_1.ContentChild, args: [core_1.TemplateRef,] },],
    };
    return CommandColumnComponent;
}(column_base_1.ColumnBase));
exports.CommandColumnComponent = CommandColumnComponent;

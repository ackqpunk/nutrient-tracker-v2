import { Directive, TemplateRef, Optional, Input } from '@angular/core';
/**
 * Represents the Kendo UI Grid detail template.
 * It provides additional details about a particular data row by expanding or collapsing the content.
 * The detail template does not work with locked columns and requires that the `detailRowHeight` option is set for virtual scrolling.
 *
 * To define the detail template, nest a `<template>` tag with the `kendoGridDetailTemplate` directive inside a `<kendo-grid>` tag.
 * The template context is set to the current data item and the following additional fields are passed:
 * - `dataItem`&mdash;Defines the current data item.
 * - `rowIndex`&mdash;Defines the current row index.
 *
 * Optionally, you can specify the [`DetailTemplateShowIfFn`]({% slug api_grid_detailtemplateshowiffn_kendouiforangular %})
 * setting to determine if a given detail row should be displayed.
 *
 * ```ts-no-run
 *      <div *kendoGridDetailTemplate="let dataItem, let rowIndex = rowIndex; showIf: myCondition">
 *           <category-details [category]="dataItem"></category-details>
 *      </div>
 * ```
 *
 * The following example demonstrates how to use `DetailTemplateShowIfFn` with the `<template>` element.
 *
 * ```ts-no-run
 *     <template kendoGridDetailTemplate let-dataItem let-rowIndex="rowIndex"
 *        [kendoGridDetailTemplateShowIf]="myCondition">
 *           <category-details [category]="dataItem"></category-details>
 *     </template>
 * ```
 *
 * &nbsp;
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *       <kendo-grid
 *           [data]="data"
 *           selectable="true"
 *         >
 *         <kendo-grid-column field="ProductID"></kendo-grid-column>
 *         <kendo-grid-column field="ProductName"></kendo-grid-column>
 *         <kendo-grid-column field="UnitPrice"></kendo-grid-column>
 *         <template kendoGridDetailTemplate let-dataItem>
 *           <div *ngIf="dataItem.Category">
 *             <header>{{dataItem.Category?.CategoryName}}</header>
 *             <span>{{dataItem.Category?.Description}}</span>
 *           </div>
 *         </template>
 *       </kendo-grid>
 *   `
 * })
 *
 * class AppComponent {
 *     public data = [{
 *         "ProductID": 1,
 *         "ProductName": "Chai",
 *         "UnitPrice": 18.0000,
 *         "Discontinued": false,
 *         "Category": {
 *             "CategoryID": 1,
 *             "CategoryName": "Beverages",
 *             "Description": "Soft drinks, coffees, teas, beers, and ales"
 *         }
 *       }, {
 *         "ProductID": 2,
 *         "ProductName": "Chang",
 *         "UnitPrice": 19.0000,
 *         "Discontinued": false,
 *         "Category": {
 *             "CategoryID": 1,
 *             "CategoryName": "Beverages",
 *             "Description": "Soft drinks, coffees, teas, beers, and ales"
 *         }
 *       }, {
 *         "ProductID": 3,
 *         "ProductName": "Aniseed Syrup",
 *         "UnitPrice": 10.0000,
 *         "Discontinued": false,
 *         "Category": {
 *             "CategoryID": 2,
 *             "CategoryName": "Condiments",
 *             "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
 *         }
 *     }];
 *
 * }
 *
 * ```
 */
export var DetailTemplateDirective = (function () {
    function DetailTemplateDirective(templateRef) {
        this.templateRef = templateRef;
        this._condition = function () { return true; };
    }
    Object.defineProperty(DetailTemplateDirective.prototype, "showIf", {
        get: function () {
            return this._condition;
        },
        /**
         * Defines the function that indicates if a given detail row and the associated **Expand** or **Collapse** button will be shown.
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("showIf must be a function, but received " + JSON.stringify(fn) + ".");
            }
            this._condition = fn;
        },
        enumerable: true,
        configurable: true
    });
    DetailTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoGridDetailTemplate]'
                },] },
    ];
    /** @nocollapse */
    DetailTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, decorators: [{ type: Optional },] },
    ]; };
    DetailTemplateDirective.propDecorators = {
        'showIf': [{ type: Input, args: ["kendoGridDetailTemplateShowIf",] },],
    };
    return DetailTemplateDirective;
}());

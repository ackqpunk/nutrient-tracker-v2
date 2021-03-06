"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/map');
require('rxjs/add/operator/merge');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/do');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/debounceTime');
var row_height_service_1 = require('./row-height.service');
var scroller_service_1 = require('./scroller.service');
var utils_1 = require('./utils');
var details_service_1 = require('./details.service');
var columns_container_1 = require('./columns-container');
var change_notification_service_1 = require('./change-notification.service');
var row_sync_1 = require('./row-sync');
/**
 * @hidden
 */
exports.SCROLLER_FACTORY_TOKEN = new core_1.OpaqueToken('grid-scroll-service-factory');
/**
 * @hidden
 */
function DEFAULT_SCROLLER_FACTORY(observable) {
    return new scroller_service_1.ScrollerService(observable);
}
exports.DEFAULT_SCROLLER_FACTORY = DEFAULT_SCROLLER_FACTORY;
;
var wheelDeltaY = function (e) {
    var deltaY = e.wheelDeltaY;
    if (e.wheelDelta && (deltaY === undefined || deltaY)) {
        return e.wheelDelta;
    }
    else if (e.detail && e.axis === e.VERTICAL_AXIS) {
        return (-e.detail) * 10;
    }
    return 0;
};
/**
 * @hidden
 */
var ListComponent = (function () {
    function ListComponent(scrollerFactory, detailsService, changeNotification) {
        var _this = this;
        this.changeNotification = changeNotification;
        this.groups = [];
        this.skip = 0;
        this.columns = new columns_container_1.ColumnsContainer(function () { return []; });
        this.groupable = false;
        this.pageChange = new core_1.EventEmitter();
        this.containerScroll = new core_1.EventEmitter();
        this.dispatcher = new Subject_1.Subject();
        this.scroller = scrollerFactory(this.dispatcher);
        this.detailsSubscription = detailsService.changes.subscribe(function (x) { return _this.detailExpand(x); });
    }
    Object.defineProperty(ListComponent.prototype, "showFooter", {
        get: function () {
            return this.groupable && this.groupable.showFooter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "lockedLeafColumns", {
        get: function () {
            return this.columns.lockedLeafColumns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "nonLockedLeafColumns", {
        get: function () {
            return this.columns.nonLockedLeafColumns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "lockedWidth", {
        get: function () {
            var groupCellsWidth = this.groups.length * 30;
            return this.lockedLeafColumns.reduce(function (prev, curr) { return prev + (curr.width || 0); }, groupCellsWidth);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "nonLockedWidth", {
        get: function () {
            if (this.lockedLeafColumns.length) {
                return this.nonLockedLeafColumns.reduce(function (prev, curr) { return prev + (curr.width || 0); }, 0);
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "isLocked", {
        get: function () {
            return this.lockedLeafColumns.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.changeNotification.changes
            .filter(function () { return utils_1.isPresent(_this.lockedContainer); })
            .subscribe(function () { return _this.syncRowsHeight(); });
    };
    ListComponent.prototype.ngOnChanges = function (changes) {
        if (utils_1.isChanged("total", changes)) {
            this.init();
        }
    };
    ListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container.nativeElement.scrollTop = this.rowHeightService.offset(this.skip);
        if (!utils_1.isUniversal()) {
            this.containerScrollSubscription = Observable_1.Observable
                .fromEvent(this.container.nativeElement, 'scroll')
                .map(function (event) { return event.target; })
                .do(this.onContainerScroll.bind(this))
                .subscribe(this.dispatcher);
            if (this.lockedContainer) {
                this.containerScrollSubscription = this.containerScrollSubscription
                    .add(Observable_1.Observable.fromEvent(this.lockedContainer.nativeElement, 'mousewheel')
                    .merge(Observable_1.Observable.fromEvent(this.lockedContainer.nativeElement, 'DOMMouseScroll'))
                    .filter(function (event) { return !event.ctrlKey; })
                    .map(function (event) { return wheelDeltaY(event); })
                    .subscribe(function (x) { return _this.container.nativeElement.scrollTop -= x; }));
                this.syncRowsHeight();
            }
        }
    };
    ListComponent.prototype.syncRowsHeight = function () {
        if (this.lockedContainer) {
            row_sync_1.syncRowsHeight(this.lockedContainer.nativeElement.children[0], this.container.nativeElement.children[0]);
        }
    };
    ListComponent.prototype.ngOnDestroy = function () {
        if (this.scroller) {
            this.scrollSubscription.unsubscribe();
            this.scroller.destroy();
        }
        if (this.containerScrollSubscription) {
            this.containerScrollSubscription.unsubscribe();
        }
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
        if (this.detailsSubscription) {
            this.detailsSubscription.unsubscribe();
        }
    };
    ListComponent.prototype.init = function () {
        this.rowHeightService = new row_height_service_1.RowHeightService(this.total, this.rowHeight, this.detailRowHeight);
        this.totalHeight = this.rowHeightService.totalHeight();
        var observable = this.scroller
            .create(this.rowHeightService, this.skip, this.take, this.total);
        this.scrollSubscription = observable
            .filter(function (x) { return x instanceof scroller_service_1.PageAction; })
            .subscribe(this.pageChange)
            .add(observable
            .filter(function (x) { return x instanceof scroller_service_1.ScrollAction; })
            .subscribe(this.scroll.bind(this)));
    };
    ListComponent.prototype.detailExpand = function (_a) {
        var index = _a.index, expand = _a.expand;
        if (expand) {
            this.rowHeightService.expandDetail(index);
        }
        else {
            this.rowHeightService.collapseDetail(index);
        }
        this.totalHeight = this.rowHeightService.totalHeight();
    };
    ListComponent.prototype.scroll = function (_a) {
        var offset = _a.offset;
        this.style = { transform: "translateY(" + offset + "px)" };
    };
    ListComponent.prototype.onContainerScroll = function (_a) {
        var scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft;
        if (this.lockedContainer) {
            this.lockedContainer.nativeElement.scrollTop = scrollTop;
        }
        this.containerScroll.emit({ scrollTop: scrollTop, scrollLeft: scrollLeft });
    };
    ListComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: exports.SCROLLER_FACTORY_TOKEN,
                            useValue: DEFAULT_SCROLLER_FACTORY
                        }],
                    selector: 'kendo-grid-list',
                    template: "\n    <div #lockedContainer class=\"k-grid-content-locked\" [style.height.px]=\"height\"\n        *ngIf=\"isLocked\" [style.width.px]=\"lockedWidth\">\n        <table [ngStyle]=\"style\">\n            <colgroup kendoGridColGroup\n                [groups]=\"groups\"\n                [columns]=\"lockedLeafColumns\"\n                [detailTemplate]=\"detailTemplate\">\n            </colgroup>\n            <tbody kendoGridTableBody\n                [groups]=\"groups\"\n                [data]=\"data\"\n                [noRecordsText]=\"''\"\n                [columns]=\"lockedLeafColumns\"\n                [detailTemplate]=\"detailTemplate\"\n                [showGroupFooters]=\"showFooter\"\n                [skip]=\"skip\"\n                [selectable]=\"selectable\">\n            </tbody>\n        </table>\n        <div class=\"k-height-container\">\n            <div [style.height.px]=\"totalHeight\"></div>\n        </div>\n    </div><div #container class=\"k-grid-content k-virtual-content\"\n        [style.height.px]=\"height\"\n        [kendoGridResizableContainer]=\"lockedLeafColumns.length\"\n        [lockedWidth]=\"lockedWidth + 1\">\n        <table [ngStyle]=\"style\" [style.width.px]=\"nonLockedWidth\">\n            <colgroup kendoGridColGroup\n                [groups]=\"isLocked ? [] : groups\"\n                [columns]=\"nonLockedLeafColumns\"\n                [detailTemplate]=\"detailTemplate\">\n            </colgroup>\n            <tbody kendoGridTableBody\n                [skipGroupDecoration]=\"isLocked\"\n                [data]=\"data\"\n                [groups]=\"groups\"\n                [showGroupFooters]=\"showFooter\"\n                [columns]=\"nonLockedLeafColumns\"\n                [detailTemplate]=\"detailTemplate\"\n                [noRecordsTemplate]=\"noRecordsTemplate\"\n                [skip]=\"skip\"\n                [selectable]=\"selectable\">\n            </tbody>\n        </table>\n        <div class=\"k-height-container\">\n            <div [style.height.px]=\"totalHeight\"></div>\n        </div>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.SCROLLER_FACTORY_TOKEN,] },] },
        { type: details_service_1.DetailsService, },
        { type: change_notification_service_1.ChangeNotificationService, },
    ]; };
    ListComponent.propDecorators = {
        'data': [{ type: core_1.Input },],
        'groups': [{ type: core_1.Input },],
        'total': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'rowHeight': [{ type: core_1.Input },],
        'detailRowHeight': [{ type: core_1.Input },],
        'take': [{ type: core_1.Input },],
        'skip': [{ type: core_1.Input },],
        'columns': [{ type: core_1.Input },],
        'detailTemplate': [{ type: core_1.Input },],
        'noRecordsTemplate': [{ type: core_1.Input },],
        'selectable': [{ type: core_1.Input },],
        'groupable': [{ type: core_1.Input },],
        'pageChange': [{ type: core_1.Output },],
        'containerScroll': [{ type: core_1.Output },],
        'container': [{ type: core_1.ViewChild, args: ["container",] },],
        'lockedContainer': [{ type: core_1.ViewChild, args: ["lockedContainer",] },],
    };
    return ListComponent;
}());
exports.ListComponent = ListComponent;

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from '@angular/core';
import { ExpandStateService } from '../expand-state.service';
/**
 * @hidden
 */
export var GroupsService = (function (_super) {
    __extends(GroupsService, _super);
    function GroupsService() {
        _super.apply(this, arguments);
    }
    GroupsService.prototype.isInExpandedGroup = function (groupIndex, skipSelf) {
        if (skipSelf === void 0) { skipSelf = true; }
        if (skipSelf) {
            groupIndex = groupIndex.slice(0, groupIndex.lastIndexOf("_"));
        }
        var expanded = true;
        while (groupIndex && expanded) {
            expanded = this.isExpanded(groupIndex);
            groupIndex = groupIndex.slice(0, groupIndex.lastIndexOf("_"));
        }
        return expanded;
    };
    GroupsService.prototype.isExpanded = function (index) {
        return !_super.prototype.isExpanded.call(this, index);
    };
    GroupsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GroupsService.ctorParameters = function () { return []; };
    return GroupsService;
}(ExpandStateService));

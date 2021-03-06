import { ColumnsContainer } from '../columns-container';
import { isColumnComponent } from '../column.component';
/**
 * @hidden
 */
export var GroupInfoService = (function () {
    function GroupInfoService() {
        this._columnsContainer = new ColumnsContainer(function () { return []; });
    }
    Object.defineProperty(GroupInfoService.prototype, "columns", {
        get: function () {
            var lockedLeafColumns = this._columnsContainer.lockedLeafColumns.filter(isColumnComponent);
            var leafColumns = this._columnsContainer.nonLockedLeafColumns.filter(isColumnComponent);
            return lockedLeafColumns.concat(leafColumns);
        },
        enumerable: true,
        configurable: true
    });
    GroupInfoService.prototype.registerColumnsContainer = function (columns) {
        this._columnsContainer = columns;
    };
    GroupInfoService.prototype.formatForGroup = function (item) {
        var column = this.columnForGroup(item);
        return column ? column.format : "";
    };
    GroupInfoService.prototype.groupTitle = function (item) {
        var column = this.columnForGroup(item);
        return column ? (column.title || column.field) : this.groupField(item);
    };
    GroupInfoService.prototype.groupHeaderTemplate = function (item) {
        var column = this.columnForGroup(item);
        return column ? column.groupHeaderTemplateRef : undefined;
    };
    GroupInfoService.prototype.groupField = function (group) {
        return group.data ? group.data.field : group.field;
    };
    GroupInfoService.prototype.columnForGroup = function (group) {
        var field = this.groupField(group);
        var column = (this.columns || []).filter(function (x) { return x.field === field; })[0];
        return column;
    };
    return GroupInfoService;
}());

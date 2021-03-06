"use strict";
var set = function (value) { return function (pair) { return pair.forEach(function (x) { return x.style.height = value; }); }; };
var clearHeight = function (pairs) { return pairs
    .filter(function (_a) {
    var left = _a[0], right = _a[1];
    return left.style.height || right.style.height;
})
    .forEach(set("")); };
var zip = function (arr1, arr2) {
    var result = [];
    for (var idx = 0, len = arr1.length; idx < len; idx++) {
        if (!arr2[idx]) {
            break;
        }
        result.push([arr1[idx], arr2[idx]]);
    }
    return result;
};
var setHeight = function (heights) { return function (row, idx) { return set((heights[idx] + 1) + "px")(row); }; };
var getHeights = function (rows) { return rows.map(function (_a) {
    var left = _a[0], right = _a[1];
    var height = left.offsetHeight;
    var offsetHeight2 = right.offsetHeight;
    if (height < offsetHeight2) {
        return offsetHeight2;
    }
    return height;
}); };
/**
 * @hidden
 */
exports.syncRowsHeight = function (table1, table2) {
    var rows = zip(table1.rows, table2.rows);
    clearHeight(rows);
    var heights = getHeights(rows);
    [table1, table2].forEach(function (x) { return x.style.display = 'none'; });
    rows.forEach(setHeight(heights));
    [table1, table2].forEach(function (x) { return x.style.display = ''; });
};

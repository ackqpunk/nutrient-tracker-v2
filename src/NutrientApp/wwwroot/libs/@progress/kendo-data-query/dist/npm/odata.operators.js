"use strict";
var utils_1 = require("./utils");
/**
 * @hidden
 */
var serializeSort = function (orderby) {
    var str = orderby
        .filter(function (sort) { return utils_1.isPresent(sort.dir); })
        .map(function (sort) {
        var order = sort.field.replace(/\./g, "/");
        return sort.dir === "desc" ? order + " desc" : order;
    }).join(",");
    return str ? "$orderby=" + str : str;
};
/**
 * @hidden
 */
var rules = function (key, state) { return ({
    "skip": "$skip=" + state.skip,
    "sort": serializeSort(state.sort || []),
    "take": "$top=" + state.take
}[key]); };
/**
 * Converts a [`State`]({% slug api_kendo-data-query_state_kendouiforangular %}) into an OData v4 compatible string.
 *
 * @param {State} state The state to be serialized.
 * @returns {string} The serialized state.
 */
exports.toODataString = function (state) { return (Object.keys(state)
    .map(function (x) { return rules(x, state); })
    .filter(utils_1.isNotNullOrEmptyString)
    .join('&')); };
"use strict";
var transducers_1 = require("../transducers");
;
var identity = transducers_1.map(function (x) { return x; });
/**
 * Applies the specified [`AggregateDescriptors`]({% slug api_kendo-data-query_aggregatedescriptor_kendouiforangular %}) to the data.
 *
 * Returns an [`AggregateResult`]({% slug api_kendo-data-query_aggregateresult_kendouiforangular %}) instance.
 *
 * @example
 * ```ts-no-run
 * const data = [
 *    { unitPrice: 23, unitsInStock: 21 },
 *    { unitPrice: 10, unitsInStock: 12 },
 *    { unitPrice: 20, unitsInStock: 33 }
 * ];
 *
 * const result = aggregateBy(data, [
 *   { aggregate: "sum", field: "unitPrice" },
 *   { aggregate: "sum", field: "unitsInStock" }
 * ]);
 *
 * //output:
 * // {
 * //     "unitPrice": { "sum": 53 },
 * //     "unitsInStock": { "sum": 66 }
 * // }
 * ```
 * @param {T[]} data The data on which the calculation will be executed.
 * @param {AggregateDescriptor[]} descriptors The aggregate operations to be executed.
 * @param {any} transformers For internal use.
 * @returns {AggregateResult} The aggregated result [See also]({% slug api_kendo-data-query_aggregateresult_kendouiforangular %}).
 */
exports.aggregateBy = function (data, descriptors, transformers) {
    if (descriptors === void 0) { descriptors = []; }
    if (transformers === void 0) { transformers = identity; }
    var initialValue = {};
    if (!descriptors.length) {
        return initialValue;
    }
    var result = transducers_1.exec(transformers(transducers_1.aggregatesCombinator(descriptors)), initialValue, data);
    return transducers_1.expandAggregates(result);
};

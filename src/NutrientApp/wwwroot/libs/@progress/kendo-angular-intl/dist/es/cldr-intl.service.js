import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { format as intlFormat, toString } from './intl-members';
import { formatDate, parseDate, dateFormatNames, firstDay, dateFormatString } from './intl-members';
import { parseNumber, formatNumber, numberSymbols } from './intl-members';
/**
 * The Internationalization service implemented by using
 * the CLDR Database via the `@telerik/kendo-intl` package.
 */
export var CldrIntlService = (function () {
    /**
     * Creates a new instance of the service with the ID of the specified locale.
     *
     * Note that the parts of the locale ID can be separated by either `_` (underscore)
     * or `-` (dash).
     *
     * @param localeId - The default locale ID.
     */
    function CldrIntlService(localeId) {
        // Angular locales use underscore, e.g. en_US
        // while IETF BCP-47 specifies a dash.
        // https://tools.ietf.org/html/bcp47
        this.localeId = localeId.replace(/_/g, '-');
    }
    /**
     * Formats a string with placeholders such as
     * `Total amount {0:c}`.
     *
     * @param format - The format string.
     * @param values - One or more values to output in the format string placeholders.
     * @return - The formatted string.
     */
    CldrIntlService.prototype.format = function (format) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return intlFormat(format, values, this.localeId);
    };
    /**
     * Converts an object to a string based on the specified format.
     *
     * @param value - The value to format.
     * @param format - The format to use.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The formatted object.
     */
    CldrIntlService.prototype.toString = function (value, format, localeId) {
        return toString(value, format, localeId || this.localeId);
    };
    /**
     * Converts a `Date` object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     *
     * @param value - The date to format.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The formatted date.
     */
    CldrIntlService.prototype.formatDate = function (value, format, localeId) {
        return formatDate(value, format, localeId || this.localeId);
    };
    /**
     * Returns the full format based on the `Date` object and the specified format.
     * If no format is provided, the default short date format is used.
     *
     * @param value - The date to format.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return - The full date format.
     */
    CldrIntlService.prototype.dateFormatString = function (value, format, localeId) {
        return dateFormatString(value, format, localeId || this.localeId);
    };
    /**
     * Converts a string to a `Date` object based on the specified format.
     *
     * @param value - The string to convert.
     * @param format - The format strings or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The parsed date.
     */
    CldrIntlService.prototype.parseDate = function (value, format, localeId) {
        return parseDate(value, format, localeId || this.localeId);
    };
    /**
     * Converts a string to a `Number`.
     *
     * @param value - The string to convert.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The parsed number.
     */
    CldrIntlService.prototype.parseNumber = function (value, format, localeId) {
        return parseNumber(value, localeId || this.localeId, format);
    };
    /**
     * Converts a `Number` to a string based on the specified format.
     *
     * @param value - The number to format.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The formatted number.
     */
    CldrIntlService.prototype.formatNumber = function (value, format, localeId) {
        return formatNumber(value, format, localeId || this.localeId);
    };
    /**
     * Returns the date names from the current locale based on the option.
     *
     * The available type values are:
     * - `days`
     * - `daysPeriods`
     * - `months`
     * - `quarters`
     * - `eras`
     *
     * @param options - Detailed configuration for the desired date format.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return - The day names from the current locale based on the option.
     */
    CldrIntlService.prototype.dateFormatNames = function (options, localeId) {
        return dateFormatNames(localeId || this.localeId, options);
    };
    /**
     * Returns the number symbols from the current locale based on the option.
     *
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return - The number symbols from the current locale.
     */
    CldrIntlService.prototype.numberSymbols = function (localeId) {
        return numberSymbols(localeId || this.localeId);
    };
    /**
     * Returns the first day index starting from Sunday.
     *
     * @param localeId - The locale ID. Defaults to the current locale ID.
     * @return - The index of the first day of the week (0 == Sunday).
     */
    CldrIntlService.prototype.firstDay = function (localeId) {
        return firstDay(localeId || this.localeId);
    };
    CldrIntlService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CldrIntlService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_ID,] },] },
    ]; };
    return CldrIntlService;
}());

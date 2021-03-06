'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaultData = {
    "en": {
        "name": "en",
        "identity": {
            "version": {
                "_number": "$Revision: 12418 $",
                "_cldrVersion": "29"
            },
            "language": "en"
        },
        "territory": "US",
        "numbers": {
            "symbols": {
                "decimal": ".",
                "group": ",",
                "list": ";",
                "percentSign": "%",
                "plusSign": "+",
                "minusSign": "-",
                "exponential": "E",
                "superscriptingExponent": "×",
                "perMille": "‰",
                "infinity": "∞",
                "nan": "NaN",
                "timeSeparator": ":"
            },
            "decimal": {
                "patterns": [
                    "n"
                ],
                "groupSize": [
                    3
                ]
            },
            "scientific": {
                "patterns": [
                    "nEn"
                ],
                "groupSize": []
            },
            "percent": {
                "patterns": [
                    "n%"
                ],
                "groupSize": [
                    3
                ]
            },
            "currency": {
                "patterns": [
                    "$n"
                ],
                "groupSize": [
                    3
                ],
                "unitPattern-count-one": "n $",
                "unitPattern-count-other": "n $"
            },
            "currencies": {
                "BGN": {
                    "displayName": "Bulgarian Lev",
                    "displayName-count-one": "Bulgarian lev",
                    "displayName-count-other": "Bulgarian leva",
                    "symbol": "BGN"
                },
                "EUR": {
                    "displayName": "Euro",
                    "displayName-count-one": "euro",
                    "displayName-count-other": "euros",
                    "symbol": "€",
                    "symbol-alt-narrow": "€"
                },
                "USD": {
                    "displayName": "US Dollar",
                    "displayName-count-one": "US dollar",
                    "displayName-count-other": "US dollars",
                    "symbol": "$",
                    "symbol-alt-narrow": "$"
                }
            },
            "localeCurrency": "USD"
        },
        "calendar": {
            "gmtFormat": "GMT{0}",
            "gmtZeroFormat": "GMT",
            "patterns": {
                "d": "M/d/y",
                "D": "EEEE, MMMM d, y",
                "m": "MMM d",
                "M": "MMMM d",
                "y": "MMM y",
                "Y": "MMMM y",
                "F": "EEEE, MMMM d, y h:mm:ss a",
                "g": "M/d/y h:mm a",
                "G": "M/d/y h:mm:ss a",
                "t": "h:mm a",
                "T": "h:mm:ss a",
                "s": "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                "u": "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
            },
            "dateTimeFormats": {
                "full": "{1} 'at' {0}",
                "long": "{1} 'at' {0}",
                "medium": "{1}, {0}",
                "short": "{1}, {0}",
                "availableFormats": {
                    "d": "d",
                    "E": "ccc",
                    "Ed": "d E",
                    "Ehm": "E h:mm a",
                    "EHm": "E HH:mm",
                    "Ehms": "E h:mm:ss a",
                    "EHms": "E HH:mm:ss",
                    "Gy": "y G",
                    "GyMMM": "MMM y G",
                    "GyMMMd": "MMM d, y G",
                    "GyMMMEd": "E, MMM d, y G",
                    "h": "h a",
                    "H": "HH",
                    "hm": "h:mm a",
                    "Hm": "HH:mm",
                    "hms": "h:mm:ss a",
                    "Hms": "HH:mm:ss",
                    "hmsv": "h:mm:ss a v",
                    "Hmsv": "HH:mm:ss v",
                    "hmv": "h:mm a v",
                    "Hmv": "HH:mm v",
                    "M": "L",
                    "Md": "M/d",
                    "MEd": "E, M/d",
                    "MMM": "LLL",
                    "MMMd": "MMM d",
                    "MMMEd": "E, MMM d",
                    "MMMMd": "MMMM d",
                    "MMMMW": "'week' W 'of' MMM",
                    "ms": "mm:ss",
                    "y": "y",
                    "yM": "M/y",
                    "yMd": "M/d/y",
                    "yMEd": "E, M/d/y",
                    "yMMM": "MMM y",
                    "yMMMd": "MMM d, y",
                    "yMMMEd": "E, MMM d, y",
                    "yMMMM": "MMMM y",
                    "yQQQ": "QQQ y",
                    "yQQQQ": "QQQQ y",
                    "yw": "'week' w 'of' y"
                },
                "appendItems": {
                    "Day": "{0} ({2}: {1})",
                    "Day-Of-Week": "{0} {1}",
                    "Era": "{0} {1}",
                    "Hour": "{0} ({2}: {1})",
                    "Minute": "{0} ({2}: {1})",
                    "Month": "{0} ({2}: {1})",
                    "Quarter": "{0} ({2}: {1})",
                    "Second": "{0} ({2}: {1})",
                    "Timezone": "{0} {1}",
                    "Week": "{0} ({2}: {1})",
                    "Year": "{0} {1}"
                },
                "intervalFormats": {
                    "intervalFormatFallback": "{0} – {1}",
                    "d": {
                        "d": "d – d"
                    },
                    "h": {
                        "a": "h a – h a",
                        "h": "h – h a"
                    },
                    "H": {
                        "H": "HH – HH"
                    },
                    "hm": {
                        "a": "h:mm a – h:mm a",
                        "h": "h:mm – h:mm a",
                        "m": "h:mm – h:mm a"
                    },
                    "Hm": {
                        "H": "HH:mm – HH:mm",
                        "m": "HH:mm – HH:mm"
                    },
                    "hmv": {
                        "a": "h:mm a – h:mm a v",
                        "h": "h:mm – h:mm a v",
                        "m": "h:mm – h:mm a v"
                    },
                    "Hmv": {
                        "H": "HH:mm – HH:mm v",
                        "m": "HH:mm – HH:mm v"
                    },
                    "hv": {
                        "a": "h a – h a v",
                        "h": "h – h a v"
                    },
                    "Hv": {
                        "H": "HH – HH v"
                    },
                    "M": {
                        "M": "M – M"
                    },
                    "Md": {
                        "d": "M/d – M/d",
                        "M": "M/d – M/d"
                    },
                    "MEd": {
                        "d": "E, M/d – E, M/d",
                        "M": "E, M/d – E, M/d"
                    },
                    "MMM": {
                        "M": "MMM – MMM"
                    },
                    "MMMd": {
                        "d": "MMM d – d",
                        "M": "MMM d – MMM d"
                    },
                    "MMMEd": {
                        "d": "E, MMM d – E, MMM d",
                        "M": "E, MMM d – E, MMM d"
                    },
                    "y": {
                        "y": "y – y"
                    },
                    "yM": {
                        "M": "M/y – M/y",
                        "y": "M/y – M/y"
                    },
                    "yMd": {
                        "d": "M/d/y – M/d/y",
                        "M": "M/d/y – M/d/y",
                        "y": "M/d/y – M/d/y"
                    },
                    "yMEd": {
                        "d": "E, M/d/y – E, M/d/y",
                        "M": "E, M/d/y – E, M/d/y",
                        "y": "E, M/d/y – E, M/d/y"
                    },
                    "yMMM": {
                        "M": "MMM – MMM y",
                        "y": "MMM y – MMM y"
                    },
                    "yMMMd": {
                        "d": "MMM d – d, y",
                        "M": "MMM d – MMM d, y",
                        "y": "MMM d, y – MMM d, y"
                    },
                    "yMMMEd": {
                        "d": "E, MMM d – E, MMM d, y",
                        "M": "E, MMM d – E, MMM d, y",
                        "y": "E, MMM d, y – E, MMM d, y"
                    },
                    "yMMMM": {
                        "M": "MMMM – MMMM y",
                        "y": "MMMM y – MMMM y"
                    }
                }
            },
            "timeFormats": {
                "full": "h:mm:ss a zzzz",
                "long": "h:mm:ss a z",
                "medium": "h:mm:ss a",
                "short": "h:mm a"
            },
            "dateFormats": {
                "full": "EEEE, MMMM d, y",
                "long": "MMMM d, y",
                "medium": "MMM d, y",
                "short": "M/d/yy"
            },
            "days": {
                "format": {
                    "abbreviated": [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    "narrow": [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    "short": [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    "wide": [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                },
                "stand-alone": {
                    "abbreviated": [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    "narrow": [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    "short": [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    "wide": [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                }
            },
            "months": {
                "format": {
                    "abbreviated": [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    "narrow": [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D"
                    ],
                    "wide": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                },
                "stand-alone": {
                    "abbreviated": [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    "narrow": [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D"
                    ],
                    "wide": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                }
            },
            "quarters": {
                "format": {
                    "abbreviated": [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    "narrow": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "wide": [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                },
                "stand-alone": {
                    "abbreviated": [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    "narrow": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "wide": [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                }
            },
            "dayPeriods": {
                "format": {
                    "abbreviated": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "in the morning",
                        "afternoon1": "in the afternoon",
                        "evening1": "in the evening",
                        "night1": "at night"
                    },
                    "narrow": {
                        "midnight": "mi",
                        "am": "a",
                        "am-alt-variant": "am",
                        "noon": "n",
                        "pm": "p",
                        "pm-alt-variant": "pm",
                        "morning1": "in the morning",
                        "afternoon1": "in the afternoon",
                        "evening1": "in the evening",
                        "night1": "at night"
                    },
                    "wide": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "in the morning",
                        "afternoon1": "in the afternoon",
                        "evening1": "in the evening",
                        "night1": "at night"
                    }
                },
                "stand-alone": {
                    "abbreviated": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "morning",
                        "afternoon1": "afternoon",
                        "evening1": "evening",
                        "night1": "night"
                    },
                    "narrow": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "morning",
                        "afternoon1": "afternoon",
                        "evening1": "evening",
                        "night1": "night"
                    },
                    "wide": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "morning",
                        "afternoon1": "afternoon",
                        "evening1": "evening",
                        "night1": "night"
                    }
                }
            },
            "eras": {
                "format": {
                    "wide": {
                        "0": "Before Christ",
                        "1": "Anno Domini",
                        "0-alt-variant": "Before Common Era",
                        "1-alt-variant": "Common Era"
                    },
                    "abbreviated": {
                        "0": "BC",
                        "1": "AD",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    },
                    "narrow": {
                        "0": "B",
                        "1": "A",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    }
                }
            }
        }
    },
    "supplemental": {
        "likelySubtags": {
            "en": "en-Latn-US"
        },
        "currencyData": {
            "region": {
                "US": [
                    {
                        "USD": {
                            "_from": "1792-01-01"
                        }
                    }
                ]
            }
        },
        "weekData": {
            "firstDay": {
                "US": "sun"
            }
        }
    }
};

//The error is represented by unique name and corresponding message
//The message can contain placeholders with index, e.g. {0}, {1}

var errorDetails = {
    "NoLocale": "Missing locale info for '{0}'",
    "NoCurrency": "Cannot determine currency information. Please load the locale currencies data.",
    "NoSupplementalCurrency": "Cannot determine currency. Please load the supplemental currencyData.",
    "NoCurrencyRegion": "No currency data for region '{0}'",
    "NoCurrencyDisplay": "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
    "NoGMTInfo": "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
    "NoWeekData": "Cannot determine locale first day of week. Please load the supplemental weekData.",
    "NoFirstDay": "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
    "NoValidCurrency": "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options."
};

var formatRegExp = /\{(\d+)}?\}/g;

var IntlError = function IntlError(ref) {
    var name = ref.name;
    var message = ref.message;

    if (!name || !message) {
        throw new Error("{ name: string, message: string } object is required!");
    }

    this.name = name;
    this.message = message;
};

IntlError.prototype.formatMessage = function formatMessage () {
        var values = [], len = arguments.length;
        while ( len-- ) values[ len ] = arguments[ len ];

    var flattenValues = flatten(values);

    var formattedMessage = this.message.replace(formatRegExp, function(match, index) {
        return flattenValues[parseInt(index, 10)];
    });

    return ((this.name) + ": " + formattedMessage);
};

IntlError.prototype.error = function error () {
        var values = [], len = arguments.length;
        while ( len-- ) values[ len ] = arguments[ len ];

    return new Error(this.formatMessage(values));
};

var flatten = function(arr) {
    return arr.reduce(function (a, b) { return a.concat(b); }, []);
};

var toIntlErrors = function(errors) {
    var predicate = function(prev, name) {
        prev[name] = new IntlError({ name: name, message: errors[name] });
        return prev;
    };

    return Object.keys(errors).reduce(predicate, {});
};

var errors = toIntlErrors(errorDetails);

function availableLocaleInfo(fullName, suffixes) {
    var parts = fullName.split("-");
    var language = parts[0];
    var script = parts[1];
    var territory = parts[2];

    return cldr[fullName] || (suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory]) || (suffixes.indexOf(script) !== -1 && cldr[language + "-" + script]) || cldr[language];
}

function localeFullName(language, suffixes) {
    var likelySubtags = cldr.supplemental.likelySubtags;

    for (var idx = 0; idx < suffixes.length; idx++) {
        var name = likelySubtags[language + "-" + suffixes[idx ]];
        if (name) {
            return name;
        }
    }

    if (likelySubtags[language]) {
        return likelySubtags[language];
    }
}

var cldr = defaultData;

function getLocaleInfo(locale) {
    var info;
    if (typeof locale === "string") {
        info = localeInfo(locale);
    } else {
        info = locale;
    }
    return info;
}

function localeInfo(locale) {
    if (cldr[locale]) {
        return cldr[locale];
    }

    var likelySubtags = cldr.supplemental.likelySubtags;
    if (likelySubtags) {
        var parts = locale.split("-");
        var language = parts[0];
        var suffixes = parts.slice(1);
        var fullName = localeFullName(language, suffixes);
        var info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
        if (info) {
            return info;
        }
    }

    throw errors.NoLocale.error(locale);
}

function territoryFromName(name) {
    var parts = name.split("-");
    var length = parts.length;

    if (length > 1) {
        var territory = parts[ length - 1 ];
        return territory.toUpperCase();
    }
}

function localeTerritory(info) {
    if (info.territory) {
        return info.territory;
    }

    var likelySubtags = cldr.supplemental.likelySubtags;
    var name = info.name;
    var territory;

    if (info.identity && info.identity.territory) {
        territory = info.identity.territory;
    } else if (likelySubtags && likelySubtags[name]) {
        territory = territoryFromName(likelySubtags[name]);
    } else {
        territory = territoryFromName(name);
    }
    info.territory = territory;

    return territory;
}

var parseRangeDate = function(value) {
    var parts = value.split('-');
    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var day = parseInt(parts[2], 10);

    return new Date(year, month, day);
};

var NoCurrency = errors.NoCurrency;
var NoCurrencyDisplay = errors.NoCurrencyDisplay;
var NoSupplementalCurrency = errors.NoSupplementalCurrency;
var NoCurrencyRegion = errors.NoCurrencyRegion;
var NoValidCurrency = errors.NoValidCurrency;

var DEFAULT_CURRENCY_FRACTIONS = 2;
var SYMBOL = "symbol";
var INVALID_CURRENCY_CODE = 'XXX';

function getCurrencyInfo(locale, currency) {
    var info = getLocaleInfo(locale);
    var currencies = info.numbers.currencies;
    if (!currencies) {
        throw NoCurrency.error();
    }

    var currencyDisplayInfo = currencies[currency];

    if (!currencyDisplayInfo) {
        throw NoCurrencyDisplay.error();
    }

    return currencyDisplayInfo;
}

function lengthComparer(a, b) {
    return b.length - a.length;
}

function regionCurrency(regionCurrencies) {
    var latestValidUntil, latestValidUntilRange;
    var latestStillValid, latestStillValidDate;

    for (var idx = 0; idx < regionCurrencies.length; idx++) {
        var currency = regionCurrencies[idx];
        var code = Object.keys(currency)[0];
        var info = currency[code];
        if (code !== INVALID_CURRENCY_CODE && info._tender !== 'false' && info._from) {
            if (!info._to) {
                var stillValidDate = parseRangeDate(info._from);
                if (!latestStillValidDate || latestStillValidDate < stillValidDate) {
                    latestStillValid = code;
                    latestStillValidDate = stillValidDate;
                }
            } else if (!latestStillValid) {
                var validFrom = parseRangeDate(info._from);
                var validTo = parseRangeDate(info._to);
                if (!latestValidUntilRange || latestValidUntilRange.to < validTo || latestValidUntilRange.from < validFrom) {
                    latestValidUntil = code;
                    latestValidUntilRange = {
                        from: validFrom,
                        to: validTo
                    };
                }
            }
        }
    }

    return latestStillValid || latestValidUntil;
}

function currencyDisplays(locale, currency) {
    var currencyInfo = getCurrencyInfo(locale, currency);
    if (!currencyInfo.displays) {
        var displays = [ currency ];
        for (var field in currencyInfo) {
            displays.push(currencyInfo[field]);
        }
        displays.sort(lengthComparer);
        currencyInfo.displays = displays;
    }

    return currencyInfo.displays;
}

function currencyDisplay(locale, options) {
    var value = options.value;
    var currency = options.currency;
    var currencyDisplay = options.currencyDisplay; if ( currencyDisplay === void 0 ) currencyDisplay = SYMBOL;

    if (currencyDisplay === "code") {
        return currency;
    }

    var currencyInfo = getCurrencyInfo(locale, currency);
    var result;

    if (currencyDisplay === SYMBOL) {
        result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL];
    } else {
        if (typeof value === undefined || value !== 1) {
            result = currencyInfo["displayName-count-other"];
        } else {
            result = currencyInfo["displayName-count-one"];
        }
    }

    return result;
}

function currencyFractionOptions(code) {
    var minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
    var maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;

    var fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];

    if (fractions && fractions._digits) {
        maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function territoryCurrencyCode(territory) {
    var currencyData = cldr.supplemental.currencyData;
    if (!currencyData) {
        throw NoSupplementalCurrency.error();
    }

    var regionCurrencies = currencyData.region[territory];

    if (!regionCurrencies) {
        throw NoCurrencyRegion.error(territory);
    }

    var currencyCode = regionCurrency(regionCurrencies);

    return currencyCode;
}

function localeCurrency(locale, throwIfNoValid) {
    var info = getLocaleInfo(locale);
    var numbers = info.numbers;

    if (!numbers.localeCurrency) {
        var currency = territoryCurrencyCode(localeTerritory(info));

        if (!currency && throwIfNoValid) {
            throw NoValidCurrency.error(info.name);
        }

        numbers.localeCurrency = currency;
    }

    return numbers.localeCurrency;
}

var LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
var LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";
var GROUP_SEPARATOR = ",";
var LIST_SEPARATOR = ";";
var DECIMAL_SEPARATOR = ".";

var patternRegExp = /([ #,0. ]+)/g;
var cldrCurrencyRegExp = /¤/g;

function getPatterns(pattern) {
    patternRegExp.lastIndex = 0;

    return pattern.replace(cldrCurrencyRegExp, "$").replace(patternRegExp, "n").split(";");
}

function getGroupSize(pattern) {
    patternRegExp.lastIndex = 0;

    var numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[0])[0].split(DECIMAL_SEPARATOR);
    var integer = numberPatterns[0];

    var groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function(group) {
        return group.length;
    }).reverse();

    return groupSize;
}

function loadCurrencyUnitPatterns(currencyInfo, currencyFormats) {
    for (var field in currencyFormats) {
        if (field.startsWith("unitPattern")) {
            currencyInfo[field] = currencyFormats[field].replace("{0}", "n").replace("{1}", "$");
        }
    }
}

function loadNumbersInfo(locale, info) {
    var localeInfo$$1 = cldr[locale];
    var numbers = localeInfo$$1.numbers = localeInfo$$1.numbers || {};
    numbers.symbols = numbers.symbols || {};
    for (var field in info) {
        if (field === LATIN_NUMBER_SYMBOLS) {
            Object.assign(numbers.symbols, info[field]);
        } else if (field.includes(LATIN_NUMBER_FORMATS)) {
            var style = field.substr(0, field.indexOf(LATIN_NUMBER_FORMATS));
            var pattern = info[field].standard;
            numbers[style] = {
                patterns: getPatterns(pattern)
            };
            if (style === "currency") {
                numbers[style].groupSize = getGroupSize((info["decimal" + LATIN_NUMBER_FORMATS] || info[field]).standard);
                loadCurrencyUnitPatterns(numbers[style], info[field]);
            } else {
                numbers[style].groupSize = getGroupSize(pattern);
            }
        } else if (field === "currencies") {
            numbers.currencies = info[field];
            var territory = localeTerritory(localeInfo$$1);
            if (territory && cldr.supplemental.currencyData) {
                numbers.localeCurrency = territoryCurrencyCode(territory);
            }
        }
    }
}

var predefinedDatePatterns = {
    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
};
var datePatterns = {
    d: [ [ "dateTimeFormats", "availableFormats", "yMd" ] ],
    D: [ [ "dateFormats", "full" ] ],
    m: [ [ "dateTimeFormats", "availableFormats", "MMMd" ] ],
    M: [ [ "dateTimeFormats", "availableFormats", "MMMMd" ] ],
    y: [ [ "dateTimeFormats", "availableFormats", "yMMM" ] ],
    Y: [ [ "dateTimeFormats", "availableFormats", "yMMMM" ] ],
    F: [ [ "dateFormats", "full" ], [ "timeFormats", "medium" ] ],
    g: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "short" ] ],
    G: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "medium" ] ],
    t: [ [ "timeFormats", "short" ] ],
    T: [ [ "timeFormats", "medium" ] ]
};

function toArray(obj) {
    var result = [];
    var names = Object.getOwnPropertyNames(obj);
    for (var idx = 0; idx < names.length; idx++) {
        var value = obj[names[idx]];
        result.push(value);
    }
    return result;
}

function getCalendarNames(info, isObj) {
    var result = {};
    for (var formatType in info) {
        var names = result[formatType] = {};
        for (var format in info[formatType]) {
            var formats = info[formatType][format];
            names[format] = isObj ? formats : toArray(formats);
        }
    }
    return result;
}

function getEraNames(eras) {
    var result = {};
    var format = result.format = {};
    var eraNameMap = {
        eraAbbr: "abbreviated",
        eraNames: "wide",
        eraNarrow: "narrow"
    };

    for (var eraFormatName in eras) {
        var formatName = eraNameMap[eraFormatName];
        format[formatName] = eras[eraFormatName];
    }

    return result;
}

function loadCalendarNames(locale, calendar) {
    var localeCalendar = cldr[locale].calendar;
    localeCalendar.days = getCalendarNames(calendar.days);
    localeCalendar.months = getCalendarNames(calendar.months);
    localeCalendar.quarters = getCalendarNames(calendar.quarters);
    localeCalendar.dayPeriods = getCalendarNames(calendar.dayPeriods, true);

    localeCalendar.eras = getEraNames(calendar.eras);
}

function getPredefinedFormat(paths, calendar) {
    var result = [];

    for (var pathIdx = 0; pathIdx < paths.length; pathIdx++) {
        var fields = paths[ pathIdx ];
        var pattern = calendar;
        for (var idx = 0; idx < fields.length; idx++) {
            pattern = pattern[fields[idx]];
        }
        result.push(pattern);
    }

    return result.join(" ");
}

function loadCalendarPatterns(locale, calendar) {
    var cldrCalendar = cldr[locale].calendar;
    var patterns = cldrCalendar.patterns = {};
    for (var pattern in datePatterns) {
        patterns[pattern] = getPredefinedFormat(datePatterns[pattern], calendar);
    }

    for (var pattern$1 in predefinedDatePatterns) {
        patterns[pattern$1] = predefinedDatePatterns[pattern$1];
    }

    cldrCalendar.dateTimeFormats = calendar.dateTimeFormats;
    cldrCalendar.timeFormats = calendar.timeFormats;
    cldrCalendar.dateFormats = calendar.dateFormats;
}


function loadCalendarInfo(locale, info) {
    var calendar = cldr[locale].calendar = cldr[locale].calendar || {};
    for (var field in info) {
        if (field === "timeZoneNames") {
            calendar.gmtFormat = info[field].gmtFormat;
            calendar.gmtZeroFormat = info[field].gmtZeroFormat;
        } else if (field === "calendars" && info[field].gregorian) {
            loadCalendarPatterns(locale, info[field].gregorian);
            loadCalendarNames(locale, info[field].gregorian);
        }
    }
}

function loadLocale(locale, info) {
    for (var field in info) {
        if (field === "numbers") {
            loadNumbersInfo(locale, info[field]);
        } else if (field === "dates") {
            loadCalendarInfo(locale, info[field]);
        }
    }
}

function load() {
    var arguments$1 = arguments;

    var length = arguments.length;
    for (var idx = 0; idx < length; idx++) {
        var entry = arguments$1[idx];
        if (entry.main) {
            var locale = Object.keys(entry.main)[0];
            var info = entry.main[locale];
            var localeInfo$$1 = cldr[locale] = cldr[locale] || {};

            localeInfo$$1.name = localeInfo$$1.name || locale;
            localeInfo$$1.identity = localeInfo$$1.identity || info.identity;

            localeTerritory(localeInfo$$1);
            loadLocale(locale, info);
        } else if (entry.supplemental) {
            if (entry.supplemental.weekData) {
                cldr.supplemental.weekData = {
                    firstDay: entry.supplemental.weekData.firstDay
                };
            } else {
                Object.assign(cldr.supplemental, entry.supplemental);
            }
        }
    }
}

function lowerArray(arr) {
    var result = [];
    for (var idx = 0; idx < arr.length; idx++) {
        result.push(arr[idx].toLowerCase());
    }
    return result;
}

function lowerObject(obj) {
    var result = {};
    for (var field in obj) {
        result[field] = obj[field].toLowerCase();
    }
    return result;
}

function cloneLower(obj) {
    var result = Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
    return result;
}

function dateFormatNames(locale, options) {
    var type = options.type;
    var nameType = options.nameType;
    var standAlone = options.standAlone;
    var lower = options.lower;
    var info = getLocaleInfo(locale);
    var formatType = standAlone ? "stand-alone" : "format";
    var lowerNameType = (lower ? "lower-" : "") + nameType;
    var formatNames = info.calendar[type][formatType];
    var result = formatNames[lowerNameType];
    if (!result && lower) {
        result = formatNames[lowerNameType] = cloneLower(formatNames[nameType]);
    }
    return result;
}

var NoWeekData = errors.NoWeekData;
var NoFirstDay = errors.NoFirstDay;

var DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

function firstDay(locale) {
    var weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData.error();
    }

    var info = getLocaleInfo(locale);
    var firstDay = weekData.firstDay[localeTerritory(info)];

    if (!firstDay) {
        throw NoFirstDay.error();
    }

    return DAYS.indexOf(firstDay);
}

function numberSymbols(locale) {
    var info = getLocaleInfo(locale);

    return info.numbers.symbols;
}

function formatCurrencySymbol(info, options) {
    if ( options === void 0 ) options = {};

    if (!options.currency) {
        options.currency = localeCurrency(info, true);
    }

    var display = currencyDisplay(info, options);

    return display;
}

function groupInteger(number, start, end, options, info) {
    var symbols = info.numbers.symbols;
    var decimalIndex = number.indexOf(symbols.decimal);
    var groupSizes = options.groupSize.slice();
    var groupSize = groupSizes.shift();

    var integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;

    var integer = number.substring(start, integerEnd);
    var result = number;
    var integerLength = integer.length;

    if (integerLength >= groupSize) {
        var idx = integerLength;
        var parts = [];

        while (idx > -1) {
            var value = integer.substring(idx - groupSize, idx);
            if (value) {
                parts.push(value);
            }
            idx -= groupSize;
            var newGroupSize = groupSizes.shift();
            groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

            if (groupSize === 0) {
                parts.push(integer.substring(0, idx));
                break;
            }
        }

        integer = parts.reverse().join(symbols.group);
        result = number.substring(0, start) + integer + number.substring(integerEnd);
    }

    return result;
}

function pad(number, digits, right) {
    if ( digits === void 0 ) digits = 2;
    if ( right === void 0 ) right = false;

    var count = digits - String(number).length;
    var result = number;

    if (count > 0) {
        var padString = new Array(count + 1).join("0");
        result = right ? number + padString : padString + number;
    }

    return result;
}

function round(value, precision) {
    var result = value;
    var decimals = precision || 0;

    result = result.toString().split('e');
    result = Math.round(Number(result[0] + 'e' + (result[1] ? (Number(result[1]) + decimals) : decimals)));

    result = result.toString().split('e');
    result = Number(result[0] + 'e' + (result[1] ? (Number(result[1]) - decimals) : -decimals));

    return result.toFixed(decimals);
}

var DEFAULT_DECIMAL_ROUNDING = 3;
var DEFAULT_PERCENT_ROUNDING = 0;

var trailingZeroRegex = /0+$/;
var DECIMAL_PLACEHOLDER = "n";
var CURRENCY = "currency";
var PERCENT = "percent";
var EMPTY = "";

function fractionOptions(options) {
    var minimumFractionDigits = options.minimumFractionDigits;
    var maximumFractionDigits = options.maximumFractionDigits;
    var style = options.style;
    var isCurrency = style === CURRENCY;
    var currencyFractions;
    if (isCurrency) {
        currencyFractions = currencyFractionOptions(options.currency);
    }

    if (minimumFractionDigits === undefined) {
        minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
    }

    if (maximumFractionDigits === undefined) {
        if (style === PERCENT) {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
        } else if (isCurrency) {
            maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
        } else {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
        }
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function applyPattern(value, pattern, symbol) {
    var result = EMPTY;
    for (var idx = 0, length = pattern.length; idx < length; idx++) {
        var ch = pattern.charAt(idx);

        if (ch === DECIMAL_PLACEHOLDER) {
            result += value;
        } else if (ch === "$" || ch === "%") {
            result += symbol;
        } else {
            result += ch;
        }
    }
    return result;
}

function currencyUnitPattern(info, value) {
    var currencyInfo = info.numbers.currency;
    var pattern = value !== 1 ? currencyInfo["unitPattern-count-other"] : currencyInfo["unitPattern-count-one"];
    if (value < 0) {
        pattern = pattern.replace("n", "-n");
    }

    return pattern;
}


function standardNumberFormat(number, options, info) {
    var style = options.style;

    //return number in exponential format
    if (style === "scientific") {
        return options.minimumFractionDigits !== undefined ? number.toExponential(options.minimumFractionDigits) : number.toExponential();
    }

    var symbols = info.numbers.symbols;
    var value = number;
    var symbol;

    if (style === CURRENCY) {
        options.value = value;
        symbol = formatCurrencySymbol(info, options);
    }

    if (style === PERCENT) {
        value *= 100;
        symbol = symbols.percentSign;
    }

    var ref = fractionOptions(options);
    var minimumFractionDigits = ref.minimumFractionDigits;
    var maximumFractionDigits = ref.maximumFractionDigits;

    value = round(value, maximumFractionDigits);

    var negative = value < 0;

    var parts = value.split(".");

    var integer = parts[0];
    var fraction = pad(parts[1] ? parts[1].replace(trailingZeroRegex, EMPTY) : EMPTY, minimumFractionDigits, true);

    //exclude "-" if number is negative.
    if (negative) {
        integer = integer.substring(1);
    }

    if (options.minimumIntegerDigits) {
        integer = pad(integer, options.minimumIntegerDigits);
    }

    var formattedValue = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, info) : integer;

    if (fraction) {
        formattedValue += symbols.decimal + fraction;
    }

    var pattern;

    if (style === CURRENCY && options.currencyDisplay === "name") {
        pattern = currencyUnitPattern(info, number);
    } else {
        var patterns = options.patterns;
        pattern = negative ? patterns[1] || ("-" + patterns[0]) : patterns[0];
    }

    if (pattern === DECIMAL_PLACEHOLDER && !negative) {
        return formattedValue;
    }

    var result = applyPattern(formattedValue, pattern, symbol);

    return result;
}

var CURRENCY_SYMBOL = "$";
var PERCENT_SYMBOL = "%";
var PLACEHOLDER = "??";
var CURRENCY$1 = "currency";
var PERCENT$1 = "percent";
var POINT = ".";
var COMMA = ",";
var SHARP = "#";
var ZERO = "0";
var EMPTY$1 = "";

var literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
var commaRegExp = /\,/g;

function setFormatLiterals(formatOptions) {
    var format = formatOptions.format;
    if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
        var literals = formatOptions.literals = [];
        formatOptions.format = format.replace(literalRegExp, function(match) {
            var quoteChar = match.charAt(0).replace("\\", "");
            var literal = match.slice(1).replace(quoteChar, "");

            literals.push(literal);

            return PLACEHOLDER;
        });
    }
}

function roundNumber(formatOptions) {
    var number = formatOptions.number;
    var format = formatOptions.format;
    var decimalIndex = format.indexOf(POINT);

    if (decimalIndex !== -1) {
        var zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
        var sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
        var hasZero = zeroIndex > -1;
        var hasSharp = sharpIndex > -1;
        var fraction = number.toString().split("e");

        if (fraction[1]) {
            fraction = round(number, Math.abs(fraction[1]));
        } else {
            fraction = fraction[0];
        }
        fraction = fraction.split(POINT)[1] || EMPTY$1;

        var idx = fraction.length;

        if (!hasZero && !hasSharp) {
            formatOptions.format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
            decimalIndex = -1;
            idx = 0;
        } else if (hasZero && zeroIndex > sharpIndex) {
            idx = zeroIndex;
        } else if (sharpIndex > zeroIndex) {
            if (hasSharp && idx > sharpIndex) {
                idx = sharpIndex;
            } else if (hasZero && idx < zeroIndex) {
                idx = zeroIndex;
            }
        }

        if (idx > -1) {
            number = round(number, idx);
        }
    } else {
        number = round(number);
    }

    if (formatOptions.negative && (number * -1) >= 0) {
        formatOptions.negative = false;
    }

    formatOptions.number = number;
    formatOptions.decimalIndex = decimalIndex;
}

function isConstantFormat(format) {
    return format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1;
}

function setValueSpecificFormat(formatOptions) {
    var number = formatOptions.number;
    var format = formatOptions.format;
    format = format.split(";");
    if (formatOptions.negative && format[1]) {
        format = format[1];
        formatOptions.hasNegativeFormat = true;
    } else if (number === 0) {
        var zeroFormat = format[2];
        format = zeroFormat || format[0];
        if (zeroFormat && isConstantFormat(zeroFormat)) {
            formatOptions.constant = zeroFormat;
        }
    } else {
        format = format[0];
    }

    formatOptions.format = format;
}

function setStyleOptions(formatOptions, info) {
    var format = formatOptions.format;

    //multiply number if the format has percent
    if (format.indexOf(PERCENT_SYMBOL) !== -1) {
        formatOptions.style = PERCENT$1;
        formatOptions.symbol = info.numbers.symbols.percentSign;
        formatOptions.number *= 100;
    }

    if (format.indexOf(CURRENCY_SYMBOL) !== -1) {
        formatOptions.style = CURRENCY$1;
        formatOptions.symbol = formatCurrencySymbol(info);
    }
}

function setGroupOptions(formatOptions) {
    formatOptions.hasGroup = formatOptions.format.indexOf(COMMA) > -1;
    if (formatOptions.hasGroup) {
        formatOptions.format = formatOptions.format.replace(commaRegExp, EMPTY$1);
    }
}

function placeholderIndex(index1, index2, start) {
    var index;
    if (index1 === -1 && index2 !== -1) {
        index = index2;
    } else if (index1 !== -1 && index2 === -1) {
        index = index1;
    } else {
        index = start ? Math.min(index1, index2) : Math.max(index1, index2);
    }
    return index;
}

function setPlaceholderIndices(formatOptions) {
    var format = formatOptions.format;
    var sharpIndex = format.indexOf(SHARP);
    var zeroIndex = format.indexOf(ZERO);

    var start = placeholderIndex(sharpIndex, zeroIndex, true);

    sharpIndex = format.lastIndexOf(SHARP);
    zeroIndex = format.lastIndexOf(ZERO);

    var end = placeholderIndex(sharpIndex, zeroIndex);

    if (start === format.length) {
        end = start;
    }

    formatOptions.start = start;
    formatOptions.end = end;
    formatOptions.lastZeroIndex = zeroIndex;
}

function replaceStyleSymbols(number, style, symbol) {
    var result = number;
    if (style === CURRENCY$1 || style === PERCENT$1) {
        result = EMPTY$1;
        for (var idx = 0, length = number.length; idx < length; idx++) {
            var ch = number.charAt(idx);
            result += (ch === CURRENCY_SYMBOL || ch === PERCENT_SYMBOL) ? symbol : ch;
        }
    }
    return result;
}

function replaceLiterals(number, literals) {
    var result = number;
    if (literals) {
        var length = literals.length;
        for (var idx = 0; idx < length; idx++) {
            result = result.replace(PLACEHOLDER, literals[idx]);
        }
    }
    return result;
}

function replacePlaceHolders(formatOptions, info) {
    var start = formatOptions.start;
    var end = formatOptions.end;
    var negative = formatOptions.negative;
    var format = formatOptions.format;
    var decimalIndex = formatOptions.decimalIndex;
    var lastZeroIndex = formatOptions.lastZeroIndex;
    var hasNegativeFormat = formatOptions.hasNegativeFormat;
    var hasGroup = formatOptions.hasGroup;
    var number = formatOptions.number;
    var value = number.toString().split(POINT);
    var length = format.length;
    var integer = value[0];
    var fraction = value[1] || EMPTY$1;
    var integerLength = integer.length;
    var replacement = EMPTY$1;

    number = format.substring(0, start);

    if (negative && !hasNegativeFormat) {
        number += "-";
    }

    for (var idx = start; idx < length; idx++) {
        var ch = format.charAt(idx);

        if (decimalIndex === -1) {
            if (end - idx < integerLength) {

                number += integer;
                break;
            }
        } else {
            if (lastZeroIndex !== -1 && lastZeroIndex < idx) {
                replacement = EMPTY$1;
            }

            if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
                number += integer;
                idx = decimalIndex;
            }

            if (decimalIndex === idx) {
                number += (fraction ? info.numbers.symbols.decimal : EMPTY$1) + fraction;
                idx += end - decimalIndex + 1;
                continue;
            }
        }

        if (ch === ZERO) {
            number += ch;
            replacement = ch;
        } else if (ch === SHARP) {
            number += replacement;
        }
    }

    if (hasGroup) {
        number = groupInteger(number, start + (negative ? 1 : 0), Math.max(end, (integerLength + start)), info.numbers.decimal, info);
    }

    if (end >= start) {
        number += format.substring(end + 1);
    }

    return number;
}

function applyCustomFormat(formatOptions, info) {
    var number = formatOptions.number;
    if (formatOptions.start !== -1) {
        number = replacePlaceHolders(formatOptions, info);
        number = replaceStyleSymbols(number, formatOptions.style, formatOptions.symbol);
        number = replaceLiterals(number, formatOptions.literals);
    }

    return number;
}

function customNumberFormat(number, format, info) {
    var formatOptions = {
        negative: number < 0,
        number: Math.abs(number),
        format: format
    };

    setValueSpecificFormat(formatOptions);

    if (formatOptions.constant) {
        return formatOptions.constant;
    }

    setFormatLiterals(formatOptions);
    setStyleOptions(formatOptions, info);
    setGroupOptions(formatOptions);
    roundNumber(formatOptions);
    setPlaceholderIndices(formatOptions);

    return applyCustomFormat(formatOptions, info);
}

var standardFormatRegExp = /^(n|c|p|e)(\d*)$/i;

function standardFormatOptions(format) {
    var formatAndPrecision = standardFormatRegExp.exec(format);

    if (formatAndPrecision) {
        var options = {
            style: "decimal"
        };

        var style = formatAndPrecision[1].toLowerCase();

        if (style === "c") {
            options.style = "currency";
        }

        if (style === "p") {
            options.style = "percent";
        }

        if (style === "e") {
            options.style = "scientific";
        }

        if (formatAndPrecision[2]) {
            options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
        }

        return options;
    }
}

function getFormatOptions(format) {
    var formatOptions;
    if (typeof format === "string") {
        formatOptions = standardFormatOptions(format);
    } else {
        formatOptions = format;
    }

    return formatOptions;
}

function formatNumber(number, format, locale) {
    if ( format === void 0 ) format = "n";
    if ( locale === void 0 ) locale = "en";

    if (number === undefined) {
        return "";
    }

    if (!isFinite(number)) {
        return number;
    }

    var info = localeInfo(locale);
    var formatOptions = getFormatOptions(format);

    var result;
    if (formatOptions) {
        var style = (formatOptions || {}).style || "decimal";
        result = standardNumberFormat(number, Object.assign({}, info.numbers[style], formatOptions), info);
    } else {
        result = customNumberFormat(number, format, info);
    }

    return result;
}

var exponentRegExp = /[eE][\-+]?[0-9]+/;
var nonBreakingSpaceRegExp = /\u00A0/g;

function cleanCurrencyNumber(value, info, format) {
    var isCurrency = format.style === "currency";
    var number = value;
    var negative;

    var currency = format.currency || localeCurrency(info, isCurrency);

    if (currency) {
        var displays = currencyDisplays(info, currency);
        for (var idx = 0; idx < displays.length; idx++) {
            var display = displays[idx];
            if (number.includes(display)) {
                number = number.replace(display, "");
                isCurrency = true;
                break;
            }
        }

        if (isCurrency) {
            var patterns = info.numbers.currency.patterns;
            if (patterns.length > 1) {
                var parts = (patterns[1] || "").replace("$", "").split("n");
                if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) {
                    number = number.replace(parts[0], "").replace(parts[1], "");
                    negative = true;
                }
            }
        }
    }

    return {
        number: number,
        negative: negative
    };
}

function parseNumber(value, locale, format) {
    if ( locale === void 0 ) locale = "en";
    if ( format === void 0 ) format = {};

    if (!value && value !== 0) {
        return null;
    }

    if (typeof value === "number") {
        return value;
    }

    var info = localeInfo(locale);
    var symbols = info.numbers.symbols;

    var number = value.toString();
    var isPercent;

    if (exponentRegExp.test(number)) {
        number = parseFloat(number.replace(symbols.decimal, "."));
        return isNaN(number) ? null : number;
    }

    var negativeSignIndex = number.indexOf("-");
    if (negativeSignIndex > 0) {
        return null;
    }

    var isNegative = negativeSignIndex > -1;
    var ref = cleanCurrencyNumber(number, info, format);
    var negativeCurrency = ref.negative;
    var newNumber = ref.number;

    number = newNumber;
    isNegative = negativeCurrency !== undefined ? negativeCurrency : isNegative;

    if (format.style === "percent" || number.indexOf(symbols.percentSign) > -1) {
        number = number.replace(symbols.percentSign, "");
        isPercent = true;
    }

    number = number.replace("-", "")
          .replace(nonBreakingSpaceRegExp, " ")
          .split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join("")
          .replace(symbols.decimal, ".");

    number = parseFloat(number);

    if (isNaN(number)) {
        number = null;
    } else if (isNegative) {
        number *= -1;
    }

    if (number && isPercent) {
        number /= 100;
    }

    return number;
}

var formatRegExp$1 = /\{(\d+)}/g;

function formatString(format) {
    var values = arguments;

    return format.replace(formatRegExp$1, function (match, index) {
        var value = values[parseInt(index, 10) + 1];

        return value;
    });
}

var REMOVAL_PENALTY = 120;
var ADDITION_PENALTY = 20;
var LENGHT_DELTA = [ 2, 1, 5, 3, 4 ];
var LONG_LESS_PENALTY_DELTA = -2;
var SHORT_LESS_PENALTY_DELTA = -1;
var SHORT_MORE_PENALTY_DELTA = 1;
var LONG_MORE_PENALTY_DELTA = 2;

var PENALTIES = {};
PENALTIES[LONG_LESS_PENALTY_DELTA] = 8;
PENALTIES[SHORT_LESS_PENALTY_DELTA] = 6;
PENALTIES[LONG_MORE_PENALTY_DELTA] = 6;
PENALTIES[SHORT_MORE_PENALTY_DELTA] = 3;

var VALUE_FORMAT_LENGTH = {
    numeric: 1,
    "2-digit": 2,
    short: 3,
    long: 4,
    narrow: 5
};

var TIME_SPECIFIERS_REGEX = /[hHmsSzZoOvVxX]/;

function getHourSpecifier(options) {
    return options.hour12 ? "h" : "H";
}

var DATE_OPTIONS_MAP = [ {
    key: "era",
    specifier: "G"
}, {
    key: "year",
    specifier: "y"
}, {
    key: "month",
    specifier: "M"
}, {
    key: "day",
    specifier: "d"
}, {
    key: "weekday",
    specifier: "E"
}, {
    key: "hour",
    getSpecifier: getHourSpecifier
}, {
    key: "minute",
    specifier: "m"
}, {
    key: "second",
    specifier: "s"
}, {
    key: "timeZoneName",
    specifier: "z"
} ];

var specifiersRegex = {};
var resolvedFormats = {};

function getSpecifierRegex(specifier) {
    if (!specifiersRegex[specifier]) {
        specifiersRegex[specifier] = new RegExp(specifier + "+");
    }
    return specifiersRegex[specifier];
}

function skeletonSpecifiers(skeleton) {
    var result = [];
    var current = skeleton.charAt(0);
    var specifier = current;
    for (var idx = 1; idx < skeleton.length; idx++) {
        var character = skeleton.charAt(idx);
        if (character === specifier) {
            current += character;
        } else {
            result.push(current);
            current = specifier = character;
        }
    }

    result.push(current);

    return result;
}

function findBestMatch(specifiers, availableFormats) {
    var specifiersLength = specifiers.length;
    var maxScore = -Number.MAX_VALUE;
    var bestMatches, result;
    for (var format in availableFormats) {
        var matches = [];
        var currentFormat = format.replace("v", "z");
        var score = 0;
        for (var idx = 0; idx < specifiersLength; idx++) {
            var specifier = specifiers[idx];
            var specifierRegex = getSpecifierRegex(specifier[0]);
            var match = (specifierRegex.exec(currentFormat) || [])[0];

            if (!match) {
                score -= REMOVAL_PENALTY;
            } else {
                currentFormat = currentFormat.replace(match, "");
                if (match.length !== specifier.length) {
                    var delta = Math.max(Math.min(LENGHT_DELTA[match.length] - LENGHT_DELTA[specifier.length], 2), -2);
                    score -= PENALTIES[delta];
                }
            }

            matches.push(match);

            if (score < maxScore) {
                break;
            }
        }

        if (currentFormat.length) {
            score -= skeletonSpecifiers(currentFormat).length * ADDITION_PENALTY;
        }

        if (score > maxScore) {
            maxScore = score;
            bestMatches = matches;
            result = availableFormats[format];
        }
    }

    result = result.replace("v", "z");
    //need to check for standalone specifiers if only one specifier
    for (var idx$1 = 0; idx$1 < specifiersLength; idx$1++) {
        if (bestMatches[idx$1] && bestMatches[idx$1] !== specifiers[idx$1]) {
            result = result.replace(getSpecifierRegex(bestMatches[idx$1][0]), specifiers[idx$1]);
        }
    }


    return result;
}

function cacheFormat(skeleton, format, locale) {
    if (!resolvedFormats[locale]) {
        resolvedFormats[locale] = {};
    }
    resolvedFormats[locale][skeleton] = format;
}


function skeletonFormat(skeleton, info) {
    var availableFormats = info.calendar.dateTimeFormats.availableFormats;
    if (availableFormats[skeleton]) {
        return availableFormats[skeleton];
    }
    if (resolvedFormats[info.name] && resolvedFormats[info.name][skeleton]) {
        return resolvedFormats[info.name][skeleton];
    }
    var timeStartIndex = skeleton.search(TIME_SPECIFIERS_REGEX);
    var result;
    if (timeStartIndex > 0) {
        var dateSkeleton = skeleton.substr(0, timeStartIndex);
        var timeSkeleton = skeleton.substr(timeStartIndex);

        result = formatString(info.calendar.dateTimeFormats.short, //should be deterimed based on specifiers
            availableFormats[timeSkeleton] || findBestMatch(skeletonSpecifiers(timeSkeleton), availableFormats),
            availableFormats[dateSkeleton] || findBestMatch(skeletonSpecifiers(dateSkeleton), availableFormats));
    } else {
        result = findBestMatch(skeletonSpecifiers(skeleton), availableFormats);
    }

    cacheFormat(skeleton, result, info.name);
    return result;
}

function skeletonFromOptions(options) {
    var result = [];
    for (var idx = 0; idx < DATE_OPTIONS_MAP.length; idx++) {
        var option = DATE_OPTIONS_MAP[idx];
        var field = option.key;
        var value = options[field];
        if (value) {
            var spcifier = option.specifier || option.getSpecifier(options);
            result.push(spcifier.repeat(VALUE_FORMAT_LENGTH[value]));
        }
    }

    return result.join("");
}

function datePattern(format, info) {
    var calendar = info.calendar;
    var result;
    if (typeof format === "string") {
        if (calendar.patterns[format]) {
            result = calendar.patterns[format];
        } else {
            result = format;
        }
    } else if (format) {
        var skeleton = format.skeleton;
        if (!skeleton) {
            if (format.datetime) {
                result = formatString(calendar.dateTimeFormats[format.datetime], calendar.timeFormats[format.datetime], calendar.dateFormats[format.datetime]);
            } else if (format.date) {
                result = calendar.dateFormats[format.date];
            } else if (format.time) {
                result = calendar.timeFormats[format.time];
            } else {
                skeleton = skeletonFromOptions(format);
            }
        }

        if (skeleton) {
            result = skeletonFormat(skeleton, info);
        }
    }

    if (!result) {
        result = calendar.patterns.d;
    }

    return result;
}

function dateNameType(formatLength) {
    var nameType;
    if (formatLength <= 3) {
        nameType = "abbreviated";
    } else if (formatLength === 4) {
        nameType = "wide";
    } else if (formatLength === 5) {
        nameType = "narrow";
    } else if (formatLength === 6) {
        nameType = "short";
    }

    return nameType;
}

function formatNames(locale, type, formatLength, standAlone, lower) {
    return dateFormatNames(locale, {
        type: type,
        nameType: dateNameType(formatLength),
        standAlone: standAlone,
        lower: lower
    });
}

var objectToString = {}.toString;
var DATE_STRING = "[object Date]";

function isDate(value) {
    return objectToString.call(value) === DATE_STRING;
}

var dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

function formatDayOfWeekIndex(day, formatLength, localeInfo$$1) {
    var firstDayIndex = firstDay(localeInfo$$1);
    var dayIndex;
    if (day < firstDayIndex) {
        dayIndex = 7 - firstDayIndex + day;
    } else {
        dayIndex = day - firstDayIndex;
    }

    return dayIndex + 1;
}

function formatMonth(month, formatLength, info, standAlone) {
    if (formatLength <= 2) {
        return pad(month + 1, formatLength);
    }
    return formatNames(info, "months", formatLength, standAlone)[month];
}

function formatQuarter(date, formatLength, info, standAlone) {
    var quarter = Math.floor(date.getMonth() / 3);
    if (formatLength < 3) {
        return quarter + 1;
    }

    return formatNames(info, "quarters", formatLength, standAlone)[quarter];
}


function formatTimeZone(date, info, options) {
    var shortHours = options.shortHours;
    var optionalMinutes = options.optionalMinutes;
    var separator = options.separator;
    var localizedName = options.localizedName;
    var zZeroOffset = options.zZeroOffset;
    var offset = date.getTimezoneOffset() / 60;
    if (offset === 0 && zZeroOffset) {
        return "Z";
    }
    var sign = offset <= 0 ? "+" : "-";
    var hoursMinutes = Math.abs(offset).toString().split(".");
    var minutes = hoursMinutes[1] || 0;
    var result = sign + (shortHours ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
    if (minutes || !optionalMinutes) {
        result += (separator ? ":" : "") + pad(minutes, 2);
    }

    if (localizedName) {
        var localizedFormat = offset === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat;
        result = formatString(localizedFormat, result);
    }

    return result;
}
function formatDayOfWeek(date, formatLength, info, standAlone) {
    var result;
    if (formatLength < 3) {
        result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
    } else {
        result = formatNames(info, "days", formatLength, standAlone)[date.getDay()];
    }
    return result;
}


var formatters = {};

formatters.d = function(date, formatLength) {
    return pad(date.getDate(), formatLength);
};

formatters.E = function(date, formatLength, info) {
    return formatNames(info, "days", formatLength)[date.getDay()];
};

formatters.M = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, false);
};

formatters.L = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, true);
};

formatters.y = function(date, formatLength) {
    var year = date.getFullYear();
    if (formatLength === 2) {
        year = year % 100;
    }
    return pad(year, formatLength);
};

formatters.h = function(date, formatLength) {
    var hours = date.getHours() % 12 || 12;
    return pad(hours, formatLength);
};

formatters.H = function(date, formatLength) {
    return pad(date.getHours(), formatLength);
};

formatters.m = function(date, formatLength) {
    return pad(date.getMinutes(), formatLength);
};

formatters.s = function(date, formatLength) {
    return pad(date.getSeconds(), formatLength);
};

formatters.S = function(date, formatLength) {
    var milliseconds = date.getMilliseconds();
    var result;
    if (milliseconds !== 0) {
        result = String(date.getMilliseconds() / 1000).split(".")[1].substr(0, formatLength);
    } else {
        result = pad("", formatLength);
    }
    return result;
};

formatters.a = function(date, formatLength, info) {
    return formatNames(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
};

formatters.z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        shortHours: formatLength < 4,
        optionalMinutes: formatLength < 4,
        separator: true,
        localizedName: true
    });
};

formatters.Z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        separator: formatLength > 3,
        localizedName: formatLength === 4,
        zZeroOffset: formatLength === 5
    });
};

formatters.x = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5
    });
};

formatters.X = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5,
        zZeroOffset: true
    });
};

formatters.G = function(date, formatLength, info) {
    var era = date.getFullYear() >= 0 ? 1 : 0;
    return formatNames(info, "eras", formatLength)[era];
};

formatters.e = formatDayOfWeek;

formatters.c = function(date, formatLength, info) {
    return formatDayOfWeek(date, formatLength, info, true);
};

formatters.q = function(date, formatLength, info) {
    return formatQuarter(date, formatLength, info, true);
};

formatters.Q = formatQuarter;

function dateGenericFormat(date, format, locale, returnPattern) {
    if ( locale === void 0 ) locale = "en";
    if ( returnPattern === void 0 ) returnPattern = false;

    if (!isDate(date)) {
        return returnPattern ? format : date;
    }

    var info = localeInfo(locale);
    var pattern = datePattern(format, info);

    return pattern.replace(dateFormatRegExp, function(match) {
        var formatLength = match.length;
        var result;

        if (match.includes("'") || match.includes("\"")) {
            result = match.slice(1, formatLength - 1);
        } else {
            result = formatters[match[0]](date, formatLength, info);

            if (returnPattern) {
                var length = (result || "").toString().length;
                result = "";
                while (length > 0) {
                    result += match[0];
                    length--;
                }
            }
        }
        return result;
    });
}

function formatDate(date, format, locale) {
    if ( locale === void 0 ) locale = "en";

    return dateGenericFormat(date, format, locale, false);
}

function convertTimeZone(date, fromOffset, toOffset) {
    var fromLocalOffset = date.getTimezoneOffset();

    var offsetDate = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

    var toLocalOffset = offsetDate.getTimezoneOffset();

    return new Date(offsetDate.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
}

function adjustDST(date, hours) {
    if (!hours && date.getHours() === 23) {
        date.setHours(date.getHours() + 2);
    }
}

var timeZoneOffsetRegExp = /([+|\-]\d{1,2})(:?)(\d{2})?/;
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var offsetRegExp = /[+-]\d*/;
var numberRegExp = {
    2: /^\d{1,2}/,
    3: /^\d{1,3}/,
    4: /^\d{4}/
};
var numberRegex = /\d+/;
var PLACEHOLDER$1 = "{0}";

var standardDateFormats = [
    "yyyy/MM/dd HH:mm:ss",
    "yyyy/MM/dd HH:mm",
    "yyyy/MM/dd",
    "E MMM dd yyyy HH:mm:ss",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
    "yyyy-MM-ddTHH:mm:ss.SSSXXX",
    "yyyy-MM-ddTHH:mm:ssXXX",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
    "yyyy-MM-ddTHH:mm:ss.SSS",
    "yyyy-MM-ddTHH:mmXXX",
    "yyyy-MM-ddTHH:mmX",
    "yyyy-MM-ddTHH:mm:ss",
    "yyyy-MM-ddTHH:mm",
    "yyyy-MM-dd HH:mm:ss",
    "yyyy-MM-dd HH:mm",
    "yyyy-MM-dd",
    "HH:mm:ss",
    "HH:mm"
];
var FORMATS_SEQUENCE = [ "G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t" ];
var TWO_DIGIT_YEAR_MAX = 2029;

function outOfRange(value, start, end) {
    return !(value >= start && value <= end);
}

function lookAhead(match, state) {
    var format = state.format;
    var idx = state.idx;
    var i = 0;
    while (format[idx] === match) {
        i++;
        idx++;
    }
    if (i > 0) {
        idx -= 1;
    }
    state.idx = idx;
    return i;
}

function getNumber(size, state) {
    var regex = size ? (numberRegExp[size] || new RegExp('^\\d{1,' + size + '}')) : numberRegex,
        match = state.value.substr(state.valueIdx, size).match(regex);

    if (match) {
        match = match[0];
        state.valueIdx += match.length;
        return parseInt(match, 10);
    }
    return null;
}

function getIndexByName(names, state, lower) {
    var i = 0,
        length = names.length,
        name, nameLength,
        matchLength = 0,
        matchIdx = 0,
        subValue;

    for (; i < length; i++) {
        name = names[i];
        nameLength = name.length;
        subValue = state.value.substr(state.valueIdx, nameLength);

        if (lower) {
            subValue = subValue.toLowerCase();
        }

        if (subValue === name && nameLength > matchLength) {
            matchLength = nameLength;
            matchIdx = i;
        }
    }

    if (matchLength) {
        state.valueIdx += matchLength;
        return matchIdx + 1;
    }

    return null;
}

function checkLiteral(state) {
    var result = false;
    if (state.value.charAt(state.valueIdx) === state.format[state.idx]) {
        state.valueIdx++;
        result = true;
    }
    return result;
}

function calendarGmtFormats(calendar) {
    var gmtFormat = calendar.gmtFormat;
    var gmtZeroFormat = calendar.gmtZeroFormat;
    if (!gmtFormat) {
        throw errors.NoGMTInfo.error();
    }

    return [ gmtFormat.replace(PLACEHOLDER$1, "").toLowerCase(), gmtZeroFormat.replace(PLACEHOLDER$1, "").toLowerCase() ];
}

function parseTimeZoneOffset(state, info, options) {
    var shortHours = options.shortHours;
    var noSeparator = options.noSeparator;
    var optionalMinutes = options.optionalMinutes;
    var localizedName = options.localizedName;
    var zLiteral = options.zLiteral;
    state.UTC = true;

    if (zLiteral && state.value.charAt(state.valueIdx) === "Z") {
        state.valueIdx++;
        return false;
    }

    if (localizedName && !getIndexByName(calendarGmtFormats(info.calendar), state, true)) {
        return true;
    }

    var matches = timeZoneOffsetRegExp.exec(state.value.substr(state.valueIdx, 6));
    if (!matches) {
        return !localizedName;
    }

    var hoursMatch = matches[1];
    var minutesMatch = matches[3];
    var hoursOffset = parseInt(hoursMatch, 10);
    var separator = matches[2];
    var minutesOffset = parseInt(minutesMatch, 10);

    if (isNaN(hoursOffset) || (!shortHours && hoursMatch.length !== 3) || (!optionalMinutes && isNaN(minutesOffset)) || (noSeparator && separator)) {
        return true;
    }

    if (isNaN(minutesOffset)) {
        minutesOffset = null;
    }

    if (outOfRange(hoursOffset, -12, 13) || (minutesOffset && outOfRange(minutesOffset, 0, 59))) {
        return true;
    }

    state.valueIdx += matches[0].length;
    state.hoursOffset = hoursOffset;
    state.minutesOffset = minutesOffset;
}

function parseMonth(ch, state, info) {
    var count = lookAhead(ch, state);
    var names = formatNames(info, "months", count, ch === "L", true);

    var month = count < 3 ? getNumber(2, state) : getIndexByName(names, state, true);

    if (month === null || outOfRange(month, 1, 12)) {
        return true;
    }
    state.month = month - 1;
}

function parseDayOfWeek(ch, state, info) {
    var count = lookAhead(ch, state);
    var names = formatNames(info, "days", count, ch === "c", true);
    var dayOfWeek = count < 3 ? getNumber(1, state) : getIndexByName(names, state, true);
    if ((!dayOfWeek && dayOfWeek !== 0) || outOfRange(dayOfWeek, 1, 7)) {
        return true;
    }
}

var parsers = {};

parsers.d = function(state) {
    lookAhead("d", state);
    var day = getNumber(2, state);

    if (day === null || outOfRange(day, 1, 31)) {
        return true;
    }

    if (state.day === null) {
        state.day = day;
    }
};

parsers.E = function(state, info) {
    var count = lookAhead("E", state);
    //validate if it matches the day?
    var dayOfWeek = getIndexByName(formatNames(info, "days", count, false, true), state, true);
    if (dayOfWeek === null) {
        return true;
    }
};

parsers.M = function(state, info) {
    return parseMonth("M", state, info);
};

parsers.L = function(state, info) {
    return parseMonth("L", state, info);
};

parsers.y = function(state) {
    var count = lookAhead("y", state);
    var year = getNumber(count === 1 ? undefined : count, state);

    if (year === null) {
        return true;
    }

    if (count === 2) {
        var currentYear = new Date().getFullYear();
        year = (currentYear - currentYear % 100) + year;
        if (year > TWO_DIGIT_YEAR_MAX) {
            year -= 100;
        }
    }

    state.year = year;
};

parsers.h = function(state) {
    lookAhead("h", state);

    var hours = getNumber(2, state);
    if (hours === 12) {
        hours = 0;
    }

    if (hours === null || outOfRange(hours, 0, 11)) {
        return true;
    }

    state.hours = hours;
};

parsers.a = function(state, info) {
    var count = lookAhead("a", state);
    var periodFormats = formatNames(info, "dayPeriods", count, false, true);

    var pmHour = getIndexByName([ periodFormats.pm ], state,true);
    if (!pmHour && !getIndexByName([ periodFormats.am ], state, true)) {
        return true;
    }

    state.pmHour = pmHour;
};

parsers.H = function(state) {
    lookAhead("H", state);
    var hours = getNumber(2, state);
    if (hours === null || outOfRange(hours, 0, 23)) {
        return true;
    }
    state.hours = hours;
};

parsers.m = function(state) {
    lookAhead("m", state);
    var minutes = getNumber(2, state);

    if (minutes === null || outOfRange(minutes, 0, 59)) {
        return true;
    }

    state.minutes = minutes;
};

parsers.s = function(state) {
    lookAhead("s", state);
    var seconds = getNumber(2, state);
    if (seconds === null || outOfRange(seconds, 0, 59)) {
        return true;
    }
    state.seconds = seconds;
};

parsers.S = function(state) {
    var count = lookAhead("S", state);
    var match = state.value.substr(state.valueIdx, count);
    var milliseconds = null;

    if (!isNaN(parseInt(match, 10))) {
        milliseconds = parseFloat("0." + match, 10);
        milliseconds = round(milliseconds, 3);
        milliseconds *= 1000;
        state.valueIdx += count;
    }

    if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
        return true;
    }

    state.milliseconds = milliseconds;
};

parsers.z = function(state, info) {
    var count = lookAhead("z", state);

    var shortFormat = count < 4;

    var invalid = parseTimeZoneOffset(state, info, {
        shortHours: shortFormat,
        optionalMinutes: shortFormat,
        localizedName: true
    });

    if (invalid) {
        return invalid;
    }
};

parsers.Z = function(state, info) {
    var count = lookAhead("Z", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count < 4,
        zLiteral: count === 5,
        localizedName: count === 4
    });

    if (invalid) {
        return invalid;
    }
};

parsers.x = function(state, info) {
    var count = lookAhead("x", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count !== 3 && count !== 5,
        optionalMinutes: count === 1
    });
    if (invalid) {
        return invalid;
    }
};

parsers.X = function(state, info) {
    var count = lookAhead("X", state);

    var invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count !== 3 && count !== 5,
        optionalMinutes: count === 1,
        zLiteral: true
    });
    if (invalid) {
        return invalid;
    }
};

parsers.G = function(state, info) {
    var count = lookAhead("G", state);
    var eras = formatNames(info, "eras", count, false, true);
    var era = getIndexByName([ eras[0], eras[1] ], state, true);

    if (era === null) {
        return true;
    }
};

parsers.e = function(state, info) {
    return parseDayOfWeek("e", state, info);
};

parsers.c = function(state, info) {
    return parseDayOfWeek("c", state, info);
};

function createDate(state) {
    var year = state.year;
    var month = state.month;
    var day = state.day;
    var hours = state.hours;
    var minutes = state.minutes;
    var seconds = state.seconds;
    var milliseconds = state.milliseconds;
    var pmHour = state.pmHour;
    var UTC = state.UTC;
    var hoursOffset = state.hoursOffset;
    var minutesOffset = state.minutesOffset;
    var hasTime = hours !== null || minutes !== null || seconds || null;
    var date = new Date();
    var result;

    if (year === null && month === null && day === null && hasTime) {
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
    } else {
        if (year === null) {
            year = date.getFullYear();
        }

        if (day === null) {
            day = 1;
        }
    }

    if (pmHour && hours < 12) {
        hours += 12;
    }

    if (UTC) {
        if (hoursOffset) {
            hours += -hoursOffset;
        }

        if (minutesOffset) {
            minutes += -minutesOffset * (hoursOffset < 0 ? -1 : 1);
        }

        result = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
    } else {
        result = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        adjustDST(result, hours);
    }

    if (year < 100) {
        result.setFullYear(year);
    }

    if (result.getDate() !== day && UTC === undefined) {
        return null;
    }

    return result;
}

function parseExact(value, format, info) {
    var pattern = datePattern(format, info).split("");

    var state = {
        format: pattern,
        idx: 0,
        value: value,
        valueIdx: 0,
        year: null,
        month: null,
        day: null,
        hours: null,
        minutes: null,
        seconds: null,
        milliseconds: null
    };
    var length = pattern.length;
    var literal = false;

    for (; state.idx < length; state.idx++) {
        var ch = pattern[state.idx];

        if (literal) {
            if (ch === "'") {
                literal = false;
            }

            checkLiteral(state);
        } else {
            if (parsers[ch]) {
                var invalid = parsers[ch](state, info);
                if (invalid) {
                    return null;
                }
            } else if (ch === "'") {
                literal = true;
                checkLiteral(state);
            } else if (!checkLiteral(state)) {
                return null;
            }
        }
    }

    if (state.valueIdx < value.length) {
        return null;
    }

    return createDate(state) || null;
}

function parseMicrosoftDateOffset(offset) {
    var sign = offset.substr(0, 1) === "-" ? -1 : 1;

    var result = offset.substring(1);
    result = (parseInt(result.substr(0, 2), 10) * 60) + parseInt(result.substring(2), 10);

    return sign * result;
}

function parseMicrosoftDateFormat(value) {
    if (value && value.indexOf("/D") === 0) {
        var date = dateRegExp.exec(value);
        if (date) {
            date = date[1];
            var tzoffset = offsetRegExp.exec(date.substring(1));

            date = new Date(parseInt(date, 10));

            if (tzoffset) {
                tzoffset = parseMicrosoftDateOffset(tzoffset[0]);
                date = convertTimeZone(date, date.getTimezoneOffset(), 0);
                date = convertTimeZone(date, 0, -1 * tzoffset);
            }

            return date;
        }
    }
}

function defaultFormats(calendar) {
    var formats = [];
    var patterns = calendar.patterns;
    var length = FORMATS_SEQUENCE.length;

    for (var idx = 0; idx < length; idx++) {
        formats.push(patterns[FORMATS_SEQUENCE[idx]]);
    }

    return formats.concat(standardDateFormats);
}

function parseDate(value, formats, locale) {
    if ( locale === void 0 ) locale = "en";

    if (!value) {
        return null;
    }

    if (isDate(value)) {
        return value;
    }

    var parseValue = String(value).trim();
    var date = parseMicrosoftDateFormat(parseValue);
    if (date) {
        return date;
    }

    var info = localeInfo(locale);
    var parseFormats = formats || defaultFormats(info.calendar);
    parseFormats = Array.isArray(parseFormats) ? parseFormats : [ parseFormats ];

    var length = parseFormats.length;

    for (var idx = 0; idx < length; idx++) {
        date = parseExact(parseValue, parseFormats[idx], info);
        if (date) {
            return date;
        }
    }

    return date;
}

function dateFormatString(date, format, locale) {
    if ( locale === void 0 ) locale = "en";

    return dateGenericFormat(date, format, locale, true);
}

var formatRegExp$2 = /\{(\d+)(:[^\}]+)?\}/g;

function toString(value, format, locale) {
    if (format) {
        if (isDate(value)) {
            return formatDate(value, format, locale);
        } else if (typeof value === "number") {
            return formatNumber(value, format, locale);
        }
    }

    return value !== undefined ? value : "";
}

function format(format, values, locale) {
    return format.replace(formatRegExp$2, function(match, index, placeholderFormat) {
        var value = values[parseInt(index, 10)];

        return toString(value, placeholderFormat ? placeholderFormat.substring(1) : "", locale);
    });
}

exports.formatNumber = formatNumber;
exports.parseNumber = parseNumber;
exports.formatDate = formatDate;
exports.parseDate = parseDate;
exports.dateFormatString = dateFormatString;
exports.load = load;
exports.dateFormatNames = dateFormatNames;
exports.cldr = cldr;
exports.localeInfo = localeInfo;
exports.currencyDisplays = currencyDisplays;
exports.currencyDisplay = currencyDisplay;
exports.currencyFractionOptions = currencyFractionOptions;
exports.territoryCurrencyCode = territoryCurrencyCode;
exports.localeCurrency = localeCurrency;
exports.firstDay = firstDay;
exports.numberSymbols = numberSymbols;
exports.toString = toString;
exports.format = format;
exports.errors = errors;
exports.IntlError = IntlError;
exports.toIntlErrors = toIntlErrors;

//# sourceMappingURL=main.js.map

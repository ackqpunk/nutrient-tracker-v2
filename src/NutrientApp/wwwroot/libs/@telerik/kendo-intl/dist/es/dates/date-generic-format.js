import { localeInfo, firstDay } from '../cldr';
import formatString from '../common/format-string';
import datePattern from './date-pattern';
import formatNames from './format-names';
import pad from '../common/pad';
import isDate from '../common/is-date';

var dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

function formatDayOfWeekIndex(day, formatLength, localeInfo) {
    var firstDayIndex = firstDay(localeInfo);
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

export default function dateGenericFormat(date, format, locale, returnPattern) {
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
//# sourceMappingURL=date-generic-format.js.map

import { cldr } from './info';

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


export default function loadCalendarInfo(locale, info) {
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
//# sourceMappingURL=load-dates.js.map

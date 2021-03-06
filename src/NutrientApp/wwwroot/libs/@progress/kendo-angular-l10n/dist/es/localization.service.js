import { Inject, Injectable, Optional, OpaqueToken } from '@angular/core';
import { MessageService } from './message.service';
/**
 * Localization prefix for the component messages.
 *
 * For internal use.
 * @hidden
 */
export var L10N_PREFIX = new OpaqueToken('Localization key prefix');
/**
 * Component localization service.
 *
 * For internal use.
 * @hidden
 */
export var LocalizationService = (function () {
    function LocalizationService(prefix, messageService) {
        this.prefix = prefix;
        this.messageService = messageService;
        this.dictionary = {};
    }
    LocalizationService.prototype.get = function (shortKey) {
        var key = this.key(shortKey);
        return this.dictionary[key];
    };
    LocalizationService.prototype.register = function (shortKey, value, override) {
        if (override === void 0) { override = false; }
        var key = this.key(shortKey);
        var message = value;
        if (!override) {
            if (this.dictionary.hasOwnProperty(key)) {
                return;
            }
            message = this.defaultValue(key, value);
        }
        this.dictionary[key] = message;
    };
    LocalizationService.prototype.key = function (shortKey) {
        return this.prefix + '.' + shortKey;
    };
    LocalizationService.prototype.defaultValue = function (key, value) {
        if (!this.messageService) {
            return value;
        }
        var alt = this.messageService.get(key);
        return (alt === undefined) ? value : alt;
    };
    LocalizationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocalizationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [L10N_PREFIX,] },] },
        { type: MessageService, decorators: [{ type: Optional },] },
    ]; };
    return LocalizationService;
}());

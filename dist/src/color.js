"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var padStart = require("string.prototype.padstart");
padStart.shim();
var BaseColor = /** @class */ (function () {
    function BaseColor() {
    }
    BaseColor.prototype.toHex = function () {
        return this.toRgba()
            .map(function (it) { return Math.round(it * 255); })
            .map(function (it) { return it.toString(16).padStart(2, '0'); })
            .join('');
    };
    BaseColor.prototype.toRgbFunc = function () {
        var values = this.toRgb()
            .map(function (it) { return Math.round(it * 255); })
            .map(function (it) { return it.toString(); })
            .join(',');
        return "rgb(" + values + ")";
    };
    BaseColor.prototype.toRgbaFunc = function () {
        var rgba = this.toRgba();
        var values = rgba.slice(0, -1)
            .map(function (it) { return Math.round(it * 255); })
            .concat(rgba.slice(-1))
            .map(function (it) { return it.toString(); })
            .join(',');
        return "rgba(" + values + ")";
    };
    return BaseColor;
}());
exports.BaseColor = BaseColor;
/**
 *
 * 0 <= r, g, b <= 1
 *
 * @param r
 * @param g
 * @param b
 */
exports.rgbToHsv = function (r, g, b) {
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;
    var d = max - min;
    s = max == 0 ? 0 : d / max;
    if (max == min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s, v];
};
/**
 *
 * 0 <= h, s, v <= 1
 *
 * @param h
 * @param s
 * @param v
 */
exports.hsvToRgb = function (h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return [r, g, b];
};
//# sourceMappingURL=color.js.map
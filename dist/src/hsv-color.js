"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("./color");
var HSVColor = /** @class */ (function (_super) {
    __extends(HSVColor, _super);
    function HSVColor(hue, saturation, value, alpha) {
        if (alpha === void 0) { alpha = 1; }
        var _this = _super.call(this) || this;
        _this.hue = hue;
        _this.saturation = saturation;
        _this.value = value;
        _this.alpha = alpha;
        return _this;
    }
    HSVColor.fromArray = function (_a) {
        var hue = _a[0], saturation = _a[1], value = _a[2], _b = _a[3], alpha = _b === void 0 ? 1 : _b;
        return new HSVColor(hue, saturation, value, alpha);
    };
    HSVColor.prototype.toRgb = function () {
        return color_1.hsvToRgb(this.hue, this.saturation, this.value);
    };
    HSVColor.prototype.toRgba = function () {
        return [this.hue, this.saturation, this.value, this.alpha];
    };
    HSVColor.prototype.toHsv = function () {
        return [this.hue, this.saturation, this.value];
    };
    HSVColor.prototype.addRgba = function (channels) {
        var _a = this.toRgba(), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        var rgba = {
            red: r,
            green: g,
            blue: b,
            alpha: a,
        };
        Object.entries(channels)
            .filter(function (_a) {
            var k = _a[0], v = _a[1];
            return v !== undefined;
        })
            .forEach(function (_a) {
            var k = _a[0], v = _a[1];
            return rgba[k] += v;
        });
        var _b = color_1.rgbToHsv(rgba.red, rgba.green, rgba.blue), h = _b[0], s = _b[1], v = _b[2];
        return new HSVColor(h, s, v, rgba.alpha);
    };
    HSVColor.prototype.replaceRgba = function (channels) {
        var _a = this.toRgba(), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        var rgba = {
            red: r,
            green: g,
            blue: b,
            alpha: a,
        };
        Object.entries(channels)
            .filter(function (_a) {
            var k = _a[0], v = _a[1];
            return v !== undefined;
        })
            .forEach(function (_a) {
            var k = _a[0], v = _a[1];
            return rgba[k] = v;
        });
        var _b = color_1.rgbToHsv(rgba.red, rgba.green, rgba.blue), h = _b[0], s = _b[1], v = _b[2];
        return new HSVColor(h, s, v, rgba.alpha);
    };
    HSVColor.prototype.replaceAlpha = function (alpha) {
        var newColor = this.clone();
        newColor.alpha = alpha;
        return newColor;
    };
    HSVColor.prototype.addHsv = function (channels) {
        var newColor = this.clone();
        Object.entries(channels)
            .filter(function (_a) {
            var k = _a[0], v = _a[1];
            return v !== undefined;
        })
            .forEach(function (_a) {
            var k = _a[0], v = _a[1];
            return newColor[k] += v;
        });
        return newColor;
    };
    HSVColor.prototype.addAlpha = function (alpha) {
        var newColor = this.clone();
        newColor.alpha = alpha;
        return newColor;
    };
    HSVColor.prototype.replaceHsv = function (channels) {
        var newColor = this.clone();
        Object.entries(channels)
            .filter(function (_a) {
            var k = _a[0], v = _a[1];
            return v !== undefined;
        })
            .forEach(function (_a) {
            var k = _a[0], v = _a[1];
            return newColor[k] = v;
        });
        return newColor;
    };
    HSVColor.prototype.clone = function () {
        return HSVColor.fromArray([this.hue, this.saturation, this.value, this.alpha]);
    };
    return HSVColor;
}(color_1.BaseColor));
exports.HSVColor = HSVColor;
//# sourceMappingURL=hsv-color.js.map
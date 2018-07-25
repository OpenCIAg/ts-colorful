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
var RGBAColor = /** @class */ (function (_super) {
    __extends(RGBAColor, _super);
    function RGBAColor(red, green, blue, alpha) {
        if (alpha === void 0) { alpha = 1; }
        var _this = _super.call(this) || this;
        _this.red = red;
        _this.green = green;
        _this.blue = blue;
        _this.alpha = alpha;
        return _this;
    }
    RGBAColor.fromArray = function (_a) {
        var red = _a[0], green = _a[1], blue = _a[2], _b = _a[3], alpha = _b === void 0 ? 1 : _b;
        return new RGBAColor(red, green, blue, alpha);
    };
    RGBAColor.prototype.toRgb = function () {
        return [this.red, this.green, this.blue];
    };
    RGBAColor.prototype.toRgba = function () {
        return [this.red, this.green, this.blue, this.alpha];
    };
    RGBAColor.prototype.toHsv = function () {
        return color_1.rgbToHsv(this.red, this.green, this.blue);
    };
    RGBAColor.prototype.addRgba = function (channels) {
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
    RGBAColor.prototype.replaceRgba = function (channels) {
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
    RGBAColor.prototype.addHsv = function (channels) {
        var _a = this.toHsv(), hue = _a[0], saturation = _a[1], value = _a[2];
        var hsv = {
            hue: hue,
            saturation: saturation,
            value: value,
        };
        Object.entries(channels)
            .filter(function (_a) {
            var k = _a[0], v = _a[1];
            return v !== undefined;
        })
            .forEach(function (_a) {
            var k = _a[0], v = _a[1];
            return hsv[k] += v;
        });
        var _b = color_1.hsvToRgb(hsv.hue, hsv.saturation, hsv.vale), red = _b[0], green = _b[1], blue = _b[2];
        return RGBAColor.fromArray([red, green, blue, this.alpha]);
    };
    RGBAColor.prototype.replaceHsv = function (channels) {
        var _a = this.toHsv(), hue = _a[0], saturation = _a[1], value = _a[2];
        var hsv = {
            hue: hue,
            saturation: saturation,
            value: value,
        };
        Object.entries(channels)
            .filter(function (_a) {
            var k = _a[0], v = _a[1];
            return v !== undefined;
        })
            .forEach(function (_a) {
            var k = _a[0], v = _a[1];
            return hsv[k] = v;
        });
        var _b = color_1.hsvToRgb(hsv.hue, hsv.saturation, hsv.vale), red = _b[0], green = _b[1], blue = _b[2];
        return RGBAColor.fromArray([red, green, blue, this.alpha]);
    };
    RGBAColor.prototype.toHex = function () {
        return this.toRgba()
            .map(function (it) { return Math.round(it * 255); })
            .map(function (it) { return it.toString().padStart(2, '0'); })
            .join();
    };
    RGBAColor.prototype.toRgbaFunc = function () {
        var values = this.toRgb()
            .map(function (it) { return Math.round(it * 255); })
            .concat(this.alpha)
            .map(function (it) { return it.toString(); })
            .join(',');
        return "rgba(" + values + ")";
    };
    RGBAColor.prototype.clone = function () {
        return RGBAColor.fromArray(this.toRgba());
    };
    return RGBAColor;
}(color_1.BaseColor));
exports.RGBAColor = RGBAColor;
//# sourceMappingURL=rgb-color.js.map
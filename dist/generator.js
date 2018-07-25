"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hsv_color_1 = require("./hsv-color");
var uniform = function (_a) {
    var min = _a[0], max = _a[1];
    return Math.random() * (max - min) + min;
};
var ColorGenerator = /** @class */ (function () {
    function ColorGenerator() {
    }
    return ColorGenerator;
}());
exports.ColorGenerator = ColorGenerator;
var RandomHSVColorGenerator = /** @class */ (function () {
    function RandomHSVColorGenerator(hue, saturation, value) {
        if (hue === void 0) { hue = [0, 1]; }
        if (saturation === void 0) { saturation = [0.7, 1]; }
        if (value === void 0) { value = [0.5, 1]; }
        this.hue = hue;
        this.saturation = saturation;
        this.value = value;
    }
    RandomHSVColorGenerator.prototype.next = function () {
        return new hsv_color_1.HSVColor(uniform(this.hue), uniform(this.saturation), uniform(this.value));
    };
    return RandomHSVColorGenerator;
}());
exports.RandomHSVColorGenerator = RandomHSVColorGenerator;
//# sourceMappingURL=generator.js.map
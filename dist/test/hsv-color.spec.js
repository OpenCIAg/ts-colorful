"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hsv_color_1 = require("../src/hsv-color");
var chai_1 = require("chai");
describe('HSVColor', function () {
    it('new HSVColor', function () {
        var hsvColor = new hsv_color_1.HSVColor(0, 0, 0);
        chai_1.expect(hsvColor).to.not.equal(null);
    });
    it('toRGB', function () {
        var hsvColor = new hsv_color_1.HSVColor(0, 0, 0);
        chai_1.expect(hsvColor.toRgb()).to.deep.equal([0, 0, 0]);
    });
    it('toRGBA', function () {
        var hsvColor = new hsv_color_1.HSVColor(0, 0, 0);
        chai_1.expect(hsvColor.toRgba()).to.deep.equal([0, 0, 0, 1]);
    });
    it('toHSV', function () {
        var hsvColor = new hsv_color_1.HSVColor(0, 0, 0);
        chai_1.expect(hsvColor.toHsv()).to.deep.equal([0, 0, 0]);
    });
    it('toHEX', function () {
        var hsvColor = new hsv_color_1.HSVColor(0, 0, 0);
        chai_1.expect(hsvColor.toHex()).to.equal('000000ff');
    });
    it('toRgbaFunc', function () {
        var hsvColor = new hsv_color_1.HSVColor(0, 0, 0);
        chai_1.expect(hsvColor.toRgbaFunc()).to.equal('rgba(0,0,0,1)');
    });
    it('toRgbFunc', function () {
        var hsvColor = new hsv_color_1.HSVColor(0, 0, 0);
        chai_1.expect(hsvColor.toRgbFunc()).to.equal('rgb(0,0,0)');
    });
});
//# sourceMappingURL=hsv-color.spec.js.map
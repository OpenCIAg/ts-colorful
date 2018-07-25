"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rgb_color_1 = require("../src/rgb-color");
var chai_1 = require("chai");
describe('RGBAColor', function () {
    it('new RGBAColor', function () {
        var rgbColor = new rgb_color_1.RGBAColor(0, 0, 0);
        chai_1.expect(rgbColor).to.not.equal(null);
    });
    it('toRGB', function () {
        var rgbColor = new rgb_color_1.RGBAColor(0, 0, 0);
        chai_1.expect(rgbColor.toRgb()).to.deep.equal([0, 0, 0]);
    });
    it('toRGBA', function () {
        var rgbColor = new rgb_color_1.RGBAColor(0, 0, 0);
        chai_1.expect(rgbColor.toRgba()).to.deep.equal([0, 0, 0, 1]);
    });
    it('toHSV', function () {
        var rgbColor = new rgb_color_1.RGBAColor(0, 0, 0);
        chai_1.expect(rgbColor.toHsv()).to.deep.equal([0, 0, 0]);
    });
    it('toHEX', function () {
        var rgbColor = new rgb_color_1.RGBAColor(0, 0, 0);
        chai_1.expect(rgbColor.toHex()).to.equal('000000ff');
    });
    it('toRgbaFunc', function () {
        var rgbColor = new rgb_color_1.RGBAColor(0, 0, 0);
        chai_1.expect(rgbColor.toRgbaFunc()).to.equal('rgba(0,0,0,1)');
    });
    it('toRgbFunc', function () {
        var rgbColor = new rgb_color_1.RGBAColor(0, 0, 0);
        chai_1.expect(rgbColor.toRgbFunc()).to.equal('rgb(0,0,0)');
    });
});
//# sourceMappingURL=rgb-color.spec.js.map
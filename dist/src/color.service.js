"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorService = /** @class */ (function () {
    function ColorService(colorGenerator) {
        this.colorGenerator = colorGenerator;
        this.colors = {};
    }
    ColorService.prototype.makeColor = function (resource) {
        if (resource === void 0) { resource = null; }
        if (resource === null) {
            return this.colorGenerator.next();
        }
        if (resource in this.colors) {
            return this.colors[resource];
        }
        var color = this.colorGenerator.next();
        this.colors[resource] = color;
        return color;
    };
    return ColorService;
}());
exports.ColorService = ColorService;
//# sourceMappingURL=color.service.js.map
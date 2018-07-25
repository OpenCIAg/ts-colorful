import { Color, BaseColor, rgbToHsv, hsvToRgb } from './color';

export class HSVColor extends BaseColor {
    constructor(
        public hue: number,
        public saturation: number,
        public value: number,
        public alpha: number = 1
    ) {
        super();
    }

    static fromArray([hue, saturation, value, alpha = 1]) {
        return new HSVColor(hue, saturation, value, alpha);
    }

    toRgb(): [number, number, number] {
        return hsvToRgb(this.hue, this.saturation, this.value);
    }

    toRgba(): [number, number, number, number] {
        return [this.hue, this.saturation, this.value, this.alpha];
    }

    toHsv(): [number, number, number] {
        return [this.hue, this.saturation, this.value];
    }


    addRgba(channels: any): Color {
        const [r, g, b, a] = this.toRgba();
        const rgba = {
            red: r,
            green: g,
            blue: b,
            alpha: a,
        }
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => rgba[k] += v)
        const [h, s, v] = rgbToHsv(rgba.red, rgba.green, rgba.blue);
        return new HSVColor(h, s, v, rgba.alpha);
    }

    replaceRgba(channels: any): Color {
        const [r, g, b, a] = this.toRgba();
        const rgba = {
            red: r,
            green: g,
            blue: b,
            alpha: a,
        }
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => rgba[k] = v)
        const [h, s, v] = rgbToHsv(rgba.red, rgba.green, rgba.blue);
        return new HSVColor(h, s, v, rgba.alpha);
    }

    replaceAlpha(alpha: number): Color {
        const newColor = this.clone();
        newColor.alpha = alpha;
        return newColor;
    }

    addHsv(channels: any): Color {
        const newColor = this.clone();
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => newColor[k] += v)
        return newColor;
    }

    addAlpha(alpha: number): Color {
        const newColor = this.clone();
        newColor.alpha = alpha;
        return newColor;
    }


    replaceHsv(channels: any): Color {
        const newColor = this.clone();
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => newColor[k] = v)
        return newColor;
    }

    clone(): HSVColor {
        return HSVColor.fromArray([this.hue, this.saturation, this.value, this.alpha]);
    }
}
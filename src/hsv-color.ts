import { Color, BaseColor, rgbToHsv, hsvToRgb, RGBA, HSVA } from './color';

export class HSVColor extends BaseColor {
    constructor(
        public hue: number,
        public saturation: number,
        public value: number,
        public alpha: number = 1
    ) {
        super();
    }

    static fromArray(hsva: Array<number>): HSVColor {
        const [h, s, v, a = 1] = hsva;
        return new HSVColor(h, s, v, a);
    }

    toRgb(): [number, number, number] {
        return hsvToRgb(this.hue, this.saturation, this.value);
    }

    toRgba(): [number, number, number, number] {
        return hsvToRgb(this.hue, this.saturation, this.value).concat(this.alpha) as [number, number, number, number];
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

    replaceRgba(channels: RGBA): Color {
        const [r, g, b, a] = this.toRgba();
        const rgba: RGBA = {
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
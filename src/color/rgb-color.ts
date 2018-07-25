import { Color, BaseColor, rgbToHsv, hsvToRgb } from './color';

export class RGBAColor extends BaseColor {
    constructor(
        public red: number,
        public green: number,
        public blue: number,
        public alpha: number = 1
    ) {
        super();
    }

    static fromArray([red, green, blue, alpha = 1]) {
        return new RGBAColor(red, green, blue, alpha);
    }

    toRgb(): [number, number, number] {
        return [this.red, this.green, this.blue];
    }

    toRgba(): [number, number, number, number] {
        return [this.red, this.green, this.blue, this.alpha];
    }

    toHsv(): [number, number, number] {
        return rgbToHsv(this.red, this.green, this.blue);
    }


    addRgba(channels: any): Color {
        const newColor: RGBAColor = this.clone();
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => newColor[k] += v)
        return newColor;
    }

    replaceRgba(channels: any): Color {
        const newColor: RGBAColor = this.clone();
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => newColor[k] = v)
        return newColor;
    }

    replaceAlpha(alpha: number): Color {
        const newColor: RGBAColor = this.clone();
        newColor.alpha = alpha;
        return newColor;
    }

    addHsv(channels: any): Color {
        const [hue, saturation, value] = this.toHsv();
        const hsv: { [key: string]: number; } = {
            hue: hue,
            saturation: saturation,
            value: value,
        };
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => hsv[k] += (v as number))
        const [red, green, blue] = hsvToRgb(hsv.hue, hsv.saturation, hsv.vale);
        return RGBAColor.fromArray([red, green, blue, this.alpha]);
    }


    replaceHsv(channels: any): Color {
        const [hue, saturation, value] = this.toHsv();
        const hsv: { [key: string]: number; } = {
            hue: hue,
            saturation: saturation,
            value: value,
        };
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => hsv[k] = (v as number))
        const [red, green, blue] = hsvToRgb(hsv.hue, hsv.saturation, hsv.vale);
        return RGBAColor.fromArray([red, green, blue, this.alpha]);
    }

    addAlpha(alpha: number): Color {
        const newColor: RGBAColor = this.clone();
        newColor.alpha += alpha;
        return newColor;
    }


    clone(): RGBAColor {
        return RGBAColor.fromArray(this.toRgba());
    }


}
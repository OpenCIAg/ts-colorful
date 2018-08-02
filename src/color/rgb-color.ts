import { Color, BaseColor, rgbToHsv, hsvToRgb, HSVA } from './color';


function* range(start: number = 0, end: number, it: number = null): IterableIterator<number> {
    let current = start;
    it = it || (end > start ? 1 : -1);
    while (current < end) {
        yield current;
        current += it;
    }
}

export class RGBAColor extends BaseColor {
    constructor(
        public red: number,
        public green: number,
        public blue: number,
        public alpha: number = 1
    ) {
        super();
    }

    static fromHexString(hexString: string): RGBAColor {
        if (hexString.startsWith('#')) {
            hexString = hexString.slice(1);
        }
        if ([3, 4, 6, 8].indexOf(hexString.length) === -1) {
            throw TypeError(`The string '${hexString} is not a valid hex color'`);
        }
        if (hexString.length == 3) {
            hexString += 'F';
        }
        if (hexString.length == 6) {
            hexString += 'FF';
        }
        if (hexString.length == 4) {
            const rgba = Array.from(hexString).map(it => it + it)
                .map(it => parseInt(it, 16))
                .map(it => it / 255.0);
            return RGBAColor.fromArray(rgba as [number, number, number, number]);
        }
        if (hexString.length == 8) {
            const rgba = Array.from(range(0, hexString.length, 2))
                .map(it => hexString[it] + hexString[it + 1])
                .map(it => parseInt(it, 16))
                .map(it => it / 255.0);
            return RGBAColor.fromArray(rgba as [number, number, number, number])
        }
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
        const hsv: HSVA = {
            hue: hue,
            saturation: saturation,
            value: value,
        };
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => hsv[k] += (v as number))
        const [red, green, blue] = hsvToRgb(hsv.hue, hsv.saturation, hsv.value);
        return RGBAColor.fromArray([red, green, blue, this.alpha]);
    }


    replaceHsv(channels: any): Color {
        const [hue, saturation, value] = this.toHsv();
        const hsv: HSVA = {
            hue: hue,
            saturation: saturation,
            value: value,
        };
        Object.entries(channels)
            .filter(([k, v]) => v !== undefined)
            .forEach(([k, v]) => hsv[k] = (v as number))
        const [red, green, blue] = hsvToRgb(hsv.hue, hsv.saturation, hsv.value);
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
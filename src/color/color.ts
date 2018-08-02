
export function normalize(value: number, min: number = 0, max: number = 1) {
    return Math.min(Math.max(min, value), max);
}


export interface RGBA {
    red?: number;
    green?: number;
    blue?: number;
    alpha?: number;
}

export interface HSVA {
    hue?: number;
    saturation?: number;
    value?: number;
    alpha?: number;
}

export interface Color {

    toRgb(): [number, number, number];

    toRgba(): [number, number, number, number];

    toHsv(): [number, number, number];

    toHex(): string;

    toRgbaFunc(): string;

    toRgbaFunc(): string;

    replaceRgba(rgba: RGBA): Color;

    replaceHsv(hsva: HSVA): Color;

    replaceAlpha(alpha: number);

    addRgba(rgba: RGBA): Color;

    addHsv(hsva: HSVA): Color;

    addAlpha(alpha: number);

    clone(): Color;

    rgbDiff(color: Color): RGBA;

    rgbDistance(color: Color): number;
}

export abstract class BaseColor implements Color {

    abstract toRgb(): [number, number, number];

    abstract toRgba(): [number, number, number, number];

    abstract toHsv(): [number, number, number];

    abstract replaceRgba(rgba: RGBA): Color;

    abstract replaceHsv(hsva: HSVA): Color;

    abstract replaceAlpha(alpha: number);

    abstract addRgba(rgba: RGBA): Color;

    abstract addHsv(hsva: HSVA): Color;

    abstract addAlpha(alpha: number);

    abstract clone(): Color;

    toHex(): string {
        return this.toRgba()
            .map(it => Math.round(it * 255))
            .map(it => it.toString(16).padStart(2, '0'))
            .join('');
    }

    toRgbFunc(): string {
        const values = this.toRgb()
            .map(it => Math.round(it * 255))
            .map(it => it.toString())
            .join(',')
        return `rgb(${values})`;
    }

    toRgbaFunc(): string {
        const rgba = this.toRgba();
        const values = rgba.slice(0, -1)
            .map(it => Math.round(it * 255))
            .concat(rgba.slice(-1))
            .map(it => it.toString())
            .join(',');
        return `rgba(${values})`;
    }

    rgbDiff(color: Color): RGBA {
        const keys = ['red', 'green', 'blue'];
        const rgb = this.toRgb();
        return Array.from(color.toRgb().entries())
            .map(([i, v]) => [i, rgb[i] - v])
            .map(([i, v]) => [keys[i], v])
            .reduce((a, [k, v]) => Object.assign(a, { [k]: v })) as RGBA
    }

    rgbDistance(color: Color): number {
        const rgb = this.toRgb();
        return Array.from(color.toRgb().entries())
            .map(([i, v]) => Math.abs(rgb[i] - v))
            .reduce((a, it) => a + it, 0);
    }

}


/**
 * 
 * 0 <= r, g, b <= 1
 * 
 * @param r 
 * @param g 
 * @param b 
 */
export const rgbToHsv = (r, g, b): [number, number, number] => {

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, v];
}


/**
 * 
 * 0 <= h, s, v <= 1
 * 
 * @param h 
 * @param s 
 * @param v 
 */
export const hsvToRgb = (h: number, s: number, v: number): [number, number, number] => {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [r, g, b]
}
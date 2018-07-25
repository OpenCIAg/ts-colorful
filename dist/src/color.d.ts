export interface Color {
    toRgb(): [number, number, number];
    toRgba(): [number, number, number, number];
    toHsv(): [number, number, number];
    toHex(): string;
    toRgbaFunc(): string;
    toRgbaFunc(): string;
    replaceRgba({ red, green, blue, alpha }: {
        red: any;
        green: any;
        blue: any;
        alpha: any;
    }): Color;
    replaceHsv({ gue, saturation, value, alpha }: {
        gue: any;
        saturation: any;
        value: any;
        alpha: any;
    }): Color;
    replaceAlpha(alpha: number): any;
    addRgba({ red, green, blue, alpha }: {
        red: any;
        green: any;
        blue: any;
        alpha: any;
    }): Color;
    addHsv({ hue, saturation, value }: {
        hue: any;
        saturation: any;
        value: any;
    }): Color;
    addAlpha(alpha: number): any;
    clone(): Color;
}
export declare abstract class BaseColor implements Color {
    abstract toRgb(): [number, number, number];
    abstract toRgba(): [number, number, number, number];
    abstract toHsv(): [number, number, number];
    abstract replaceRgba({ red, green, blue, alpha }: {
        red: any;
        green: any;
        blue: any;
        alpha: any;
    }): Color;
    abstract replaceHsv({ gue, saturation, value, alpha }: {
        gue: any;
        saturation: any;
        value: any;
        alpha: any;
    }): Color;
    abstract replaceAlpha(alpha: number): any;
    abstract addRgba({ red, green, blue, alpha }: {
        red: any;
        green: any;
        blue: any;
        alpha: any;
    }): Color;
    abstract addHsv({ hue, saturation, value, alpha }: {
        hue: any;
        saturation: any;
        value: any;
        alpha: any;
    }): Color;
    abstract addAlpha(alpha: number): any;
    abstract clone(): Color;
    toHex(): string;
    toRgbFunc(): string;
    toRgbaFunc(): string;
}
/**
 *
 * 0 <= r, g, b <= 1
 *
 * @param r
 * @param g
 * @param b
 */
export declare const rgbToHsv: (r: any, g: any, b: any) => [number, number, number];
/**
 *
 * 0 <= h, s, v <= 1
 *
 * @param h
 * @param s
 * @param v
 */
export declare const hsvToRgb: (h: number, s: number, v: number) => [number, number, number];

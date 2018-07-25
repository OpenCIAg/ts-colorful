import { Color, BaseColor } from './color';
export declare class HSVColor extends BaseColor {
    hue: number;
    saturation: number;
    value: number;
    alpha: number;
    constructor(hue: number, saturation: number, value: number, alpha?: number);
    static fromArray([hue, saturation, value, alpha]: [any, any, any, number]): HSVColor;
    toRgb(): [number, number, number];
    toRgba(): [number, number, number, number];
    toHsv(): [number, number, number];
    addRgba(channels: any): Color;
    replaceRgba(channels: any): Color;
    addHsv(channels: any): Color;
    replaceHsv(channels: any): Color;
    clone(): HSVColor;
}

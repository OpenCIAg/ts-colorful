import { Color, BaseColor } from './color';
export declare class RGBAColor extends BaseColor {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    constructor(red: number, green: number, blue: number, alpha?: number);
    static fromArray([red, green, blue, alpha]: [any, any, any, number]): RGBAColor;
    toRgb(): [number, number, number];
    toRgba(): [number, number, number, number];
    toHsv(): [number, number, number];
    addRgba(channels: any): Color;
    replaceRgba(channels: any): Color;
    addHsv(channels: any): Color;
    replaceHsv(channels: any): Color;
    toHex(): string;
    toRgbaFunc(): string;
    clone(): RGBAColor;
}

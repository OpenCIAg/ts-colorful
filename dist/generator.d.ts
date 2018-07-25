import { Color } from './color';
export interface Generator<T> {
    next(): T;
}
export declare abstract class ColorGenerator implements Generator<Color> {
    abstract next(): Color;
}
export declare class RandomHSVColorGenerator implements ColorGenerator {
    protected hue: [number, number];
    protected saturation: [number, number];
    protected value: [number, number];
    constructor(hue?: [number, number], saturation?: [number, number], value?: [number, number]);
    next(): Color;
}

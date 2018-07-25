import { Color } from './color';
import { HSVColor } from './hsv-color';

export interface Generator<T> {
    next(): T;
}

const uniform = ([min, max]) => Math.random() * (max - min) + min

export abstract class ColorGenerator implements Generator<Color> {

    abstract next(): Color;

}

export class RandomHSVColorGenerator implements ColorGenerator {

    constructor(
        protected hue: [number, number] = [0, 1],
        protected saturation: [number, number] = [0.7, 1],
        protected value: [number, number] = [0.5, 1]
    ) {

    }

    next(): Color {
        return new HSVColor(
            uniform(this.hue),
            uniform(this.saturation),
            uniform(this.value),
        )
    }

}
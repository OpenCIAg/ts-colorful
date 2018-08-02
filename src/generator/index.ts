import { Color } from '../color';
import { HSVColor } from '../color';

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

export class PalleteBasedColorGenerator implements ColorGenerator {

    protected counter = 0;

    constructor(
        protected colorPallete: Array<Color>,
        protected delta = 0.02,
    ) {

    }

    modifyColor(baseColor: Color, generation: number) {
        const signal = (generation % 2) ? -1 : 1;
        const delta = Math.ceil(generation / 2) * this.delta * signal;
        return baseColor.addHsv({ value: delta });
    }

    next(): Color {
        const currentCounter = this.counter++;
        const generation = Math.trunc(currentCounter / this.colorPallete.length);
        const index = currentCounter % this.colorPallete.length;
        const baseColor = this.colorPallete[index];
        return this.modifyColor(baseColor, generation);
    }
}
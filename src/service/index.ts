import { Color } from '../color';
import { ColorGenerator } from '../generator';

export class ColorService {

    protected colors: { [k: string]: Color } = {};

    constructor(
        private colorGenerator: ColorGenerator
    ) {

    }

    makeColor(resource: string = null): Color {
        if (resource === null) {
            return this.colorGenerator.next();
        }
        if (resource in this.colors) {
            return this.colors[resource];
        }
        const color = this.colorGenerator.next();
        this.colors[resource] = color;
        return color;
    }


}
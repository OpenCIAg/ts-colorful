import { Color } from './color';
import { ColorGenerator } from './generator';
export declare class ColorService {
    private colorGenerator;
    protected colors: {
        [k: string]: Color;
    };
    constructor(colorGenerator: ColorGenerator);
    makeColor(resource?: string): Color;
}

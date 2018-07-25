import * as padStart from 'string.prototype.padstart';
import * as entries from 'object.entries';

padStart.shim();
entries.shim();

export { Color, BaseColor, RGBA, HSVA } from './color';
export { RGBAColor } from './rgb-color';
export { HSVColor } from './hsv-color';
export { Generator, ColorGenerator, RandomHSVColorGenerator } from './generator';
export { ColorService } from './color.service';
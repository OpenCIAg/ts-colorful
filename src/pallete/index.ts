import { Color } from '../';
import { RGBAColor } from '../color';

export type RawPallete = Array<string>;
export type RawNamedPallete = { [name: string]: string };
export type Pallete = Array<Color>;
export type NamedPallete = { [name: string]: Color }



export const NEBULAR_COSMIC = {
    primary: '#7659FF',
    warning: '#FFA100',
    success: '#00D977',
    info: '#0088FF',
    danger: '#FF386A',
}

export const NEBULAR_LIGHT = {
    primary: '#8A7FFF',
    warning: '#FFA100',
    success: '#40DC7E',
    info: '#4CA6FF',
    danger: '#FF4C6A',
}

export const NUBULAR_CORPORATE = {
    primary: '#73A1FF',
    warning: '#FFA36B',
    success: '#5DCFE3',
    info: '#BA7FEC',
    danger: '#FF6B83',
}

export class PalleteFactory {

    makeFromObject(rawNamedPallete: RawNamedPallete): NamedPallete {
        return Object.entries(rawNamedPallete)
            .map(([k, v]) => [k, RGBAColor.fromHexString(v)] as [string, Color])
            .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {})
    }

    makeFromArray(rawPallete: RawPallete | RawNamedPallete): Pallete {
        return Object.values(rawPallete)
            .map(it => RGBAColor.fromHexString(it));
    }


}
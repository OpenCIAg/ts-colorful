import { expect } from 'chai';
import { PalleteBasedColorGenerator } from '../src/generator';
import { PalleteFactory, NEBULAR_COSMIC } from '../src/pallete';


describe('PalleteBasedColorGenerator', () => {
    it('new PalleteBasedColorGenerator', () => {
        new PalleteBasedColorGenerator([]);
    })
    it('next', () => {
        const palleteFactory = new PalleteFactory();
        const pallete = palleteFactory.makeFromArray(NEBULAR_COSMIC);
        const colorGenerator = new PalleteBasedColorGenerator(pallete, 0.02);
        for (let i = 0; i < pallete.length; i += 1) {
            const currentColor = colorGenerator.next();
            expect(currentColor.toRgbaFunc()).to.equal(pallete[i].toRgbaFunc());
        }
        for (let i = 0; i < pallete.length; i += 1) {
            const currentColor = colorGenerator.next();
            expect(currentColor.rgbDistance(pallete[i]) < 0.05).to.be.true
        }
        for (let i = 0; i < pallete.length; i += 1) {
            const currentColor = colorGenerator.next();
            expect(currentColor.rgbDistance(pallete[i]) < 0.05).to.be.true
        }
    })
})
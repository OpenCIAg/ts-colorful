import {  RGBAColor } from '../src/rgb-color';
import { expect } from 'chai';


describe('RGBAColor',()=>{
    it('new RGBAColor',()=>{
        const rgbColor = new RGBAColor(0,0,0);
        expect(rgbColor).to.not.equal(null);
    })
    it('toRGB',() => {
      const rgbColor = new RGBAColor(0,0,0);
      expect(rgbColor.toRgb()).to.deep.equal([0,0,0]);  
    })
    it('toRGBA',() => {
      const rgbColor = new RGBAColor(0,0,0);
      expect(rgbColor.toRgba()).to.deep.equal([0,0,0,1]);  
    })
    it('toHSV',() => {
      const rgbColor = new RGBAColor(0,0,0);
      expect(rgbColor.toHsv()).to.deep.equal([0,0,0]);  
    })
    it('toHEX',() => {
      const rgbColor = new RGBAColor(0,0,0);
      expect(rgbColor.toHex()).to.equal('000000ff');  
    })
    it('toRgbaFunc',() => {
      const rgbColor = new RGBAColor(0,0,0);
      expect(rgbColor.toRgbaFunc()).to.equal('rgba(0,0,0,1)');  
    })
    it('toRgbFunc',() => {
      const rgbColor = new RGBAColor(0,0,0);
      expect(rgbColor.toRgbFunc()).to.equal('rgb(0,0,0)');  
    })
});
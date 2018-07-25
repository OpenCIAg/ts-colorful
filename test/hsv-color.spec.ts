import {  HSVColor } from '../src/hsv-color';
import { expect } from 'chai';

describe('HSVColor',()=>{
    it('new HSVColor',()=>{
        const hsvColor = new HSVColor(0,0,0);
        expect(hsvColor).to.not.equal(null);
    })
    it('toRGB',() => {
      const hsvColor = new HSVColor(0,0,0);
      expect(hsvColor.toRgb()).to.deep.equal([0,0,0]);  
    })
    it('toRGBA',() => {
      const hsvColor = new HSVColor(0,0,0);
      expect(hsvColor.toRgba()).to.deep.equal([0,0,0,1]);  
    })
    it('toHSV',() => {
      const hsvColor = new HSVColor(0,0,0);
      expect(hsvColor.toHsv()).to.deep.equal([0,0,0]);  
    })
    it('toHEX',() => {
      const hsvColor = new HSVColor(0,0,0);
      expect(hsvColor.toHex()).to.equal('000000ff');  
    })
    it('toRgbaFunc',() => {
      const hsvColor = new HSVColor(0,0,0);
      expect(hsvColor.toRgbaFunc()).to.equal('rgba(0,0,0,1)');  
    })
    it('toRgbFunc',() => {
      const hsvColor = new HSVColor(0,0,0);
      expect(hsvColor.toRgbFunc()).to.equal('rgb(0,0,0)');  
    })
});
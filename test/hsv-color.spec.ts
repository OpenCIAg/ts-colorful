import { HSVColor } from '../src/index';
import { RGBAColor } from '../src/index';
import { expect } from 'chai';

describe('HSVColor', () => {
  it('new HSVColor', () => {
    const hsvColor = new HSVColor(0, 0, 0);
    expect(hsvColor).to.not.equal(null);
  })
  it('toRgb', () => {
    const hsvColor = new HSVColor(0, 0, 0);
    expect(hsvColor.toRgb()).to.deep.equal([0, 0, 0]);
  })
  it('toRgba', () => {
    const hsvColor = new HSVColor(0, 0, 0);
    expect(hsvColor.toRgba()).to.deep.equal([0, 0, 0, 1]);
  })
  it('toHsv', () => {
    const hsvColor = new HSVColor(0, 0, 0);
    expect(hsvColor.toHsv()).to.deep.equal([0, 0, 0]);
  })
  it('toHex', () => {
    const hsvColor = new HSVColor(0, 0, 0);
    expect(hsvColor.toHex()).to.equal('000000ff');
  })
  it('toRgbaFunc', () => {
    const hsvColor = new HSVColor(0, 0, 0);
    expect(hsvColor.toRgbaFunc()).to.equal('rgba(0,0,0,1)');
  })
  it('toRgbFunc', () => {
    const hsvColor = new HSVColor(0, 0, 0);
    expect(hsvColor.toRgbFunc()).to.equal('rgb(0,0,0)');
  })
  it('toRgb from red', () => {
    const rgbRed = new RGBAColor(1, 0, 0);
    const [h, s, v] = rgbRed.toHsv()
    const hsvRed = HSVColor.fromArray([h, s, v])
    expect(hsvRed.toRgb()).to.deep.equal(rgbRed.toRgb())
  })
  it('toRgb from green', () => {
    const rgbGreen = new RGBAColor(0, 1, 0);
    const [h, s, v] = rgbGreen.toHsv()
    const hsvRed = HSVColor.fromArray([h, s, v])
    expect(hsvRed.toRgb()).to.deep.equal(rgbGreen.toRgb())
  })
  it('toRgb from blue', () => {
    const rgbBlue = new RGBAColor(0, 0, 1);
    const [h, s, v] = rgbBlue.toHsv()
    const hsvRed = HSVColor.fromArray([h, s, v])
    expect(hsvRed.toRgb()).to.deep.equal(rgbBlue.toRgb())
  })
});
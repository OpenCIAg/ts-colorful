import { RGBAColor } from '../src/index';
import { RGBA } from '../src/index';
import { expect } from 'chai';

const black = new RGBAColor(0, 0, 0);
const white = new RGBAColor(1, 1, 1);


describe('RGBAColor', () => {
  it('new RGBAColor', () => {
    const rgbColor = new RGBAColor(0, 0, 0);
    expect(rgbColor).to.not.equal(null);
  })
  it('toRGB', () => {
    const rgbColor = new RGBAColor(0, 0, 0);
    expect(rgbColor.toRgb()).to.deep.equal([0, 0, 0]);
  })
  it('toRGBA', () => {
    const rgbColor = new RGBAColor(0, 0, 0);
    expect(rgbColor.toRgba()).to.deep.equal([0, 0, 0, 1]);
  })
  it('toHSV', () => {
    const rgbColor = new RGBAColor(0, 0, 0);
    expect(rgbColor.toHsv()).to.deep.equal([0, 0, 0]);
  })
  it('toHEX', () => {
    const rgbColor = new RGBAColor(0, 0, 0);
    expect(rgbColor.toHex()).to.equal('000000ff');
  })
  it('toRgbaFunc', () => {
    const rgbColor = new RGBAColor(0, 0, 0);
    expect(rgbColor.toRgbaFunc()).to.equal('rgba(0,0,0,1)');
  })
  it('toRgbFunc', () => {
    const rgbColor = new RGBAColor(0, 0, 0);
    expect(rgbColor.toRgbFunc()).to.equal('rgb(0,0,0)');
  })
  it('toHsv', () => {
    const rgbRed = new RGBAColor(1, 0, 0);
    const hsvRed = rgbRed.toHsv()
    expect(hsvRed).to.deep.equal([0, 1, 1]);
  })
  it('addRgb', () => {
    const red: RGBA = { red: 1 };
    const green: RGBA = { green: 1 };
    const blue: RGBA = { blue: 1 };
    const white = black.addRgba(red).addRgba(green).addRgba(blue);
    expect(white.toRgb()).to.deep.equal([1, 1, 1]);
  })
  it('fromHexString parseBlack with 6 digits', () => {
    const parsed = RGBAColor.fromHexString('#000000');
    expect(parsed.toRgb()).to.deep.equal(black.toRgb());
  })
  it('fromHexString parseBlack with 8 digits', () => {
    const parsed = RGBAColor.fromHexString('#000000FF');
    expect(parsed.toRgba()).to.deep.equal(black.toRgba());
  })
  it('fromHexString parseBlack with 3 digits', () => {
    const parsed = RGBAColor.fromHexString('#000');
    expect(parsed.toRgb()).to.deep.equal(black.toRgb());
  })
  it('fromHexString parseBlack with 4 digits', () => {
    const parsed = RGBAColor.fromHexString('#000F');
    expect(parsed.toRgba()).to.deep.equal(black.toRgba());
  })
  it('fromHexString parseWhite with 6 digits', () => {
    const parsed = RGBAColor.fromHexString('#FFFFFF');
    expect(parsed.toRgb()).to.deep.equal(white.toRgb());
  })
  it('fromHexString parseWhite with 8 digits', () => {
    const parsed = RGBAColor.fromHexString('#FFFFFFFF');
    expect(parsed.toRgba()).to.deep.equal(white.toRgba());
  })
  it('fromHexString parseWhite with 3 digits', () => {
    const parsed = RGBAColor.fromHexString('#FFF');
    expect(parsed.toRgb()).to.deep.equal(white.toRgb());
  })
  it('fromHexString parseWhite with 4 digits', () => {
    const parsed = RGBAColor.fromHexString('#FFFF');
    expect(parsed.toRgba()).to.deep.equal(white.toRgba());
  })
});
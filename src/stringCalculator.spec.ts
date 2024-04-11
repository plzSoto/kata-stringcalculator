import { stringCalc } from './stringCalculator';

describe('stringCalc', () => {
  it('should return 0 when given an empty string', () => {
    expect(stringCalc('')).toBe(0);
  });

  it('should return 5', () => {
    expect(stringCalc('3 + 2')).toBe(5);
  });

  it('should return 0', () => {
    expect(stringCalc('2 - 2')).toBe(0);
  });

  it('should return 4', () => {
    expect(stringCalc('2 * 2')).toBe(4);
  });

  it('should return 1', () => {
    expect(stringCalc('3 / 3')).toBe(1);
  });

  it('should return Invalid input', () => {
    expect(stringCalc('10001 + 1')).toBe('Invalid input');
  });

  it('should return Invalid input', () => {
    expect(stringCalc('-50 + 1')).toBe('Invalid input');
  });
});

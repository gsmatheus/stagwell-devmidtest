import {calculateResult} from '.';

describe('Question 1', () => {
  describe('calculateResult', () => {
    it('should return the correct result when the operator is "+"', () => {
      expect(
        calculateResult({firstNumber: 1, secondNumber: 2, operator: '+'})
      ).toEqual({result: 3});
    });

    it('should return the correct result when the operator is "-"', () => {
      expect(
        calculateResult({firstNumber: 1, secondNumber: 2, operator: '-'})
      ).toEqual({result: -1});
    });

    it('should return the correct result when the operator is "*"', () => {
      expect(
        calculateResult({firstNumber: 1, secondNumber: 2, operator: '*'})
      ).toEqual({result: 2});
    });

    it('should return the correct result when the operator is "/"', () => {
      expect(
        calculateResult({firstNumber: 1, secondNumber: 2, operator: '/'})
      ).toEqual({result: 0.5});
    });

    it('should throw an error when the operator is invalid', () => {
      expect(() =>
        calculateResult({firstNumber: 1, secondNumber: 2, operator: 'invalid'})
      ).toThrowError('Invalid operator');
    });
  });
});

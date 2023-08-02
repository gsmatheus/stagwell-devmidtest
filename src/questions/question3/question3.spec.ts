import {calculateFactorial} from '.';

describe('Question 3 - Factorial', () => {
  it('Should return 1 for factorial of 0', () => {
    expect(calculateFactorial({number: 0})).toEqual({factorial: 1});
  });

  it('Should return 1 for factorial of 1', () => {
    expect(calculateFactorial({number: 1})).toEqual({factorial: 1});
  });

  it('Should return the correct factorial for positive numbers', () => {
    expect(calculateFactorial({number: 2})).toEqual({factorial: 2});
    expect(calculateFactorial({number: 3})).toEqual({factorial: 6});
    expect(calculateFactorial({number: 4})).toEqual({factorial: 24});
    expect(calculateFactorial({number: 10})).toEqual({factorial: 3628800});
  });

  it('Should throw an error for negative numbers', () => {
    expect(() => calculateFactorial({number: -1})).toThrowError(
      'Factorial is not defined for negative numbers.'
    );
  });
});

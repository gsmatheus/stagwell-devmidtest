import {isPrime, printFirstPrimeNumbers} from '.';

describe('Question 2', () => {
  describe('Function isPrime', () => {
    it('Should return false for numbers less than 2', () => {
      expect(isPrime({number: 1})).toHaveProperty('isPrime', false);
      expect(isPrime({number: 0})).toHaveProperty('isPrime', false);
      expect(isPrime({number: -1})).toHaveProperty('isPrime', false);
    });

    it('Should return true for prime numbers', () => {
      expect(isPrime({number: 2})).toHaveProperty('isPrime', true);
      expect(isPrime({number: 3})).toHaveProperty('isPrime', true);
      expect(isPrime({number: 29})).toHaveProperty('isPrime', true);
    });

    it('Should return false for non-prime numbers', () => {
      expect(isPrime({number: 4})).toHaveProperty('isPrime', false);
      expect(isPrime({number: 6})).toHaveProperty('isPrime', false);
      expect(isPrime({number: 30})).toHaveProperty('isPrime', false);
    });
  });

  describe('Function printFirstPrimeNumbers', () => {
    it('Should return the first 3 prime numbers', () => {
      expect(printFirstPrimeNumbers({count: 3})).toHaveProperty(
        'number',
        [2, 3, 5]
      );
    });

    it('Should return the first 10 prime numbers', () => {
      expect(printFirstPrimeNumbers({count: 10})).toHaveProperty(
        'number',
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
      );
    });
  });
});

import {countVowels} from '.';

describe('Question 6 - Count Vowels', () => {
  describe('Function countVowels', () => {
    it('Should return the number of vowels in a string', () => {
      expect(countVowels({text: 'hello'})).toHaveProperty('count', 2);
      expect(countVowels({text: 'world'})).toHaveProperty('count', 1);
      expect(countVowels({text: 'aeiou'})).toHaveProperty('count', 5);
      expect(countVowels({text: 'hll wrld'})).toHaveProperty('count', 0);
      expect(countVowels({text: 'stagwell'})).toHaveProperty('count', 2);
    });
  });
});

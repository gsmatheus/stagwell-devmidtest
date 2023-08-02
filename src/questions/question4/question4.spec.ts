import {isPalindrome} from '.';

describe('Question 4 - Palindrome', () => {
  describe('Function isPalindrome', () => {
    it('Should return true for palindromes', () => {
      expect(isPalindrome({word: 'racecar'})).toHaveProperty(
        'is_palindrome',
        true
      );
      expect(isPalindrome({word: 'madam'})).toHaveProperty(
        'is_palindrome',
        true
      );
      expect(isPalindrome({word: 'mom'})).toHaveProperty('is_palindrome', true);
    });

    it('Should return false for non-palindromes', () => {
      expect(isPalindrome({word: 'hello'})).toHaveProperty(
        'is_palindrome',
        false
      );
      expect(isPalindrome({word: 'world'})).toHaveProperty(
        'is_palindrome',
        false
      );
      expect(isPalindrome({word: 'javascript'})).toHaveProperty(
        'is_palindrome',
        false
      );
    });

    it('Should return true for empty strings', () => {
      expect(isPalindrome({word: ''})).toHaveProperty('is_palindrome', true);
    });
  });
});

interface IPalindromeRequest {
  word: string;
}

interface IPalindromeResponse {
  is_palindrome: boolean;
  reversed_word: string;
}

export function isPalindrome({word}: IPalindromeRequest): IPalindromeResponse {
  const reversedWord = word.split('').reverse().join('');
  return {
    is_palindrome: word === reversedWord,
    reversed_word: reversedWord,
  };
}

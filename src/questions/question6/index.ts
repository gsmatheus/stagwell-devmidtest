interface ICountVowelsRequest {
  text: string;
}

interface ICountVowelsResponse {
  count: number;
}

export function countVowels({text}: ICountVowelsRequest): ICountVowelsResponse {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
      count++;
    }
  }

  return {count};
}

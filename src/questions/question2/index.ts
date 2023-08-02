interface IPrimeRequest {
  number: number;
}

interface IPrimeResponse {
  isPrime: boolean;
}

export function isPrime({number}: IPrimeRequest): IPrimeResponse {
  if (number < 2) {
    return {isPrime: false};
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return {isPrime: false};
    }
  }

  return {isPrime: true};
}

interface IPrintFirstPrimeNumbersRequest {
  count: number;
}

interface IPrintFirstPrimeNumbersResponse {
  number: number[];
}

export function printFirstPrimeNumbers({
  count,
}: IPrintFirstPrimeNumbersRequest): IPrintFirstPrimeNumbersResponse {
  const numbers: number[] = [];

  let i = 2;
  while (numbers.length < count) {
    if (isPrime({number: i}).isPrime) {
      numbers.push(i);
    }
    i++;
  }

  return {number: numbers};
}

interface IFactorialRequest {
  number: number;
}

interface IFactorialResponse {
  factorial: number;
}

export function calculateFactorial({
  number,
}: IFactorialRequest): IFactorialResponse {
  if (number < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return {factorial: result};
}

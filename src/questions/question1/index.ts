interface ICalculateResultRequest {
  firstNumber: number;
  secondNumber: number;
  operator: string;
}

interface ICalculateResultResponse {
  result: number;
}

export function calculateResult({
  firstNumber,
  secondNumber,
  operator,
}: ICalculateResultRequest): ICalculateResultResponse {
  // eval(`${firstNumber} ${operator} ${secondNumber}`);

  switch (operator) {
    case '+':
      return {result: firstNumber + secondNumber};
    case '-':
      return {result: firstNumber - secondNumber};
    case '*':
      return {result: firstNumber * secondNumber};
    case '/':
      return {result: firstNumber / secondNumber};
    default:
      throw new Error('Invalid operator');
  }
}

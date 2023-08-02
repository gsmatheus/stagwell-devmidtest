interface ICalculeAverageRequest {
  numbers: number[];
}

interface ICalculeAverageResponse {
  average: number;
}

export function calculeAverage({
  numbers,
}: ICalculeAverageRequest): ICalculeAverageResponse {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  return {average};
}

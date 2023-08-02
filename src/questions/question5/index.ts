interface IGenerateMultiplicationTableRequest {
  count: number;
}

interface IGenerateMultiplicationTableResponse {
  table: number[];
}

export function generateMultiplicationTable({
  count,
}: IGenerateMultiplicationTableRequest): IGenerateMultiplicationTableResponse {
  const table: number[] = [];

  for (let i = 1; i <= 10; i++) {
    table.push(count * i);
  }

  return {table};
}

interface IInvestmentRequest {
  amount: number;
  interest: number;
  months: number;
}

interface IInvestmentResponse {
  total: number;
}

export function calculateInvestment({
  amount,
  interest,
  months,
}: IInvestmentRequest): IInvestmentResponse {
  const monthlyInterest = (interest / 100) * amount;

  let total = amount;
  for (let i = 0; i < months; i++) {
    total += monthlyInterest;
  }

  return {total};
}

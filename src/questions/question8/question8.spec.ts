import {calculateInvestment} from '.';

describe('Question 8 - Calculate Investment', () => {
  describe('Function calculateInvestment', () => {
    it('Should return the total and monthly interest', () => {
      expect(
        calculateInvestment({amount: 1000, interest: 10, months: 1})
      ).toHaveProperty('total', 1100);

      expect(
        calculateInvestment({amount: 1000, interest: 10, months: 2})
      ).toHaveProperty('total', 1200);

      expect(
        calculateInvestment({amount: 1000, interest: 10, months: 3})
      ).toHaveProperty('total', 1300);
    });

    it('Should return the total and monthly interest for different interest rates', () => {
      expect(
        calculateInvestment({amount: 1000, interest: 5, months: 1})
      ).toHaveProperty('total', 1050);

      expect(
        calculateInvestment({amount: 1000, interest: 15, months: 1})
      ).toHaveProperty('total', 1150);
    });

    it('Should return not change the amount if the interest is 0', () => {
      expect(
        calculateInvestment({amount: 1000, interest: 0, months: 1})
      ).toHaveProperty('total', 1000);
    });
  });
});

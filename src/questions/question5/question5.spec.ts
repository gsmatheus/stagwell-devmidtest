import {generateMultiplicationTable} from '.';

describe('Question 5 - Multiplication Table', () => {
  describe('Function generateMultiplicationTable', () => {
    it('Should return the multiplication table for 3', () => {
      expect(generateMultiplicationTable({count: 3})).toHaveProperty(
        'table',
        [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
      );
    });

    it('Should return the multiplication table for 7', () => {
      expect(generateMultiplicationTable({count: 7})).toHaveProperty(
        'table',
        [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
      );
    });
  });
});

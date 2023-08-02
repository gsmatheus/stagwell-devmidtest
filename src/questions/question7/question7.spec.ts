import {calculeAverage} from '.';

describe('Question 7 - Calculate Average', () => {
  describe('Function calculeAverage', () => {
    it('Should return the average of the numbers', () => {
      expect(calculeAverage({numbers: [1, 2, 3]})).toHaveProperty('average', 2);
      expect(calculeAverage({numbers: [2, 4, 6]})).toHaveProperty('average', 4);
      expect(calculeAverage({numbers: [1, 3, 5]})).toHaveProperty('average', 3);
      expect(calculeAverage({numbers: [1, 2, 3, 4, 5]})).toHaveProperty(
        'average',
        3
      );
    });
  });
});

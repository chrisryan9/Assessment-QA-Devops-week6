const {shuffleArray} = require('./utils')

describe("shuffleArray", () => {
    test("it should return an array", () => {
      expect(shuffleArray([1,2,3])).toBeInstanceOf(Array);
    });
    
    test("it should return an array of the same length as the argument sent in", () => {
      expect(shuffleArray([1,2,3]).length).toEqual([1,2,3].length);
    });
    
    test("it should contain all the same items as the argument sent in", () => {
      expect(shuffleArray([1,2,3]).sort()).toEqual([1,2,3].sort());
    });
    
    test("it should shuffle the items around", () => {
      const original = [1,2,3];
      expect(shuffleArray(original)).not.toEqual(original);
    });
  });
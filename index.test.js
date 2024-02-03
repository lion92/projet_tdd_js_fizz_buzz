const fizz_buzz = require('./index');

describe("FizzBuzz", () => {
    test('should return ture when true', () => {
        expect(true).toBe(true);
    });
    test('should return chaine vide if the result is 0', () => {
        //given
        let number=0
        //when
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("");
    });
    test('should return Fizz if the result is 3', () => {
        //given
        let number=3
        //when
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("Fizz");
    });
    test('should return Buzzz if the result is 5', () => {
        //given
        let number=5
        //when
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("Buzz");
    });

});
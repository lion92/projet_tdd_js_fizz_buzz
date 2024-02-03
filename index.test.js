const fizz_buzz = require('./index');

describe("FizzBuzz", () => {
    test('should return ture when true', () => {
        expect(true).toBe(true);
    });
    test('should return FizzBuzz if the number is 0', () => {
        //given
        let number=0
        //when
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("FizzBuzz");
    });
    test('should return Fizz if the number is 3', () => {
        //given
        let number=3
        //when
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("Fizz");
    });
    test('should return Buzzz if the number is 5', () => {
        //given
        let number=5
        //when
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("Buzz");
    });
    test('should return Fizz if the number is 6', () => {
        //given
        let number=6
        //when
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("Fizz");
    });
    test('should return Buzz if the number is 10', () => {
        //given
        let number=10
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("Buzz");
    });
    test('should return FizzBuzz if the number is 15', () => {
        //given
        let number=15
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("FizzBuzz");
    });
    test('should return FizzBuzz if the number is 300', () => {
        //given
        let number=15
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("FizzBuzz");
    });
    test('should chaine vide if the number is null', () => {
        //given
        let number=null
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("");
    });
    test('should chaine vide if the number is undefined', () => {
        //given
        let number=undefined
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("");
    });
    test('should chaine vide if the number is letter', () => {
        //given
        let number="letter"
        let fizzBuzz=fizz_buzz(number)

        //then
        expect(fizzBuzz).toBe("");
    });

});
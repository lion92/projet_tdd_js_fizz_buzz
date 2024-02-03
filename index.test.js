const fizz_buzz = require('./index');

describe("FizzBuzz", () => {
    test('should return ture when true', () => {
        expect(true).toBe(true);
    });
    test('should return chaine vide if the result is 0', () => {
        //given
        let number=0
        //when
        let reponse=fizz_buzz(0)

        //then
        expect(reponse).toBe("");
    });

});
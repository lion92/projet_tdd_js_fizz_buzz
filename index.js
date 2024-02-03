function fizz_buzz(number) {
    if(number==null){
        return ""
    }
    if (number % 5 == 0 && number % 3 == 0) {
        return "FizzBuzz"
    }
    if (number % 3 == 0) {
        return "Fizz"
    }
    if (number % 5 == 0) {
        return "Buzz"
    }
    return ""

}

module.exports = fizz_buzz;
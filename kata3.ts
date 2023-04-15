export class Kata3 {
    // ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.
    // An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.
    public isISBN10Valid(isbn: string): boolean {
        //if the length of the input string is not 10, return false 
        if (isbn.length != 10) {
            return false;
        }
        //if the first nine chars contains a character that is not in [0-9], return false
        if (isbn.substring(0, 9).match(/[^0-9]/)) {
            return false;
        }
        //if the last char is not in [0-9X], return false
        if (isbn[9].match(/[^0-9X]/)) {
            return false;
        }
        //sum of the digits multiplied by their position. If find X, replace it with 10
        let sum = 0;
        for (let i = 0; i < isbn.length; i++) {
            let digit = isbn[i];
            if (digit == "X") {
                digit = "10";
            }
            // log the digit and the position
            console.log(digit, i + 1);
            sum += parseInt(digit) * (i + 1);
        }
        //log sum and input string
        console.log(sum, isbn);


        //if the sum modulo 11 is 0, return true, else return false
        return sum % 11 == 0;
    }



    //MAKE ROBUST + CLEAN TEST
    public isISBN10Valid_2(isbn: string): boolean {
        isbn = isbn.trim();
        if (isbn.length != 10) {
            return false;
        }
        if (isbn.substring(0, 9).match(/[^0-9]/)) {
            return false;
        }
        if (isbn[9].match(/[^0-9X]/)) {
            return false;
        }
        let sum = 0;
        for (let i = 0; i < isbn.length; i++) {
            let digit = isbn[i];
            if (digit == "X") {
                digit = "10";
            }
            sum += parseInt(digit) * (i + 1);
        }
        return sum % 11 == 0;
    }

    // NOTA ALESSIO: try "expain code" on isISBN10Valid_2 method

    /* Here is the explanation for the code above:
1. We trim the input string to remove any whitespace before and after the ISBN number.
2.  We check the length of the string.  If it is not 10 characters long, then it is not a valid ISBN-10 number.
3.  We check that the first 9 characters are digits 0-9.  If not, then it is not a valid ISBN-10 number.
4.  We check that the last character is a digit or an X.  If not, then it is not a valid ISBN-10 number.
5.  We compute the sum of the 10 digits multiplied by their position in the string.  We do this by using a for loop to iterate over the digits of the string.
6.  We check if the last character is an X, and if so, we convert it to 10 so that it can be added to the sum.  This is because X is equivalent to 10 in a ISBN-10 number.
7.  We convert the digit from a string to an integer and multiply it by its position in the string, and then add it to the sum.
8.  We return true if the sum is divisible by 11, and false otherwise. */

}
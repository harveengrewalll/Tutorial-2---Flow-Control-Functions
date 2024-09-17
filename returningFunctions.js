// Task 2.1: Number format converter

/**
 * Takes a number that's the base of the format that the caller wants to convert to
 * - 2 for binary
 * - 8 for Octal
 * - 16 for Hexadecimal
 * 
 * Retruns a function that converts a number from the given fromat to binary.
 */
function getNumberFormatConverter(base)
{
    switch (base)
    {
        // Complete the code so that 
    }
    
   
    /** Define a function that takes a decimal number and return a string with the binary format of that number
     * 
     * In order to convert a number from decimal representation to binary representation we repeatedly divide the number by 2, the integer part of the division is kept for the next round while the remainder is appended to the left of the previous reminders to form the binary representation
        For example: lets take the number 15 in order to find the binary representation / take the following steps:
        •	15 / 2 = the integer part of the result is: 7   the remainder is 1
            -	We keep the remainder aside to append the coming remainders to it (1)
        •	7 / 2 = the integer part of the result is: 3 and the remainder is 1
            -	We append this one to the left of the previous one, so the current binary representation is (11)
        •	3 / 2 = the integer result is: 1 and the remainder is also 1
            -	We append this one to the left of the previous remember so the current binary representation would be (111)
        •	1 / 2 = the integer result is : 0 and the  remainder is 1
            -	The current binary representation would be (1111)
        •	0 / 2 = 0 ==> this is the end
        */

    //Hint: You can use Math.floor() function to get the integer part of the division
      

    /** Define a function that takes a decimal number and return a string with the octal format of that number
     * 
     *   Converting decimal numbers to octal format is similar to the binary process
     *   except that instead of dividing by 2 you'll need to divide by 8
    */
      

    /** Define a function that takes a decimal number and return a string with the octal format of that number
     *
     * The process of converting decimal to hexadecimal is the same as binary 
     * except that you'll have to divide by 16 
     * but because we need 16 differnet symbols, 5 letters are added to the 10 digists we have in the decimal system
     * 10 => A, 11 => B, 12 => C, 13 => D, 14 => E and 15 => F
    */
}

let DtoB  =getNumberFormatConverter(/* call the getNumberFormat so that it would return the decimal to binary converter */); 
let DtoO = getNumberFormatConverter(/* call the getNumberFormat so that it would return the decimal to octal converter */);
let DtoHex = getNumberFormatConverter(/* call the getNumberFormat so that it would return the decimal to hexadecimal converter*/); 


// don't change the three lines below
module.exports.DtoB = DtoB;
module.exports.DtoO = DtoO;
module.exports.DtoHex = DtoHex;
// Task 2.1: Number format converter

/**
 * Takes a number that's the base of the format that the caller wants to convert to
 * - 2 for binary
 * - 8 for Octal
 * - 16 for Hexadecimal
 * 
 * Returns a function that converts a number from the given fromat to binary.
 */
function getNumberFormatConverter(base)
{
    switch (base)
    {
        case 2: // Binary
            return function (number) {
                return number.toString(2);
            };
        
        case 8: // Octal
            return function (number) {
                return number.toString(8);
            };

        case 16: // Hexadecimal
            return function (number) {
                return number.toString(16).toUpperCase();
            }; 
            
        default:
            return function (number) {
                throw new Error('Invalid base');
            };    
    }
}
   
    /** Define a function that takes a decimal number and return a string with the binary format of that number **/
function decimalToBinary(number) {
    let result = '';
    while (number > 0) {
        result = (number % 2) + result; // Get remainder and prepend to the result
        number = Math.floor(number / 2); // Get the integer part
    }
    return result || '0'; // If number is 0, return '0'
}

    /** Define a function that takes a decimal number and return a string with the octal format of that number
     * 
     *   Converting decimal numbers to octal format is similar to the binary process
     *   except that instead of dividing by 2 you'll need to divide by 8
    */
function decimalToOctal(number) {
    let result = '';
    while (number > 0) {
        result = (number % 8) + result; // Get remainder and prepend to the result
        number = Math.floor(number / 8); // Get the integer part
        }
    return result || '0'; // If number is 0, return '0'
    }  

    /** Define a function that takes a decimal number and return a string with the hexadecimal format of that number
     *
     * The process of converting decimal to hexadecimal is the same as binary 
     * except that you'll have to divide by 16 
     * but because we need 16 differnet symbols, 5 letters are added to the 10 digists we have in the decimal system
     * 10 => A, 11 => B, 12 => C, 13 => D, 14 => E and 15 => F
    */

function decimalToHexadecimal(number) {
        const hexDigits = "0123456789ABCDEF";
        let result = '';
        while (number > 0) {
            result = hexDigits[number % 16] + result; // Get remainder and prepend corresponding hex digit
            number = Math.floor(number / 16); // Get the integer part
        }
        return result || '0'; // If number is 0, return '0'
    }

let DtoB = getNumberFormatConverter(2); 
let DtoO = getNumberFormatConverter(8);
let DtoHex = getNumberFormatConverter(16); 

// don't change the three lines below
module.exports.DtoB = DtoB;
module.exports.DtoO = DtoO;
module.exports.DtoHex = DtoHex;
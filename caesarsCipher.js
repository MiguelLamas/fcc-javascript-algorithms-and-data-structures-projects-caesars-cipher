/*

Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Plan
1. Create an alphabet array as a guide to reference. Comment Out.
2. Create a for loop to itereate through str.
3. Use charCodeAt() method to give you an ASCII value of a letter (www.asciitable.com)
4. We need to move store converted ascii number into a variable and add conditional statement
to check letters in string and whether we are moving 13 places to left or right of letter in the alphabet.
5. If ASCII letter falls between 65 (A) AND 77 (M) we +13 places to the right.
6. If ASCII letter falls between 78 (N) AND 90 (Z) we -13 places to the left.
7. Depending on outcome for each letter passed, the output is to convert the ASCII back into a letter/string using String.fromCharCode().
and add to the result variable to return.
8. Do not convert non-alphabetical characters, we need to pass them on, if they don't fall under first 2 conditional statements
just pass on to result += str[i];

*/

// ALPHABET ARRAY FOR REFERENCE
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] =
//["65" "66" "67" "68" "69" "70" "71" "72" "73" "74" "75" "76" "77" "78" "79" "80" "81" "82" "83" "84" "85" "86" "87" "88" "89" "90"]

function rot13(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        if (asciiNum >= 65 && asciiNum <= 77) {
            result += String.fromCharCode(asciiNum + 13);
        } else if (asciiNum >= 78 && asciiNum <= 90) {
            result += String.fromCharCode(asciiNum - 13);
        } else {
            result += str[i];
        }
    }
    return result;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
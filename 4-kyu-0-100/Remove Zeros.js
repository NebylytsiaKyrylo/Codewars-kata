/*
https://www.codewars.com/kata/52aae14aa7fd03d57400058f

Write a function that takes an array of values and moves all elements that are
zero to the end of the array, otherwise preserving the order of the array.
The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements
that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not
allowed to use any Array.prototype or Object.prototype methods.
*/

function removeZeros(array) {
  let elements = [],
    zeros = [];

  for (const element of array) {
    if (element === 0 || element === '0') {
      zeros[zeros.length] = element;
    } else {
      elements[elements.length] = element;
    }
  }

  return [...elements, ...zeros];
}

console.log(removeZeros([1, null, '0', '5', '2', 8, 6, 0, null, false]));
//[1, null, '5', '2', 8, 6, null, false, '0', 0]

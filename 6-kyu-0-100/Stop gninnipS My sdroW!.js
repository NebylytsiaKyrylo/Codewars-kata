/*
https://www.codewars.com/kata/5264d2b162488dc400000001

Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter words reversed
(Just like the name of this Kata). Strings passed in will consist of only
letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

const spinWords = string =>
  string
    .split(' ')
    .map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
    .join(' ');

//OPTION 2
// const spinWords = string => string.replace(/\w{5,}/g, w => w.split('').reverse().join(''));

console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('This is another test')); // 'This is rehtona test'

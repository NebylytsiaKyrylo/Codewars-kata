/*
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

const high = (x) => {
  const alphabet = Array.from({ length: 26 }, (v, k) => k + 65).map((v) =>
    String.fromCharCode(v).toLowerCase());

  let xToNumbersArr = x
    .split(' ')
    .map((i) => i.split('').reduce((a, v) => a + alphabet.indexOf(v) + 1, 0));

  return x.split(' ')[xToNumbersArr.indexOf(Math.max(...xToNumbersArr))];
};

//------------------2
// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }

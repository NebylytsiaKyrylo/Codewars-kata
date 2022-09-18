/*
https://www.codewars.com/kata/56f3a1e899b386da78000732

Write a function partlist that gives all the ways to divide a list (an array)
of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without
tuples or a structin C - C: see Examples test Cases - )

Each part will be in a string
Elements of a pair must be in the same order as in the original array.

Note
You can see other examples for each language in "Your test cases"

Example
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
*/

const partlist = arr =>
  arr.map((_, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);

//OPTION 2
/*
function partlist(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
  }

  return result;
}
*/

console.log(partlist(['az', 'toto', 'picaro', 'zone', 'kiwi']));

/*
https://www.codewars.com/kata/5813d19765d81c592200001a

Don't give me five!
In this kata you get the start number and the end number of a region and should
return the count of all numbers except numbers with a 5 in it. The start and
the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

The result may contain fives. ;-)
The start number will always be smaller than the end number.
Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it.
Maybe someone of you will find an easy pure mathematics solution.
*/

const dontGiveMeFive = (start, end) =>
  Array
    .from({ length: end - start + 1 }, (_, i) => i + start)
    .filter(x => !/5/.test(x))
    .length;

//OPTION 2
/*
function dontGiveMeFive(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) count++;
  }

  return count;
}
*/

//OPTION 3
/*
function dontGiveMeFive(start, end) {
  let array = [];

  for (let i = start; i <= end; i++) {
    if (!`${i}`.includes(5)) array.push(i);
  }

  return array.length;
}
*/

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));

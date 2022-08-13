/*
https://www.codewars.com/kata/5a00e05cc374cb34d100000d

DESCRIPTION:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => Array.from({ length: n }, (_, i) => n - i);

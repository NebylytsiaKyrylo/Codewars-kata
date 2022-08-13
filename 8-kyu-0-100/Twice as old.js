/*
https://www.codewars.com/kata/5b853229cfde412a470000d0

DESCRIPTION:
Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2);

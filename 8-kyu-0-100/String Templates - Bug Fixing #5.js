/*
https://www.codewars.com/kata/55c90cad4b0fe31a7200001f

DESCRIPTION:
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the
new String Template feature, Help Timmy with his string template so it works as he expects!
*/

const buildString = (...template) => `I like ${template.join(', ')}!`;

console.log(buildString('Cheese','Milk','Chocolate')); //I like Cheese, Milk, Chocolate!

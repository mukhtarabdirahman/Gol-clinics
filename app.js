1. Reverse Array In-place
Write a function reverseArray(A) that takes in an array A and reverses it, without using another array or collection data structure; in-place.

Example:

A = [10, 5, 6, 9] reverseArray(A) A // [9, 6, 5, 10]
Share the Github link to your solution.


solution

var myArr = [10, 5, 6, 9];
var revMyArr = [].concat(myArr).reverse();
console.log(revMyArr);



2. Reverse Sentence In-place
Write a function reverseSentence(A) that takes in an array of characters, A, and reverses the the "words" (not individual characters).

Example:

A = ['t','h','i','s',' ','i','s',' ','g','o','o','d'] reverseSentence(A) A // ['g','o','o','d',' ','i','s',' ','t','h','i','s']
Share the Github link to your solution.



solution
const sentence = ['t','h','i','s',' ','i','s',' ','g','o','o','d'];

function reverseWords(sentence) {
    return sentence
        .split(/(\s+)/)
        .map(word => /^\s+$/.test(word) ? word : word.split('').reverse().join(''))
        .join('');
}

console.log(reverseWords(sentence));
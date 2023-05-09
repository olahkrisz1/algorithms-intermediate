//  Find the longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms you are allowed to use the split() method.

// findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
// findLongestWord("May the force be with you") should return 5.

// Pseudocode:

// 1. Function to declare that takes a single parameter 'sentence'.
// 2. using 'split()' method on 'sentence' parameter, we split the string into an array of words.
// 3. then we can assign this value to a new variable 'wordArr'.
// 4. define new variable 'maxLength' and assign value to zero. this will keep track of the longest word in 'wordArr' array.
// 5. using 'for' loop go over each element in 'wordArr' array.
// 6. inside the loop, use an 'if' statement to check if the length of current word is greater than current value of 'maxlength'.
// 7. If it is, update 'maxLength' to be equal to the length of current word.
// 8. after loop finished, return value of 'maxLength'
// 9. console.log result by calling the function with given parameter

function findLongestWord(sentence) {
  let wordArr = sentence.split(" ");
  let maxLength = 0;
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length > maxLength) {
      maxLength = wordArr[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWord("May the force be with you"));

// Diagram:

//  i       element     maxLength
//                          0
//  0        'May'          3
//  1        'the'          3
//  2       'force'         5
//  3         'be'          5
//  4        'with'         5
//  5        'you'          5

//   maxlength = 5

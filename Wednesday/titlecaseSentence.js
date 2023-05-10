// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

// For this algorithm, you can use the split() method.

// titleCase("I'm a little tea pot")should return a string.
// titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".

// Pseudocode:

//1. initiate a function that takes a string as an input.
//2. convert the entire string to lowercase.
// 3. split the string into an array of individual words uing split() method.
// 4. create an empty array 'titleCase_words' to store the capitalized words.
// 5. using 'for' loop, go over each element in 'words' array.
// 6. inside the loop, for each word, capitalize the first letter by accessing 'word[0]' and converting it to uppercase, then concatenate it with 'word.slice(1)' to include the rest of the word in lowercase.
// 7 .push the capitalized word into 'titlecase_words' array.
// 8. join the words in 'titlecase_words' array back into a string using 'join()' method.
// 9. return the resulting title-cases string.
// 10 console .log result by calling the function with any given string.

function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let titlecase_words = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord = word[0].toUpperCase() + word.slice(1);
    titlecase_words.push(capitalizedWord);
  }

  return titlecase_words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Diagram

//   i     element    capitalizedWord

//   0      "i'm"          "I'm"
//   1       "a"            "A"
//   2     "little"       "Little"
//   3      "tea"           "Tea"
//   4      "pot"           "Pot"

//      return "I'm A Little Tea Pot"

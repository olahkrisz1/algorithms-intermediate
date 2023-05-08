//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//   // You can do this!
//   return arr;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// //Returns [5,27,39,1001]

//PseudoCode:

// 1. start with a function that takes provided array as argument and initializes an empty array 'result'.
// 2. then 'for' loop goes through each sub array and initializes a variable 'largest' with first element of array.
// 3. nested loop iterates through the remaining elements of the sub array and updates 'largest' if a larger number is found.
// 4. after loop finished, largest number is pushed to 'result' array.
// 5. 'result' returned.
// by calling function with given array, print to screen result.

function largestOfFour(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    result.push(largest);
  }
  return result;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// Diagram

// block    i     j    element   largest    result
//  0       0            4         4
//                1      5         5
//                2      1         5
//                3      3         5          5
//  1       0            13        13
//                1      27        27
//                2      18        27
//                3      26        27         27
//  2       0            32        32
//                1      35        35
//                2      37        37
//                3      39        39         39
//  3       0           1000      1000
//                1     1001      1001
//                2      857      1001
//                3       1       1001      1001
//
//  return array will be [5,27, 39, 1001]

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// function sumAll(arr) {
//   return 1;
// }
// sumAll([1, 4]);

// The lowest number will not always come first.

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.

// pseudocode:

//1. declare a function that takes an array as a parameter.
//2. find minimum and maximum numbers using 'Math.min' and 'Math.max' regardless their order.
//3. Initialize variable 'sum' to zero. this will be used to accumulate the sum of all the numbers between minimum and maximum.
//4. using 'for' loop go over the numbers from min to max inclusive.
//5. inside the loop, each value of i is added to the 'sum' variable.
//6. after loop ends, final sum is returned.
//7. console.log results by passing in different arrays to function.

function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([1, 4]));

// Diagram

//  min     max   i   element    Sum

//  1        4                    0
//               min      1       0+1=1
//                        2       2+1=3
//                        3       3+3=6
//               max      4       4+6=10

//    returned sum = 10

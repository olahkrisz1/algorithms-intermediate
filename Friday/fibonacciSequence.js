// write an algorithm that will return the n-th term in the sequence.

// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...

// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.

// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

// But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:

// n = 43 -> x

// n = 101 -> x

// n = 227 -> x

// n = 491 -> x

// n = 881 -> x

// pseudocode:

// 1. declare a function that takes 'n' as input.
// 2. it initializes 'first' and 'second' to to 1, and then loops from 2 up to 'n'.
// 3. in each iteration, it calculates the next term in sequence as the sum of 'first' and 'second',
//    updates 'first' to be the value of 'second', and updates 'second' to be the value of the next term.
// 4. return the value of 'second', which will be the 'n'th term in sequence.
// 5. console.log

function fibonacci(n) {
  let first = 1;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    const next = first + second;
    first = second;
    second = next;
  }
  return second;
}
console.log(fibonacci(10));

// Diagram:

//    i     next     first      second
//                     1          1
//    2      2         1          2
//    3      3         2          3
//    4      5         3          5
//    5      8         5          8
//    6      13        8          13
//    7      21        13         21
//    8      34        21         34
//    9      55        34         55
//    10     89        55         89

// return second = 89, which is 10th in fibonacci sequence.

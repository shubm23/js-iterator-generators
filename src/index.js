// console.log("--------------------------------------------------");
// console.log("--------------------------------------------------");

// var str = "Hello";
// var world = ["W", "o", "r", "l", "d"];

// var it1 = str[Symbol.iterator]();
// var it2 = world[Symbol.iterator]();

// for (const v of it1) {
//   console.log({ v });
// }
// console.log("----------");
// for (const v of it2) {
//   console.log({ v });
// }

// console.log("--------------------------------------------------");
// console.log("--------------------------------------------------");

/* Custom Iterators for Object values */
/*
var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () =>
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined }
    };
  }
};

console.log([...obj]);

*/

// console.log("--------------------------------------------------");
// console.log("--------------------------------------------------");

// var obj = {
//   a: 1,
//   b: 2,
//   *[Symbol.iterator]() {
//     for (const key of Object.keys(this)) {
//       yield this[key];
//     }
//   }
// };

// function* ObjectKeys(arg) {
//   for (const key of Object.keys(arg)) {
//     yield arg[key];
//   }
// }

// console.log([...obj]);

// console.log("--------------------------------------------------");
// console.log("--------------------------------------------------");

var numbers = {
  *[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
    for (let i = start; i <= end; i += step) {
      yield i;
    }
  }
};

// for (const num of numbers) {
//   console.log(num);
// }

console.log(
  `My lucky numbers are: ${[
    ...numbers[Symbol.iterator]({ start: 6, end: 30, step: 4 })
  ]}`
);

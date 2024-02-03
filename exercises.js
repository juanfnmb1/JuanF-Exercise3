//3-1. flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];
export function flattening(list) {
  let results = list.reduce((previousValue, currentValue) =>
    previousValue.concat(currentValue)
  );

  return results;
}
console.log(flattening(arrays));

//3-2. loop(value, test, update, body)
export function loop(value, test, update, body) {
  for (let newValue = value; test(newValue); newValue = update(newValue)) {
    body(newValue);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

//3-3. everyLoop(array, test)
export function everyLoop(array, test) {
  let currentV = true;
  for (let item of array) {
    currentV = test(item);
  }
  return currentV;
}
console.log("should be true");
console.log(everyLoop([1, 3, 5], (n) => n < 10));
// → true
console.log("should be false");
console.log(everyLoop([2, 4, 16], (n) => n < 10));
// → false
console.log("should be true");
console.log(everyLoop([], (n) => n < 10));
// → true

//3-4. everySome(array, test)
export function everySome(array, test) {
  return !array.some((value) => !test(value));
}
console.log("should be true");
console.log(everySome([1, 3, 5], (n) => n < 10));
// → true
console.log("should be false");
console.log(everySome([2, 4, 16], (n) => n < 10));
// → false
console.log("should be true");
console.log(everySome([], (n) => n < 10));
// → true

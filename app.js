function doubleAndReturnArgs(array, ...numbers) {
  const doubledNumbers = numbers.map(num => num * 2)
  return [...array, ...doubledNumbers]
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); 
// expected result: [1, 2, 3, 8, 8]

console.log(doubleAndReturnArgs([2], 10, 4)); 
// expected result: [2, 20, 8]

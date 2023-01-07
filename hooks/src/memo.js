const memoizeObj = [];

function squareOfNum(num) {
  if (memoizeObj[num] !== null) {
    return memoizeObj[num];
  }
  let result = 0;

  for (let i = 1; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      result = result + 1;
    }
  }

  memoizeObj[num] = result;

  return result;
}
console.log(squareOfNum(400000));
console.log(squareOfNum(400000));
console.log(squareOfNum(400000));
console.log(squareOfNum(400000));
console.log(squareOfNum(400000));

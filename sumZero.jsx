const sumZeroQuadraticSoln = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// sumZero([-3, -2, -1, 0, 1, 2, 3]);

const sumZeroLinearSoln = () => {
  const arr = [-3, -2, -1, 0, 1, 2, 3];
  let right = arr.length - 1;
  for (let left = 0; left < right; ) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
// console.log(sumZeroLinearSoln());

const countUniqueValues = () => {
  const arr = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6];
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues());

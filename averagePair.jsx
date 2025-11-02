function averagePair(arr, val) {
  let j = 0;

  for (let i = arr.length - 1; i > j; ) {
    if ((arr[i] + arr[j]) / 2 === val) {
      return true;
    } else if ((arr[i] + arr[j]) / 2 > val) {
       i--;
    } else if ((arr[i] + arr[j]) / 2 < val) {
      j++;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

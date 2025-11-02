function areThereDuplicatesFrequency(...values) {
  let obj = {};
  for (let val of values) {
    if (obj[val]) {
      return true;
    } else {
      obj[val] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));




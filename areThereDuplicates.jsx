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

// console.log(areThereDuplicatesFrequency(1, 2, 3));

function areThereDuplicatesPointer(...values) {
  let sortedValues = values.sort();
  let j = 1;
  for (let i = 0; i < sortedValues.length-1; i++) {
    if(sortedValues[i]===sortedValues[j]){
      return true
    }else{
      j++
    }
  }
  return false
}

console.log(areThereDuplicatesPointer(3, 1,3, 2));

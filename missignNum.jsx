function missingNum() {
  const arr = [3,0,1];
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i];
  }
  
  for (let i = 0; i <= arr.length; i++) {
    if (!obj.hasOwnProperty(i)) {
      return i};
  }

 
}

console.log(missingNum())

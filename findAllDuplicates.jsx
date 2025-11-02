function findAllDuplicates(arr) {
  let obj = {};
  let res = [];
  for (let ar of arr) {
    if (obj[ar]) {
      res.push(ar);
    }else{
        obj[ar]=1
    }
  }
return res
}

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]))
function sameFrequency(num1, num2) {
  let str1 = "123";
  let str2 = "321";

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = obj1[str1[i]] + 1 || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    obj2[str2[i]] = obj2[str2[i]] + 1 || 1;
  }

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(sameFrequency());

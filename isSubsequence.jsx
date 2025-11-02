function isSubsequence(str1, str2) {
  let j = 0;
  let newStr="";
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[j]) {
      newStr += str2[i];
      j++;
      if(newStr===str1){
        return true
      }
    }
  }
  return false
}
console.log(isSubsequence('sing', 'sting'))
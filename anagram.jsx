function anagram(char1, char2) {
  let obj1 = {};
  let obj2 = {};

  for (let char of char1) {
    obj1[char] = obj1[char] + 1 || 1;
  }
  for (let char of char2) {
    obj2[char] = obj2[char] + 1 || 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

anagram("anagram", "anagramm");

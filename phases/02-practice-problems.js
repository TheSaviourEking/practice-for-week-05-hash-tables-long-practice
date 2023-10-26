function anagrams(str1, str2) {
  // Your code here
  str1 = new Set(str1);
  str2 = new Set(str2);
  for (let element of str2) {
    if (!str1.has(element)) return false;
  }
  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  return [...new Set([...set1].filter((x) => set2.has(x)))];

}


function duplicate(arr) {
  // Your code here
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) set.add(arr[i])
    else {
      return arr[i];
    }
  }
  return 'no duplicates';
}


function twoSum(nums, target) {
  // Your code here
  let numSets = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    numSets.delete(value)
    if (numSets.has(target - nums[i])) return true;
    numSets.add(value);
  }
  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  pattern = new Set(pattern);
  strings = new Set(strings);
  if (pattern.size !== strings.size) return false;
  let obj = {};
  for (let i = 0; i < pattern.length; i++) {
    if (!obj[pattern[i]]) {
      obj[pattern] = strings[i];
    } else {
      if (obj[pattern] !== strings[i]) return false;
    }
  }
  return true;
}

console.log(wordPattern("ABBA", ['dog', 'dog', 'dog', 'dog']))

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];

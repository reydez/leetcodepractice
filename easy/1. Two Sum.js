/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly 
one solution, and you may not use the same element twice.
You can return the answer in any order. */

var twoSum = (nums, target) => {
  var sum = 0;

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        console.log([i, j]);
      }
    }
  }

  return nums;
};
console.log(twoSum([2, 7, 11, 15], 9));

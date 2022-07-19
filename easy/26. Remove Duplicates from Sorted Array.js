var removeDuplicates = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        len = nums.length;
        i--;
      }
    }
  }

  console.log(nums);
};

console.log(removeDuplicates([1, 1, 2]));

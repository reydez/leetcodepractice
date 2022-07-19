var removeElement = function (nums, val) {
  let i = nums.length - 1;
  while (i > -1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    i--;
  }
  return nums;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

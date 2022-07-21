var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middleElement = Math.trunc((left + right) / 2);

    if (nums[middleElement] === target) {
      return middleElement;
    } else if (nums[middleElement] < target) {
      left = middleElement + 1;
      console.log(left);
    } else {
      right = middleElement - 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 7));

/* var plusOne = function (digits) {
  if (digits.length === 1) {
    if (digits[0] < 9) return digits[0] + 1;
    let num = digits[0] + 1;
    return String(num)
      .split("")
      .map((n) => Number(n));
  }

  const s = Number(digits.map((d) => String(d)).join(""));
  const i = String(s + 1)
    .split("")
    .map((s) => Number(s));
  return i;
}; */

/*
function plusOne(digits: number[]): number[] {
  let memory = 1; // start with 1, because we want to add 1
  
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + memory;
    memory = 0;
    
    if (digits[i] > 9) {
      digits[i] = 0;
      memory = 1; // will always be 1, because we add only 1
    }
  }
  
  if (memory !== 0) {
    digits.unshift(memory); // add last missing one if needed
  }
  
  return digits;
};
*/

var plusOne = function (digits) {
  let index = digits.length - 1;

  while (digits[index] === 9) {
    digits[index] = 0;
    index--;
  }

  if (index === -1) {
    digits.unshift(1);
  }

  digits[index] += 1;

  return digits;
};

console.log(plusOne([9, 9]));

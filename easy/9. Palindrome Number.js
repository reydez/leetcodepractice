var isPalindrome = (x) => {
  let rev = 0;
  let lastDigit;
  let num = x;

  if (num < 0) return false;

  while (x != 0) {
    lastDigit = x % 10;
    rev = rev * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  if (rev !== num) return false;
  if (rev === num) return true;
};

console.log(isPalindrome(121));

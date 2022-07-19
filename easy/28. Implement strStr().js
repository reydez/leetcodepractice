var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    const word = haystack.slice(i, i + needle.length);
    if (word === needle) return i;
  }
  return -1;
};

console.log(strStr("hello", "ll"));

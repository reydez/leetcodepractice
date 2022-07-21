var lengthOfLastWord = function (s) {
  let stringArr = s.split(" ");
  let filterBlanks = stringArr.filter((e) => e.trim() != "");
  return filterBlanks[filterBlanks.length - 1].length;
};

var lengthOfLastWord2 = function (s) {
  let parts = s.split(" ");
  for (let i = parts.length - 1; i > 0; i--) {
    if (parts[i] === "") parts.pop();
    else return parts[parts.length - 1].length;
  }
  return parts[parts.length - 1].length;
};

console.log(lengthOfLastWord2("   fly me   to   the moon  "));

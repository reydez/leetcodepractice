/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

var romanToInt = (s) => {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const cv = obj[s[i]];
    const nv = obj[s[i + 1]];
    if (cv < nv) {
      sum -= cv;
    } else {
      sum += cv;
    }
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));
/*
MCM       
1000 + (1000 - 100)
XC
1900 + (100 - 10)
IV
1990 + (1 - 5)              
*/

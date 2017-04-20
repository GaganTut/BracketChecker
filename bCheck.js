/*jshint esversion: 6*/
const brackets = {
  '(' : ')',
  '{' : '}',
  '[' : ']',
  '<' : '>'
};

const openBracks = '({[<';
const closBracks = ')}]>';

const brackCheck = (stringData) => {
  let unMatched = [];
  for (let i = 0; i < stringData.length; i++) {
    if (openBracks.indexOf(stringData[i]) > -1) {
      unMatched.push(stringData[i]);
    } else if (closBracks.indexOf(stringData[i]) > -1) {
      if (brackets[unMatched[unMatched.length - 1]] === stringData[i]) {
        unMatched.pop();
      } else {
        return false;
      }
    }
  }
  return true;
};

module.exports = brackCheck;
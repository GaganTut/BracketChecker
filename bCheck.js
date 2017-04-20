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
  let unMatched = '';
  for (let i = 0; i < stringData.length; i++) {
    if (openBracks.indexOf(stringData[i]) > -1) {
      unMatched += stringData[i];
    } else if (closBracks.indexOf(stringData[i]) > -1) {
      if (brackets[unMatched.slice(-1)] === stringData[i]) {
        unMatched = unMatched.slice(0, -1);
      } else {
        return false;
      }
    }
  }
  return true;
};

module.exports = brackCheck;
/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const check = require('../bCheck.js');

describe('Bracket Checker', () => {
  it('should return values based on whether brackets are correctly closed', () => {
    expect(check('(){}[]')).to.equal(true);
    expect(check('({}[])')).to.equal(true);
    expect(check('({[)}]')).to.equal(false);
    expect(check('(){}(]')).to.equal(false);
  });
});
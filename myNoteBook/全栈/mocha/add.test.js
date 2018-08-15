var expect = require('chai').expect;
var add = require('./add');

describe('add function', ()=>{
    it('1+1=2', ()=>{
        expect(add(1, 1)).to.be.equal(2);
    })
})
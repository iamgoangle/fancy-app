const expect = require('chai').expect;
const hashUtil = require('./hash.util');

describe('SERVICES', () => {
  describe('hash.util', () => {
    const myHash = hashUtil.generateHash('unittest');

    beforeEach(async () => {
    
    });

    afterEach(async () => {
      
    });

    it('should return hash value as string', () => {
      expect(myHash).to.be.a('string');
    });

    context('given plain value to hash compare function', () => {
      it('should return boolean value when compare hash', () => {
        const compare = hashUtil.compareHash(myHash, 'unittest');
        expect(compare).to.be.true;
      });
    });
  });
});
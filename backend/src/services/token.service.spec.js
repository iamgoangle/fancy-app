const expect = require('chai').expect;
const sinon = require('sinon');
const tokenService = require('./token.service');
const proxyquire = require('proxyquire');

describe('SERVICES', () => {
  describe('token.service', () => {
    let service;
    beforeEach(async () => {
      // service = proxyquire('./token.service.js', {
      //   global: {
      //     app: {
      //       get: () => 'test'
      //     }
      //   },
      //   '../config': {
      //     TOKEN: {
      //       EXPIRE: '1h'
      //     }
      //   }
      // });
    });

    it('should generate access token', async () => {
      // const test = tokenService.generateAccessToken({ test: true });
      sinon.stub(tokenService, 'getGlobalSecret')
        .onCall(0)
        .returns(Promise.resolve('superSecret'));
      // const test = await tokenService.getGlobalSecret();
      const test = await tokenService.generateAccessToken({ data: 'foo' });
      expect(test).to.be.a('string');
    });
  });
});
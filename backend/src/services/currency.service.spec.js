const expect = require('chai').expect;
const sinon = require('sinon');

const Currency = require('../models/currencies');
const currencyService = require('./currency.service');

describe('SERVICES', () => {
  describe('currency.service', () => {
    let CurrencyStub;
    
    beforeEach(async () => {
      CurrencyStub = sinon.stub(Currency, 'find');
    });

    afterEach(async () => {
      CurrencyStub.restore();
    });

    it('should thrown an error context', async () => {
      CurrencyStub.returns(Promise.resolve(undefined));
      const test = await currencyService.getCurrencies();
      expect(test).to.be.an('error');
    });

    it('should return an object currency', async () => {
      CurrencyStub.returns(Promise.resolve({}));
      const test = await currencyService.getCurrencies();
      expect(test).to.eql({});
    });
  });
});
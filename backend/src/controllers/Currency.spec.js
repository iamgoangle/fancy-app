const expect = require('chai').expect;
const sinon = require('sinon');

const currencyService = require('../services/currency.service');
const Currency = require('./Currency');

describe('CONTROLLER', () => {
  describe('Currency', () => {
    let req, res, currencyServiceStub;

    beforeEach(async () => {
      currencyServiceStub = sinon.stub(currencyService, 'getCurrencies')
        .returns(Promise.resolve({ foo: 'bar' }));
    });

    afterEach(async () => {
      currencyServiceStub.restore();
    });

    it('should return status code 200', async () => {
      req = {};
      res = {
        status: (code) => {
          expect(code).to.eq(200);
          return res;
        },
        json: () => {}
      };

      await Currency(req, res);
    });

    it('should return json message', async () => {
      req = {};
      res = {
        status: () => {
          return res;
        },
        json: (result) => {
          expect(result).to.eql({
            success: true,
            message: 'Return currency lists',
            data: { foo: 'bar' }
          });
        }
      };

      await Currency(req, res);
    });

    it('should return status code 500', async () => {
      req = {};
      res = {
        status: (code) => {
          expect(code).to.eq(500);
          return res;
        },
        json: () => {}
      };

      await Currency(req, res);
    });
  });
});
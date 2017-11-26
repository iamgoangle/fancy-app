const expect = require('chai').expect;
const sinon = require('sinon');

const timezoneService = require('../services/timezone.service');
const Timezone = require('./Timezone');

describe('CONTROLLER', () => {
  describe('Timezone', () => {
    let req, res, timezoneServiceStub;

    beforeEach(async () => {
      
    });

    afterEach(async () => {
      timezoneServiceStub.restore();
    });

    it('should return status code 200', async () => {
      timezoneServiceStub = sinon.stub(timezoneService, 'getTimezones')
        .returns(Promise.resolve({ foo: 'bar' }));

      req = {};
      res = {
        status: (code) => {
          expect(code).to.eq(200);
          return res;
        },
        json: () => {}
      };

      await Timezone(req, res);
    });

    it('should return status code 500', async () => {
      timezoneServiceStub = sinon.stub(timezoneService, 'getTimezones')
        .returns(Promise.reject({ foo: 'bar' }));

      req = {};
      res = {
        status: (code) => {
          expect(code).to.eq(500);
          return res;
        },
        json: () => {}
      };

      await Timezone(req, res);
    });

    it('should return json success message', async () => {
      timezoneServiceStub = sinon.stub(timezoneService, 'getTimezones')
        .returns(Promise.resolve({ foo: 'bar' }));

      req = {};
      res = {
        status: () => {
          return res;
        },
        json: (result) => {
          expect(result).to.eql({
            success: true,
            message: 'Return timezone lists',
            data: { foo: 'bar' }
          });
        }
      };

      await Timezone(req, res);
    });

    it('should return json fail message', async () => {
      timezoneServiceStub = sinon.stub(timezoneService, 'getTimezones')
        .returns(Promise.reject({ foo: 'bar' }));

      req = {};
      res = {
        status: () => {
          return res;
        },
        json: (result) => {
          expect(result).to.eql({
            success: false,
            message: 'Could not get timezone lists',
            data: []
          });
        }
      };

      await Timezone(req, res);
    });
  });
});
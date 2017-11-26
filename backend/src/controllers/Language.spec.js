const expect = require('chai').expect;
const sinon = require('sinon');

const languageService = require('../services/language.service');
const Language = require('./Language');

describe('CONTROLLER', () => {
  describe('Language', () => {
    let req, res, languageServiceStub;

    beforeEach(async () => {
      
    });

    afterEach(async () => {
      languageServiceStub.restore();
    });

    it('should return status code 200', async () => {
      languageServiceStub = sinon.stub(languageService, 'getLanguages')
        .returns(Promise.resolve({ foo: 'bar' }));

      req = {};
      res = {
        status: (code) => {
          expect(code).to.eq(200);
          return res;
        },
        json: () => {}
      };

      await Language(req, res);
    });

    it('should return status code 500', async () => {
      languageServiceStub = sinon.stub(languageService, 'getLanguages')
        .returns(Promise.reject({ foo: 'bar' }));

      req = {};
      res = {
        status: (code) => {
          expect(code).to.eq(500);
          return res;
        },
        json: () => {}
      };

      await Language(req, res);
    });

    it('should return json success message', async () => {
      languageServiceStub = sinon.stub(languageService, 'getLanguages')
        .returns(Promise.resolve({ foo: 'bar' }));

      req = {};
      res = {
        status: () => {
          return res;
        },
        json: (result) => {
          expect(result).to.eql({
            success: true,
            message: 'Return language lists',
            data: { foo: 'bar' }
          });
        }
      };

      await Language(req, res);
    });

    it('should return json fail message', async () => {
      languageServiceStub = sinon.stub(languageService, 'getLanguages')
        .returns(Promise.reject({ foo: 'bar' }));

      req = {};
      res = {
        status: () => {
          return res;
        },
        json: (result) => {
          expect(result).to.eql({
            success: false,
            message: 'Could not get language lists',
            data: []
          });
        }
      };

      await Language(req, res);
    });
  });
});
const expect = require('chai').expect;
const sinon = require('sinon');

const Language = require('../models/languages');
const languageService = require('./language.service');

describe('SERVICES', () => {
  describe('language.service', () => {
    let LanguageStub;
    
    beforeEach(async () => {
      LanguageStub = sinon.stub(Language, 'find');
    });

    afterEach(async () => {
      LanguageStub.restore();
    });

    it('should thrown an error context', async () => {
      LanguageStub.returns(Promise.resolve(undefined));
      const test = await languageService.getLanguages();
      expect(test).to.be.an('error');
    });

    it('should return an object currency', async () => {
      LanguageStub.returns(Promise.resolve({}));
      const test = await languageService.getLanguages();
      expect(test).to.eql({});
    });
  });
});
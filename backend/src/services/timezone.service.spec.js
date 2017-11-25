const expect = require('chai').expect;
const sinon = require('sinon');

const Timezone = require('../models/timezones');
const timezoneService = require('./timezone.service');

describe('SERVICES', () => {
  describe('language.service', () => {
    let TimezoneStub;
    
    beforeEach(async () => {
      TimezoneStub = sinon.stub(Timezone, 'find');
    });

    afterEach(async () => {
      TimezoneStub.restore();
    });

    it('should thrown an error context', async () => {
      TimezoneStub.returns(Promise.resolve(undefined));
      const test = await timezoneService.getTimezones();
      expect(test).to.be.an('error');
    });

    it('should return an object currency', async () => {
      TimezoneStub.returns(Promise.resolve({}));
      const test = await timezoneService.getTimezones();
      expect(test).to.eql({});
    });
  });
});
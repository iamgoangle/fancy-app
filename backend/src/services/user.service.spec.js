const expect = require('chai').expect;
const sinon = require('sinon');
// const userService = require('./user.service');
const proxyquire = require('proxyquire');

describe('SERVICES', () => {
  describe('token.service', () => {
    let service;

    beforeEach(async () => {
      service = proxyquire('./user.service', {
        '../models/user': {
          findOne: () => ( Promise.resolve({ user: 'foobar' }) ),
          update: () => ( Promise.resolve({ user: 'newitem' }) ),
          findOneAndUpdate: () => ( Promise.resolve({ user: 'bartest' }) )
        }
      });
    });

    it('should get user by username', async () => {
      const test = await service.getUserByUsername();
      expect(test).to.eql({ user: 'foobar' });
    });

    it('should update user preference', async () => {
      const request = {
        userIdForUpdate: 1001,
        payload: {
          test: 'foobar'
        }
      };

      const test = await service.updateUserPreference(request);
      expect(test).to.eql({ user: 'newitem' });
    });

    it('should find the user by username and update', async () => {
      const request = {
        userIdForUpdate: 1001,
        payload: {
          test: 'foobar'
        }
      };

      const test = await service.setUserPreference(request);
      expect(test).to.eql({ user: 'bartest' });
    });
  });
});
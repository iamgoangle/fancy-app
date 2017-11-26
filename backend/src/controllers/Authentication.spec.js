const expect = require('chai').expect;
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe('CONTROLLER', () => {
  describe('Authentication', () => {
    let req, res, controller;

    beforeEach(async () => {
      
    });

    afterEach(async () => {

    });

    it('should authenticate fail for incorrect user', () => {
      controller = proxyquire('./Authentication.js', {
        '../models/user': {
          findOne: () => ({ user: undefined })
        }
      });

      req = {
        body: {
          username: 'test'
        }
      };
      res = {
        status: (code) => {
          expect(code).eq(401);
          return res;
        },
        json: () => {}
      };

      controller(req, res);
    });
  });
});
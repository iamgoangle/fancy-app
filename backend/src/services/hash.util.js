const bcrypt = require('bcrypt-nodejs');

const generateHash = (value) => (
  bcrypt.hashSync(value, bcrypt.genSaltSync(8), null)
);

const compareHash = (hashValue, plainValue) => (
  bcrypt.compareSync(plainValue, hashValue)
);

module.exports = {
  generateHash,
  compareHash
};
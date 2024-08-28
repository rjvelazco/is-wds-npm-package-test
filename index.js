const isEqual = require('lodash.isequal');

function isWds(string) {
  return isEqual(string, "WDS");
}

module.exports = isWds;
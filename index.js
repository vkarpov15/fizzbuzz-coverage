module.exports = function(n) {
  if (typeof n !== 'number') {
    return null;
  }
  var result = '';

  if (n % 3 === 0) {
    result += 'fizz';
  }
  if (n % 5 === 0) {
    result += 'buzz';
  }

  return result.length ? result  : '' + n;
};

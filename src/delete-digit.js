const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberAsString = String(n);

  const allVariants = Array.from(numberAsString, (_, index) => {
    const partBeforeDigit = numberAsString.slice(0, index);
    const partAfterDigit = numberAsString.slice(index + 1);

    return parseInt(partBeforeDigit + partAfterDigit, 10);
  });

  return Math.max(...allVariants);
}

module.exports = {
  deleteDigit,
};

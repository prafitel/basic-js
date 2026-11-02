const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix[0].reduce((acc, _, col) => {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] === 0) break;
      acc += matrix[i][col];
    }
    return acc;
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};

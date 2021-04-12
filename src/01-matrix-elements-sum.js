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
  const sumResults = [];
  const columnCount = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < columnCount; j++) {
      let sum = 0;
      if (i === 0) {
        sum = matrix[i][j];
      } else if (matrix[i - 1][j] !== 0) {
        sum += matrix[i][j];
      }

      sumResults.push(sum);
    }
  }

  return sumResults.reduce((acc, el) => acc + el);
}

module.exports = getMatrixElementsSum;

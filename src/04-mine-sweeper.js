/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const columnCount = matrix[0].length;
  const result = Array(matrix.length)
    .fill()
    .map(() => Array(columnCount).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < columnCount; j++) {
      let counterOfMineAround = 0;

      // if not first row
      if (i !== 0) {
        if (j > 0 && j < columnCount - 1) {
          if (matrix[i - 1][j - 1]) counterOfMineAround++;
          if (matrix[i - 1][j]) counterOfMineAround++;
          if (matrix[i - 1][j + 1]) counterOfMineAround++;
        } else if (j === 0) {
          if (matrix[i - 1][j]) counterOfMineAround++;
          if (matrix[i - 1][j + 1]) counterOfMineAround++;
        } else if (j === columnCount - 1) {
          if (matrix[i - 1][j - 1]) counterOfMineAround++;
          if (matrix[i - 1][j]) counterOfMineAround++;
        }
      }

      // if not last row
      if (i !== matrix.length - 1) {
        if (j > 0 && j < columnCount - 1) {
          if (matrix[i + 1][j - 1]) counterOfMineAround++;
          if (matrix[i + 1][j]) counterOfMineAround++;
          if (matrix[i + 1][j + 1]) counterOfMineAround++;
        } else if (j === 0) {
          if (matrix[i + 1][j]) counterOfMineAround++;
          if (matrix[i + 1][j + 1]) counterOfMineAround++;
        } else if (j === columnCount - 1) {
          if (matrix[i + 1][j - 1]) counterOfMineAround++;
          if (matrix[i + 1][j]) counterOfMineAround++;
        }
      }

      // common case
      if (j > 0 && j < columnCount - 1) {
        if (matrix[i][j - 1]) counterOfMineAround++;
        if (matrix[i][j + 1]) counterOfMineAround++;
      } else if (j === 0) {
        if (matrix[i][j + 1]) counterOfMineAround++;
      } else if (j === columnCount - 1) {
        if (matrix[i][j - 1]) counterOfMineAround++;
      }

      result[i][j] = counterOfMineAround;
    }
  }

  return result;
}

module.exports = minesweeper;

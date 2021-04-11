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
  let arrayOfPossibleNumbers = Array(String(n).length).fill(String(n));

  arrayOfPossibleNumbers = arrayOfPossibleNumbers.map((el, i) => el.slice(0, i) + el.slice(i + 1));

  return Math.max(...arrayOfPossibleNumbers);
}

module.exports = deleteDigit;

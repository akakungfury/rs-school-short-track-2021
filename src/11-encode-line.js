/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrOfCodedLineParts = [];
  const arrOfChars = [...str];

  arrOfChars.forEach((el, i, arr) => {
    if (i !== 0) {
      if (arr[i - 1] === el) {
        arrOfCodedLineParts[arrOfCodedLineParts.length - 1] += el;
      } else {
        arrOfCodedLineParts.push(el);
      }
    } else {
      arrOfCodedLineParts.push(el);
    }
  });

  return arrOfCodedLineParts.map((el) => `${el.length}${el[0]}`.replace('1', '')).join('');
}
module.exports = encodeLine;

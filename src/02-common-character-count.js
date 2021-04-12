/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1WithoutDuplicates = [...s1]
    .filter((item, pos, self) => self.indexOf(item) === pos)
    .join('');

  const result1 = [];
  const result2 = [];

  // eslint-disable-next-line array-callback-return
  [...s1WithoutDuplicates].reduce((acc, currEl) => {
    result1.push([...s1].filter((filteredEl) => filteredEl === currEl).length);
  }, result1);

  // eslint-disable-next-line array-callback-return
  [...s1WithoutDuplicates].reduce((acc, currEl) => {
    result2.push([...s2].filter((filteredEl) => filteredEl === currEl).length);
  }, result2);

  const numbOfCmnChars = result1.reduce((acc, el, i) => acc + Math.min(result1[i], result2[i]), 0);

  return numbOfCmnChars;
}

module.exports = getCommonCharacterCount;

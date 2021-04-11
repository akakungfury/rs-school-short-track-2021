/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexesOfNonSortableItems = [];

  arr.reduce((acc, el, i) => (el < 0
    ? indexesOfNonSortableItems.push(i) : indexesOfNonSortableItems), indexesOfNonSortableItems);

  // delete all non-sortable numbers(-1)
  arr.sort((a, b) => a - b).splice(0, indexesOfNonSortableItems.length);

  // insert all non-sortable numbers to their positions
  indexesOfNonSortableItems.forEach((el) => arr.splice(el, 0, -1));

  return arr;
}

module.exports = sortByHeight;

/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let start = 0;
  let end = array.length;
  let mid;
  let index = 0;

  while (start <= end) {
    mid = Math.floor((end + start) / 2);

    if (array[index + mid] === value) {
      index = mid;
      break;
    }
    if (array[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return index;
}

// solution using "for"
// function findIndex(array, value) {
//   let indexOfMiddleArrElem = Math.trunc(array.length / 2);
//   let indexOfValue = 0;

//   for (let i = 0; i < array.length; i++) {
//     indexOfMiddleArrElem = Math.trunc(array.length / 2);

//     if (array[indexOfMiddleArrElem] === value) {
//       indexOfValue += indexOfMiddleArrElem;
//       return indexOfValue;
//     }
//     if (array[indexOfMiddleArrElem] > value) {
//       array = array.splice(0, indexOfMiddleArrElem);
//     } else {
//       indexOfValue += indexOfMiddleArrElem;
//       array = array.splice(indexOfMiddleArrElem);
//     }

//     i = 0;
//   }

//   return indexOfValue;
// }

// recursive solution
// function findIndex(array, value) {
//   const indexOfMiddleArrElem = Math.trunc(array.length / 2);

//   if (array[indexOfMiddleArrElem] > value) {
//     return findIndex(array.splice(0, indexOfMiddleArrElem), value);
//   }

//   if (array[indexOfMiddleArrElem] < value) {
//     return indexOfMiddleArrElem + findIndex(array.splice(indexOfMiddleArrElem), value);
//   }

//   return indexOfMiddleArrElem;
// }

module.exports = findIndex;

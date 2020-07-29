// 冒泡排序
const bubbleSort = (unSorted, isAsc = true) => {
  const result = [...unSorted];
  const sortAsc = (a, b) => a > b;
  const sortDesc = (a, b) => a < b;
  const compare = isAsc ? sortAsc : sortDesc;

  // 3, 5, 9, 4, 1
  // 3, 5, 4, 1, 9
  // 3, 4, 1, 5, 9
  // 3, 1, 4, 5, 9
  // 1, 3, 4, 5, 9
  for (let i = 0; i < result.length - 2; i += 1) {
    for (let j = 1; j < result.length - i; j += 1) {
      if (compare(result[j - 1], result[j])) {
        const agencyValue = result[j - 1];
        result[j - 1] = result[j];
        result[j] = agencyValue;
      }
    }
    console.log(result);
  }
  return result;
};

// 选择排序
const pickSort = (unSorted, isAsc = true) => {
  const result = [];
  const targetSorted = [...unSorted];
  const sortAsc = (a, b) => a > b;
  const sortDesc = (a, b) => a < b;
  const compare = isAsc ? sortAsc : sortDesc;

  // [], [3, 5, 9, 4, 1]
  // [1], [3, 5, 9, 4]
  // [1, 3], [5, 9, 4]
  // [1, 3, 4], [5, 9]
  // [1, 3, 4, 5], [9]
  // [1, 3, 4, 5, 8], []
  for (let i = 0; i < targetSorted.length; ) {
    let a = targetSorted[0];
    let index = 0;
    for (let j = 1; j < targetSorted.length; j += 1) {
      if (compare(a, targetSorted[j])) {
        index = j;
        a = targetSorted[j];
      }
    }
    targetSorted.splice(index, 1);
    result.push(a);
    console.log(result, targetSorted);
  }

  return result;
};

// 快速排序
// const quickSort = (unSorted, isAsc = true) => {};

const numbers = [3, 5, 9, 4, 1];
// console.log(bubbleSort(numbers));
// console.log('===============================');
// console.log(bubbleSort(numbers, false));

console.log(pickSort(numbers));
console.log('===============================');
console.log(pickSort(numbers, false));

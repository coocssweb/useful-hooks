const sortAsc = (a, b) => a > b;
const sortDesc = (a, b) => a < b;
// 冒泡排序
const bubbleSort = (unSorted, isAsc = true) => {
  const result = [...unSorted];
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
      console.log('===================');
      if (compare(a, targetSorted[j])) {
        index = j;
        a = targetSorted[j];
      }
    }
    targetSorted.splice(index, 1);
    result.push(a);
    // console.log(result, targetSorted);
  }

  return result;
};

// 快速排序
const quickSort = (unSorted, isAsc = true) => {
  if (unSorted.length <= 1) {
    return unSorted;
  }
  const compare = isAsc ? sortAsc : sortDesc;
  // [3, 5, 9, 4, 1]
  // [1], 3, [5, 9, 4]
  // [1], 3, [4], 5, [9]
  const targetValue = unSorted[0];
  const left = [];
  const right = [];
  for (let j = 1; j < unSorted.length; j += 1) {
    if (compare(targetValue, unSorted[j])) {
      left.push(unSorted[j]);
    } else {
      right.push(unSorted[j]);
    }
  }

  const finalLeft = quickSort(left, isAsc);
  const finalRight = quickSort(right, isAsc);

  return [...finalLeft, targetValue, ...finalRight];
};

const numbers = [3, 5, 9, 4, 1];
// console.log('===============================bubble sort asc');
// console.log(bubbleSort(numbers));
// console.log('===============================bubble sort desc');
// console.log(bubbleSort(numbers, false));

// console.log('===============================pick sort asc');
// console.log(pickSort(numbers));
// console.log('===============================pick sort desc');
// console.log(pickSort(numbers, false));

// console.log('===============================quick sort asc');
// console.log(quickSort(numbers));
// console.log('===============================quick sort desc');
// console.log(quickSort(numbers, false));

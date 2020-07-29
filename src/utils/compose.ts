const compose = (...middleware) => {
  return middleware.reduce(
    (finalFn, currentFn) => {
      return (...rest) => {
        return finalFn(currentFn(...rest));
      };
    },
    (value) => value,
  );
};

// const sum = (a) => a + 5;

// const multi = (a) => a * 5;

// const fnMiddleware1 = compose(sum, multi);
// console.log(...fnMiddleware1(10));

// const fnMiddleware2 = compose(multi, sum);
// console.log(...fnMiddleware2(10));

// TODO:
// Koa的compose  向下传递 context
// Redux的compose
// 区别

const toUpperCase = (word: string) => word.toUpperCase();
const sliceFirstLetter = (word: string) => word.slice(0, 1);
const fn = compose(sliceFirstLetter, toUpperCase);
console.log(fn('hello'));

// const translateFirstLetterToUppercase = (sentence: string) => {
//   const regexStr = /(^|\s+)\w/gi;
//   return sentence.replace(regexStr, (matchedStr) => matchedStr.toUpperCase());
// };

// console.log(formatFirstLetterToUppercase('hello world'));

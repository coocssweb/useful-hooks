// TODO，多参数如何处理
const curry = (fn: Function, ...rest) => {
  if (fn.length <= rest.length) {
    return fn(...rest);
  }

  return (...otherRest) => {
    return curry(fn, ...rest, ...otherRest);
  };
};

// const add = (a, b, c, d) => {
//   return a + b + c + d;
// };
// console.log(curry(add, 10)(20)(30)(40));

// TODO，curry的应用场景

const person = [
  { name: 'kevin', id: 1 },
  { name: 'daisy', id: 3 },
];

const getValueByKey = (key, item) => item[key];
const getItemByKeyValue = (key, value, item) => {
  return item[key] === value;
};
const prop = curry(getValueByKey);
const filterFn = curry(getItemByKeyValue);

const names = person.map(prop('name'));
const personId3 = person.filter(filterFn('id', 3));

console.log(names);
console.log(personId3);

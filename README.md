<h1 align="center">useful-hooks</h1>
收集一些好用的react-hooks，这些hooks或是规范化你的代码，或是可以提高你代码的性能，或是可以简化你的代码。并非所有都是原创，如果是引用别人的代码，代码会标明出处。

## Install

```bash
# 安装依赖
npm install

# 开始开发
npm start

# 访问
http://127.0.0.1:9000
```

<h2 align="center">一览</h2>

## useAsync.ts

It's generally a good practice to indicate to users the status of any async request.

```js
// 根据asyncFunction的执行状态，指示promise函数执行的状态
const { execute, pending, value, error } = useAsync(asyncFunction, false);
```

## useMemoCompare.ts

It gives us the memoized value of an object, but instead of passing an array of dependencies (like with useMemo) we pass a custom compare function that gets both the previous and new value.

```js
// 区别于useMemo，useMemo对比的是依赖项里的对象，返回新的结果。
// useMemoCompare，可以指定具体的对比条件，条件为false，返回新的对象。
const theObj = useMemoCompare(obj, (prev: any, value: any) => {
  return prev && prev.id === value.id;
});
```

## useWhyDidYouUpdate.ts

It makes it easy to see which prop changes are causing a component to re-render.

```js
// When props changed, This will log [why-did-you-update] Counter {from, to}
useWhyDidYouUpdate('Counter', props);
```

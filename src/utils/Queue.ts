/*
 * @Author: wangjiaxin
 * @Date: 2021-01-20 09:07:12
 * @Description: xxxxxxxxxxxxxxxx
 *
 */

import { QueueOptions } from '../constants';

let LocalPromise = Promise;

/**
 * 封装resolve方法
 * @param {*} value
 * @return LocalPromise
 */
const resolveWith = (value) => {
  if (value && typeof value.then === 'function') {
    return value;
  }

  return new LocalPromise((resolve) => {
    resolve(value);
  });
};

class Queue {
  options: QueueOptions;

  maxPendingPromises: number;

  maxQueuedPromises: number;

  pendingPromises: number;

  maxQueuePromises: number;

  canDequeue: Boolean;

  queue: Array<any>;

  /**
   * @param {number} [maxPendingPromises = Infinity] 最大的正在执行的队列数
   * @param {number} [maxQueuePromises = Infinity] 最大的队列数
   * @param {Object} [options = {}] 扩至配置, 如onEmpty
   * @constructor
   *
   * @example
   * const queue = new Queue(1);
   *
   * queue.add(() => {
   *  return ajax(...);
   * }).then((response) => {
   *  doStuffWIth(response)
   * });
   *
   */
  constructor(maxPendingPromises: number, maxQueuedPromises: number, options: QueueOptions) {
    this.options = options || {};
    this.maxPendingPromises = typeof maxPendingPromises !== 'undefined' ? maxPendingPromises : Infinity;
    this.maxQueuePromises = typeof maxQueuedPromises !== 'undefined' ? maxQueuedPromises : Infinity;
    this.pendingPromises = 0;
    this.canDequeue = true;
    this.queue = [];
  }

  /**
   * 获取队列长度
   * @return {number}
   */
  getQueueLength(): number {
    return this.queue.length;
  }

  /**
   * 获取正在执行的队列长度
   * @return {Number}
   */
  getPendingLength(): number {
    return this.pendingPromises;
  }

  /**
   * 自定义Promise执行程序，默认ES6 Promise
   * @param {Function} globalPromise
   */
  configure(globalPromise) {
    LocalPromise = globalPromise;
  }

  /**
   * 暂停队列任务
   */
  pause() {
    this.canDequeue = false;
  }

  /**
   * 重新开始任务
   */
  restart() {
    this.canDequeue = true;
  }

  /**
   * 添加队列任务
   * @param {Function} promiseGenerator
   * @return {LocalPromise}
   */
  add(promiseGenerator) {
    return new LocalPromise((resolve, reject) => {
      if (this.queue.length >= this.maxPendingPromises) {
        reject(new Error('Queue limit reached'));
        return;
      }

      this.queue.push({
        promiseGenerator,
        resolve,
        reject,
      });

      this.dequeue();
    });
  }

  /**
   * 执行队列任务
   */
  dequeue() {
    if (this.canDequeue === false) {
      return false;
    }

    // 正在执行的队列任务 > 允许的最大的执行数
    if (this.pendingPromises >= this.maxPendingPromises) {
      return false;
    }

    // 推出一个队列任务
    const item = this.queue.shift();
    if (!item) {
      if (this.options.onEmpty) {
        this.options.onEmpty();
      }
      return false;
    }

    try {
      this.pendingPromises += 1;
      resolveWith(item.promiseGenerator).then(
        (value) => {
          // 成功执行任务。递减正在执行的任务数，返回结果，执行下一个任务
          this.pendingPromises -= 1;
          item.resolve(value);
          this.dequeue();
        },
        (err) => {
          // 失败执行任务。递减正在执行的任务数，返回结果，执行下一个任务
          this.pendingPromises -= 1;
          item.reject(err);
          this.dequeue();
        },
      );
    } catch (err) {
      // 异常。递减正在执行的任务数，返回结果，执行下一个任务
      this.pendingPromises -= 1;
      item.reject(err);
      this.dequeue();
    }

    return true;
  }
}

export default Queue;

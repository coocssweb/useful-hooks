/*
 * @Author: wangjiaxin
 * @Date: 2020-12-24 14:52:27
 * @Description: http 请求基础函数
 */
import 'whatwg-fetch';

// 常用的HTTP 状态码
const HTTP_STATUS_CODES = {
  timeout: {
    code: 408,
    msg: 'Request timeout',
  },
  fail: {
    code: 400,
    msg: 'Failed to fetch',
  },
};

class Http {
  /**
   * `path` 请求的路径
   * `method` 请求方式; 允许值[GET, POST, DELETE, PUT]
   * `accessToken` 权限验证token
   *
   * `delay` 演示处理请求结果
   *  defaults `0`, 不需要演示处理请求，延时处理请求的目的在于做过渡处理，比如“骨架图的需求”
   *
   * `timeout` 请求超时的时间，允许最常的请求事件，超时做 HTTP_STATUS_CODES.timeout的返回结果处理
   * defaults `10 * 1000`
   */
  request({ path, method = 'GET', accessToken = '' }, options = { delay: 0, timeout: 10 * 1000 }) {
    const { delay, timeout } = options;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Token': accessToken,
    };
    const requestUrl = path;
    const startRequestTimestamp = Date.now();

    return new Promise((resolve) => {
      /**
       * 请求超时处理
       * defaults `10 * 1000`，上报http状态码 { code: 408, error: Request timeout }
       */
      const timer = setTimeout(() => {
        resolve({
          response: {},
          meta: {
            ...HTTP_STATUS_CODES,
          },
        });
      }, timeout || 10 * 1000);

      /**
       * fetch 请求结束
       * 处理服务端返回的json数据
       */
      const fetchDone = (response) => {
        clearTimeout(timer);
        const totalRequestTime = Date.now() - startRequestTimestamp;
        if (totalRequestTime < delay) {
          setTimeout(() => {
            resolve(response);
          }, delay - totalRequestTime);
        } else {
          resolve(response.json());
        }
      };

      // 开始处理
      fetch(requestUrl, {
        method,
        headers,
        mode: 'cors',
      })
        .then((response) => {
          fetchDone(response.json());
        })
        .catch((error) => {
          fetchDone({
            response: {},
            meta: {
              ...HTTP_STATUS_CODES.fail,
              msg: error,
            },
          });
        });
    });
  }
}

export default new Http();

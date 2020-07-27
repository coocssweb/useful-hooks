import axios, { AxiosRequestConfig, Method } from 'axios';
import tokenPersist from '../store/persitst/tokenPersist';

class Base {
  static readonly defaultOptions = {
    path: '',
    data: {},
    method: 'get',
    requireLogin: false,
    needDelay: false,
  };

  private baseURL: string;

  constructor() {
    axios.defaults.baseURL = process.env.API;
    axios.defaults.timeout = 6000;
    axios.defaults.responseType = 'json';
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: tokenPersist.get(),
    };
  }

  protected request(options: AxiosRequestConfig) {
    const finalOptions = { ...Base.defaultOptions, ...options };
    const requestMethod = finalOptions.method as Method;
    const { url } = finalOptions;
    const startReqeustTimestamp = Date.now();

    return new Promise<{ meta: any; response: any }>((resolve, reject) => {
      axios(url, {
        baseURL: this.baseURL,
        method: requestMethod,
        responseType: 'json',
      })
        .then((response) => {
          const timediff = Date.now() - startReqeustTimestamp;
          if (finalOptions.needDelay && timediff < 300) {
            setTimeout(() => {
              resolve(response.data);
            }, 300 - timediff);
          } else {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default Base;

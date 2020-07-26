import axios, { AxiosRequestConfig, Method } from 'axios';

class Base {
  static readonly defaultOptions = {
    path: '',
    data: {},
    method: 'get',
    requireLogin: false,
    needDelay: false,
  };

  private baseURL: string;

  constructor(model: string) {
    this.baseURL = `${process.env.API}${model}`;
  }

  protected request(options: AxiosRequestConfig) {
    const finalOptions = { ...Base.defaultOptions, ...options };
    const requestMethod = finalOptions.method as Method;

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const { url } = finalOptions;
    const startReqeustTimestamp = Date.now();

    return new Promise<{ meta: any; response: any }>((resolve, reject) => {
      axios(url, {
        baseURL: this.baseURL,
        method: requestMethod,
        headers,
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

import { RequestOptions } from '@constants/interface';
import 'whatwg-fetch';

class Base {
  static readonly defaultOptions = {
    path: '',
    data: {},
    method: 'GET',
    requireLogin: false,
    needDelay: false,
  };

  private requestUrl: string;

  constructor(model: string) {
    this.requestUrl = `${process.env.API}${model}`;
  }

  protected request(options: RequestOptions) {
    const finalOptions = { ...Base.defaultOptions, ...options };
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const fetchInit: RequestInit = {
      method: finalOptions.method,
      headers,
      mode: 'cors',
    };
    this.requestUrl = `${this.requestUrl}${finalOptions.path}`;
    const startReqeustTimestamp = Date.now();

    return new Promise<{ meta: any; response: any }>((resolve, reject) => {
      fetch(this.requestUrl, fetchInit)
        .then((response) => {
          const timediff = Date.now() - startReqeustTimestamp;
          if (finalOptions.needDelay && timediff < 300) {
            setTimeout(() => {
              resolve(response.json());
            }, 300 - timediff);
          } else {
            resolve(response.json());
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default Base;

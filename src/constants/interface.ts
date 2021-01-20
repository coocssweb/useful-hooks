// redux action接口
export interface Action {
  type?: string;
  payload?: object;
}

export interface ActionPromise {
  types?: Array<String>;
  promise?: Promise<any>;
}

// 登录信息
export interface LoginInfo {
  username: string;
  password: string;
}

// 用户信息
export interface UserInfo {
  username: string;
  nickname: string;
  avatar: string;
  remark: string;
}

export interface QueueOptions {
  onEmpty?: Function;
}

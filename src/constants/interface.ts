// redux action接口
export interface Action {
  type?: string;
  payload?: Object;
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

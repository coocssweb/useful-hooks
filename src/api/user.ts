import { LoginInfo, UserInfo } from '@constants/interface';
import Base from './base';

class User extends Base {
  constructor() {
    super('/api/user/');
  }

  login(loginInfo: LoginInfo): Promise<any> {
    const { username, password } = loginInfo;
    return this.request({
      url: 'login',
      method: 'post',
      data: { username, password },
    });
  }

  logout(): Promise<any> {
    return this.request({
      url: 'logout',
      method: 'post',
    });
  }

  info(): Promise<any> {
    return this.request({ url: '/info' });
  }

  edit(userInfo: UserInfo): Promise<any> {
    return this.request({
      url: '',
      method: 'post',
      data: userInfo,
    });
  }

  updatePassword(password: string, checkPassword: string): Promise<any> {
    return this.request({
      url: '/password',
      method: 'put',
      data: {
        password,
        checkPassword,
      },
    });
  }
}

export default new User();

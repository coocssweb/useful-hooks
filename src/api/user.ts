import { LoginInfo, UserInfo } from '@constants/interface';
import Base from './base';

class User extends Base {
  constructor() {
    super('/api/user/');
  }

  login(loginInfo: LoginInfo): Promise<any> {
    const { username, password } = loginInfo;
    return this.request({
      path: 'login',
      method: 'post',
      data: { username, password },
    });
  }

  logout(): Promise<any> {
    return this.request({
      path: 'logout',
      method: 'post',
    });
  }

  info(): Promise<any> {
    return this.request({ path: '/info' });
  }

  edit(userInfo: UserInfo): Promise<any> {
    return this.request({
      path: '',
      method: 'post',
      data: userInfo,
    });
  }

  updatePassword(password: string, checkPassword: string): Promise<any> {
    return this.request({
      path: '/password',
      method: 'put',
      data: {
        password,
        checkPassword,
      },
    });
  }
}

export default new User();

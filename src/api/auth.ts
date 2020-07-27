import { LoginInfo } from '@constants/interface';
import Base from './base';

class Auth extends Base {
  login(loginInfo: LoginInfo): Promise<any> {
    const { username, password } = loginInfo;
    return this.request({
      url: 'auth/signin',
      method: 'post',
      data: { username, password },
    });
  }

  logout(): Promise<any> {
    return this.request({
      url: 'auth/signout',
      method: 'post',
    });
  }
}

export default new Auth();

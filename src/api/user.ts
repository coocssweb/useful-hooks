import { UserInfo } from '@constants/interface';
import Base from './base';

class User extends Base {
  findOne(): Promise<any> {
    return this.request({ url: 'user/profile', method: 'get' });
  }

  edit(userInfo: UserInfo): Promise<any> {
    return this.request({
      url: 'user/profile',
      method: 'post',
      data: userInfo,
    });
  }
}

export default new User();

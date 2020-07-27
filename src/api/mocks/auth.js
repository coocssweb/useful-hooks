const Mock = require('mockjs');

// 用户登录接口
Mock.mock('http://www.shuxia123.com/api/auth/signin', 'post', {
  meta: {
    code: 200,
    desc: '',
  },
  response: {
    token: 'abd387askdj8787fkdkjk',
  },
});

// 用户登出接口
Mock.mock('http://www.shuxia123.com/api/auth/signout', 'post', {
  meta: {
    code: 200,
    desc: '',
  },
  response: {},
});

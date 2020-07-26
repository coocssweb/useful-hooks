const Mock = require('mockjs');

// 用户登录接口
Mock.mock(`https://www.shuxia123.com/api/user/login`, 'post', {
  meta: {
    code: 200,
    desc: '',
  },
  response: {
    token: 'abd387askdj8787fkdkjk',
  },
});

// 用户详细信息
Mock.mock('/api/user/profile', 'get', {
  meta: {
    code: 200,
    desc: '',
  },
  response: {
    id: 'abc123',
    name: '王佳欣',
    avatar: 'https://www.shuxia123.com/images/personal.jpg',
  },
});

// 用户登出接口
Mock.mock('/api/user/logout', 'post', {
  meta: {
    code: 200,
    desc: '',
  },
  response: {},
});

const Mock = require('mockjs');

// 用户详细信息
Mock.mock('/api/user/profile', 'get', {
  meta: {
    code: 200,
    desc: '',
  },
  response: {
    id: 'abc123',
    name: '王佳欣',
    avatar: 'http://www.shuxia123.com/images/personal.jpg',
  },
});

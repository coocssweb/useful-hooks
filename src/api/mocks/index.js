const Mock = require('mockjs');

Mock.setup({
  timeout: 1000,
});

require('./user');
require('./auth');

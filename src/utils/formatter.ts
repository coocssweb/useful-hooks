export const formatDate = (timestamp = new Date(), formatStr = 'yyyy-MM-dd hh:mm:ss') => {
  const date = new Date(timestamp);

  const dateRegs = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    S: date.getMilliseconds(),
  };

  // 年份，4位数
  if (/(y+)/.test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  }

  for (const key in dateRegs) {
    if (new RegExp(`(${key})`).test(formatStr)) {
      const replaceContent =
        RegExp.$1.length === 1 ? dateRegs[key] : `00${dateRegs[key]}`.substr(`${dateRegs[key]}`.length);

      formatStr = formatStr.replace(RegExp.$1, replaceContent);
    }
  }
  return formatStr;
};

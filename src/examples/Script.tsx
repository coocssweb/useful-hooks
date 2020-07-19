/*
 * @Author: wangjiaxin
 * @Date: 2020-05-07 13:57:26
 * @Description: xxxxxxxxxxxxxxxx
 */
import * as React from 'react';
import { useScript } from '../hooks/index';

const Script = () => {
  const [loaded, error] = useScript('https://www.shuxia123.com/js/manifest.2b80ee11aded259ac3af.js');

  return (
    <div>
      {loaded ? '加载完成' : '正在加载中'}

      {error ? '，加载失败' : ''}
    </div>
  );
};

export default Script;

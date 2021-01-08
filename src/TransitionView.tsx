/* eslint-disable react/prop-types */
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const { useCallback } = React;

const MODES_BY_ACTION = {
  PUSH: 'appear',
  REPLACE: 'appear',
  POP: 'leave',
};

const TransitionView = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;
  const transitionKey = (background || location).key;
  const { action } = history;

  /**
   * `effect` 动画效果, 允许值 [slide, popUp]
   * `mode`: 动画形式, 允许值[appear, leave]
   */
  const effect = 'slide';
  const state: any = location.state || {};
  let { mode } = state;
  if (!mode) {
    mode = MODES_BY_ACTION[action];
  }

  /**
   * 事件: 动画入场开始
   */
  const onEnter = useCallback(() => {}, []);

  /**
   * 事件：动画入场结束
   */
  const onEntered = useCallback(() => {}, []);

  // 3. 渲染
  return (
    <TransitionGroup className={`page-transition  ${mode} ${effect}`}>
      <CSSTransition key={transitionKey} timeout={400} onEnter={onEnter} onEntered={onEntered}>
        <div className="page-content">{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionView;

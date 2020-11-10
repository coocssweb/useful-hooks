import * as React from 'react';
import iro from './Iro.ts';

const { useEffect } = React;

const Login = () => {
  useEffect(() => {
    const colorPicker = new iro.ColorPicker('#picker', {
      // Set the size of the color picker
      width: 320,
      // Set the initial color to pure red
      color: '#f00',
      wheelAngle: 85,
      wheelLightness: false,
      layout: [
        {
          component: iro.ui.Wheel,
          option: {},
        },
      ],
    });

    colorPicker.on('color:change', () => {});
  }, []);

  return (
    <div>
      <div id="picker" />
    </div>
  );
};

export default Login;

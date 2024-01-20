import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

import {
  COLOR_PRIMARY,
  CONTROL_BUTTON_HEIGHT,
  CONTROL_INPUT_HEIGHT,
} from '@/constants';

interface Props {
  children: ReactNode;
}

const ThemeProvider = (props: Props) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: COLOR_PRIMARY,
            borderRadius: 3,
          },
          components: {
            Button: {
              controlHeight: CONTROL_BUTTON_HEIGHT,
              boxShadow: 'none',
              colorPrimaryActive: COLOR_PRIMARY,
              controlOutline: 'none',
              colorBorder: COLOR_PRIMARY,
            },
            Input: {
              controlHeight: CONTROL_INPUT_HEIGHT,
              boxShadow: 'none',
              activeShadow: 'none',
            },
          },
        }}
      >
        {props.children}
      </ConfigProvider>
    </div>
  );
};

export default ThemeProvider;

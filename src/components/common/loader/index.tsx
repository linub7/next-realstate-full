'use client';

import { Spin } from 'antd';

interface Props {}

const CommonLoader = (props: Props) => {
  return (
    <div className="flex justify-center mt-20">
      <Spin size="large" />
    </div>
  );
};

export default CommonLoader;

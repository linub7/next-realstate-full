import { ReactNode } from 'react';
import { Form } from 'antd';
import { Rule } from 'antd/es/form';

interface Props {
  children: ReactNode;
  name: string;
  label: string;
  rules?: Rule[];
  className?: string;
}

const PropertyFormItem = (props: Props) => {
  const { name, label, rules, className, children } = props;
  return (
    <Form.Item name={name} label={label} rules={rules} className={className}>
      {children}
    </Form.Item>
  );
};

export default PropertyFormItem;

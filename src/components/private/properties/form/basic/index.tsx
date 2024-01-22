import { Form, Input, InputNumber, Select } from 'antd';

import { PropertyFormStepProps } from '@/types';
import BackNextButtons from '../common/back-next-buttons';
import { PROPERTY_STATUSES, PROPERTY_TYPES } from '@/constants';
import PropertyFormItem from '../common/form-item';

const PropertyFormBasic = (props: PropertyFormStepProps) => {
  const { currentStep, finalValues, setCurrentStep, setFinalValues } = props;
  const handleFinish = (values: any) => {
    setFinalValues({ ...finalValues, basic: values });
    setCurrentStep(currentStep + 1);
  };

  return (
    <Form
      layout="vertical"
      initialValues={finalValues?.basic}
      onFinish={handleFinish}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <PropertyFormItem
          name="name"
          label="Property Name"
          rules={[
            {
              required: true,
              message: 'Name is required!',
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input placeholder="Property Name" />
        </PropertyFormItem>
        <PropertyFormItem
          name="description"
          label="Property Description"
          rules={[
            {
              required: true,
              message: 'Description is required!',
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input.TextArea rows={6} placeholder="Description" />
        </PropertyFormItem>
        <PropertyFormItem
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: 'Type is required!',
            },
          ]}
        >
          <Select options={PROPERTY_TYPES} />
        </PropertyFormItem>
        <PropertyFormItem
          name="status"
          label="Status"
          rules={[
            {
              required: true,
              message: 'Status is required!',
            },
          ]}
        >
          <Select options={PROPERTY_STATUSES} />
        </PropertyFormItem>
        <PropertyFormItem
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: 'Price is required!',
            },
          ]}
        >
          <InputNumber
            className="w-full"
            type="number"
            placeholder="Price"
            min={1}
          />
        </PropertyFormItem>
      </div>
      <BackNextButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </Form>
  );
};

export default PropertyFormBasic;

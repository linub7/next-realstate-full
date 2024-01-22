import { Form, Input, InputNumber, Select } from 'antd';

import { PropertyFormStepProps } from '@/types';
import BackNextButtons from '../common/back-next-buttons';
import PropertyFormItem from '../common/form-item';
import { CITIES } from '@/constants';

const PropertyFormLocation = (props: PropertyFormStepProps) => {
  const { currentStep, finalValues, setCurrentStep, setFinalValues } = props;
  const handleFinish = (values: any) => {
    setFinalValues({ ...finalValues, location: values });
    setCurrentStep(currentStep + 1);
  };
  return (
    <Form
      layout="vertical"
      initialValues={finalValues?.location}
      onFinish={handleFinish}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <PropertyFormItem
          name="city"
          label="City"
          rules={[
            {
              required: true,
              message: 'City is required!',
            },
          ]}
        >
          <Select options={CITIES} />
        </PropertyFormItem>
        <PropertyFormItem
          name="pincode"
          label="Pincode"
          rules={[
            {
              required: true,
              message: 'Pincode is required!',
            },
          ]}
        >
          <InputNumber className="w-full" type="number" placeholder="Pincode" />
        </PropertyFormItem>
        <PropertyFormItem
          name="landmark"
          label="Landmark"
          rules={[
            {
              required: true,
              message: 'Landmark is required!',
            },
          ]}
        >
          <Input placeholder="Landmark" />
        </PropertyFormItem>
        <PropertyFormItem
          name="fullAddress"
          label="Full Address"
          rules={[
            {
              required: true,
              message: 'Full Address is required!',
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input.TextArea
            rows={6}
            placeholder="Please write your full address"
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

export default PropertyFormLocation;

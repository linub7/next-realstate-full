import { Form, InputNumber, Select } from 'antd';

import { PropertyFormStepProps } from '@/types';
import BackNextButtons from '../common/back-next-buttons';
import PropertyFormItem from '../common/form-item';
import { FACING, FURNISHED_STATUSES, PARKING } from '@/constants';

const PropertyFormAmenities = (props: PropertyFormStepProps) => {
  const { currentStep, finalValues, setCurrentStep, setFinalValues } = props;
  const handleFinish = (values: any) => {
    setFinalValues({ ...finalValues, amenities: values });
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
          name="bedrooms"
          label="Bedrooms"
          rules={[
            {
              required: true,
              message: 'Bedrooms is required!',
            },
          ]}
        >
          <InputNumber
            className="w-full"
            type="number"
            placeholder="Bedrooms"
          />
        </PropertyFormItem>
        <PropertyFormItem
          name="bathrooms"
          label="Bathrooms"
          rules={[
            {
              required: true,
              message: 'Bathrooms is required!',
            },
          ]}
        >
          <InputNumber
            className="w-full"
            type="number"
            placeholder="Bathrooms"
          />
        </PropertyFormItem>
        <PropertyFormItem
          name="balconies"
          label="Balconies"
          rules={[
            {
              required: true,
              message: 'Balconies is required!',
            },
          ]}
        >
          <InputNumber
            className="w-full"
            type="number"
            placeholder="Balconies"
          />
        </PropertyFormItem>
        <PropertyFormItem
          name="parking"
          label="Parking"
          rules={[
            {
              required: true,
              message: 'Parking is required!',
            },
          ]}
        >
          <Select options={PARKING} />
        </PropertyFormItem>
        <PropertyFormItem
          name="furnished"
          label="Furnished"
          rules={[
            {
              required: true,
              message: 'Furnished is required!',
            },
          ]}
        >
          <Select options={FURNISHED_STATUSES} />
        </PropertyFormItem>
        <PropertyFormItem
          name="floors"
          label="Floors"
          rules={[
            {
              required: true,
              message: 'Floors is required!',
            },
          ]}
        >
          <InputNumber className="w-full" type="number" placeholder="Floors" />
        </PropertyFormItem>
        <PropertyFormItem
          name="area"
          label="Area"
          rules={[
            {
              required: true,
              message: 'Area is required!',
            },
          ]}
        >
          <InputNumber className="w-full" type="number" placeholder="Area" />
        </PropertyFormItem>
        <PropertyFormItem
          name="facing"
          label="Facing"
          rules={[
            {
              required: true,
              message: 'Facing is required!',
            },
          ]}
        >
          <Select options={FACING} />
        </PropertyFormItem>
        <PropertyFormItem
          name="age"
          label="Age"
          rules={[
            {
              required: true,
              message: 'Age is required!',
            },
          ]}
        >
          <InputNumber className="w-full" type="number" placeholder="Age" />
        </PropertyFormItem>
      </div>
      <BackNextButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </Form>
  );
};

export default PropertyFormAmenities;

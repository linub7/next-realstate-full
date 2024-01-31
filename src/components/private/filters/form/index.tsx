import { usePathname, useRouter } from 'next/navigation';
import { Button, Form, InputNumber, Select } from 'antd';

import PropertyFormItem from '../../properties/form/common/form-item';
import {
  CITIES,
  FURNISHED_STATUSES,
  PARKING,
  PROPERTY_STATUSES,
  PROPERTY_TYPES,
} from '@/constants';
import { FilterSearchParam } from '@/types';

interface Props {
  searchParams: FilterSearchParam;
  handleHideModal: () => void;
}

const PropertiesFiltersForm = (props: Props) => {
  const { handleHideModal, searchParams } = props;
  const router = useRouter();
  const pathname = usePathname();

  const handleFinish = async (values: any) => {
    if (
      values?.type === undefined &&
      values?.status === undefined &&
      values?.city === undefined &&
      values?.furnished === undefined &&
      values?.age === undefined &&
      values?.parking === undefined
    )
      return window.alert('You must choose at least one filter');
    // remove undefine values
    const payload: any = {};
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        payload[key] = values[key];
      }
    });

    // construct query string
    const queryString = new URLSearchParams(payload).toString();
    router.push(`${pathname}?${queryString}`);
    handleHideModal();
  };
  return (
    <Form
      onFinish={handleFinish}
      layout="vertical"
      initialValues={searchParams}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <PropertyFormItem name="type" label="Property Type">
          <Select options={PROPERTY_TYPES} />
        </PropertyFormItem>
        <PropertyFormItem name="status" label="Rent / Sale">
          <Select options={PROPERTY_STATUSES} />
        </PropertyFormItem>
        <PropertyFormItem name="city" label="City">
          <Select options={CITIES} />
        </PropertyFormItem>
        <PropertyFormItem name="furnished" label="Furnished">
          <Select options={FURNISHED_STATUSES} />
        </PropertyFormItem>
        <PropertyFormItem name="age" label="Age">
          <InputNumber className="w-full" type="number" placeholder="Age" />
        </PropertyFormItem>
        <PropertyFormItem name="parking" label="Parking">
          <Select options={PARKING} />
        </PropertyFormItem>
      </div>
      <div className="flex justify-end gap-2 mt-7">
        <Button type="default" onClick={handleHideModal}>
          Cancel
        </Button>
        <Button htmlType="submit" type="primary">
          Search Property
        </Button>
      </div>
    </Form>
  );
};

export default PropertiesFiltersForm;

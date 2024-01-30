'use client';

import { useState } from 'react';
import { Button, Form, Input, InputNumber, Modal, message } from 'antd';

import PropertyFormItem from '../../properties/form/common/form-item';
import { AddQuery } from '@/actions/queries';

interface Props {
  propertyId: string;
}

const PropertyPageQueryModal = (props: Props) => {
  const { propertyId } = props;
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = () => setIsShowModal(false);

  const handleFinish = async (values: any) => {
    try {
      setIsLoading(true);
      const payload = { ...values, propertyId };
      const res = await AddQuery(payload);
      if (res.error) throw new Error(res.error);
      message.success('Query created successfully!');
      setIsShowModal(false);
    } catch (error: any) {
      console.log(error);
      message.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-7">
      <Button onClick={() => setIsShowModal(true)} block>
        Query For more Info
      </Button>
      {isShowModal && (
        <Modal
          open={isShowModal}
          onCancel={handleCloseModal}
          title="Send a query to the Owner"
          centered
          width={600}
          footer={null}
        >
          <Form
            className="flex flex-col gap-5"
            layout="vertical"
            onFinish={handleFinish}
          >
            <PropertyFormItem
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'Name is required!',
                },
              ]}
            >
              <Input placeholder="Your Name" />
            </PropertyFormItem>
            <PropertyFormItem
              name="quoteAmount"
              label="Quote Amount"
              rules={[
                {
                  required: true,
                  message: 'Quote Amount is required!',
                },
              ]}
            >
              <InputNumber className="w-full" placeholder="Your Quote Amount" />
            </PropertyFormItem>
            <PropertyFormItem
              name="message"
              label="Message"
              rules={[
                {
                  required: true,
                  message: 'Message is required!',
                },
              ]}
            >
              <Input.TextArea
                rows={2}
                placeholder="Please write your message"
              />
            </PropertyFormItem>
            <PropertyFormItem
              name="phoneNumber"
              label="Phone"
              rules={[
                {
                  required: true,
                  message: 'Phone is required!',
                },
              ]}
            >
              <InputNumber className="w-full" placeholder="Your Phone" />
            </PropertyFormItem>
            <div className="flex justify-end gap-3">
              <Button
                htmlType="button"
                onClick={handleCloseModal}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Send My Query
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default PropertyPageQueryModal;

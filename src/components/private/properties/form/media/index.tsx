'use client';
import { useState } from 'react';
import { Form, Upload } from 'antd';

import { PropertyFormStepProps } from '@/types';
import BackNextButtons from '../common/back-next-buttons';

const PropertyFormMedia = (props: PropertyFormStepProps) => {
  const { currentStep, finalValues, setCurrentStep, setFinalValues } = props;
  const [tempFiles, setTempFiles] = useState<any[]>([]);
  const handleFinish = () => {
    setFinalValues({
      ...finalValues,
      media: {
        newlyUploadedFiles: tempFiles,
        images: finalValues?.media?.images,
      },
    });
    setCurrentStep(currentStep + 1);
  };
  return (
    <Form
      layout="vertical"
      initialValues={finalValues?.media?.newlyUploadedFiles}
      onFinish={handleFinish}
    >
      <Upload
        listType="picture-card"
        multiple
        accept="image/jpeg,image/jpg,image/png,image/webp"
        beforeUpload={(file: any) => {
          setTempFiles((prev) => [...prev, file]);
          return false;
        }}
      >
        Upload
      </Upload>
      <BackNextButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </Form>
  );
};

export default PropertyFormMedia;

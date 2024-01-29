'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Form, Upload } from 'antd';

import { PropertyFormStepProps, UploadedImageToCloudinaryType } from '@/types';
import BackNextButtons from '../common/back-next-buttons';
import { destroyImageFromCloudinary } from '@/helpers/imageUpload';

const PropertyFormMedia = (props: PropertyFormStepProps) => {
  const { currentStep, finalValues, setCurrentStep, setFinalValues, isEdit } =
    props;
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

  const handleDeleteImage = async (el: UploadedImageToCloudinaryType) => {
    let tempMediaImages = finalValues?.media?.images;
    if (tempMediaImages?.length < 2)
      return window.alert('You can delete when you have more than one image!');
    await destroyImageFromCloudinary(el?.public_id);
    tempMediaImages = tempMediaImages?.filter(
      (img: UploadedImageToCloudinaryType) => img.public_id !== el?.public_id
    );
    setFinalValues({
      ...finalValues,
      media: {
        newlyUploadedFiles: tempFiles,
        images: tempMediaImages,
      },
    });
  };

  return (
    <Form
      layout="vertical"
      initialValues={finalValues?.media?.newlyUploadedFiles}
      onFinish={handleFinish}
    >
      <div className="flex flex-wrap gap-5 mb-5">
        {finalValues?.media?.images?.map(
          (el: UploadedImageToCloudinaryType) => (
            <div
              key={el?.public_id}
              className="flex flex-col gap-3 items-center justify-center border border-dashed border-gray-400 p-2 rounded"
            >
              <Image
                src={el?.url}
                alt={el?.public_id}
                height={100}
                width={100}
                className="object-contain"
              />
              <span
                className="text-red-500 underline cursor-pointer text-sm"
                onClick={() => handleDeleteImage(el)}
              >
                Delete
              </span>
            </div>
          )
        )}
      </div>
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
      {!isEdit && (
        <span className="text-xs text-slate-500">
          In Clone action, you have to upload new images!
        </span>
      )}
      <BackNextButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </Form>
  );
};

export default PropertyFormMedia;

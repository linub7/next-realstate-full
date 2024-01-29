'use client';

import { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, message } from 'antd';
import { useRouter, useParams } from 'next/navigation';

import { PropertyFormStepProps } from '@/types';
import BackNextButtons from '../common/back-next-buttons';
import PropertyFormItem from '../common/form-item';
import { SHOW_OWNER_DETAILS } from '@/constants';
import { uploadMultipleFiles } from '@/utils/uploadMultipleFiles';
import { AddProperty, EditProperty } from '@/actions/properties';

const PropertyFormContact = (props: PropertyFormStepProps) => {
  const {
    currentStep,
    finalValues,
    setCurrentStep,
    setFinalValues,
    isEdit = false,
  } = props;
  const { id } = useParams();
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isShowButton, setIsShowButton] = useState(true);

  const router = useRouter();

  const handleImageUpload = () => {
    const { media } = finalValues;
    const { newlyUploadedFiles } = media;
    let filesArray = Array.from(newlyUploadedFiles);
    filesArray.forEach((img: any) => {
      if (
        img.type !== 'image/jpeg' &&
        img.type !== 'image/jpg' &&
        img.type !== 'image/png' &&
        img.type !== 'image/webp'
      ) {
        filesArray = filesArray.filter((el: any) => el?.name !== img?.name);
        return;
      } else if (img.size > 1024 * 1024 * 2) {
        filesArray = filesArray.filter((el: any) => el?.name !== img?.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
          setImages((images) => [...images, e?.target?.result]);
        };
      }
    });
    setIsShowButton(false);
  };
  const handleFinishCreate = async (values: any) => {
    let tempFinalValues = { ...finalValues, contact: values };
    if (!images || images?.length < 1)
      return window.alert('OOPS! Please upload images first!');
    try {
      setLoading(true);
      const imagesUrls = await uploadMultipleFiles(images);
      const payload = {
        ...tempFinalValues.basic,
        ...tempFinalValues.location,
        ...tempFinalValues.amenities,
        ...tempFinalValues.contact,
        media: imagesUrls,
      };
      const res = await AddProperty(payload);
      if (res.error) throw new Error(res.error);
      message.success('Property Added successfully!');
      router.push('/user/properties');
    } catch (error: any) {
      console.log(error);
      message.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleFinishEdit = async (values: any) => {
    let tempFinalValues = { ...finalValues, contact: values };
    let imagesUrls: any[] = [];
    if (isEdit && finalValues?.media?.newlyUploadedFiles?.length > 0) {
      if (!images || images?.length < 1)
        return window.alert('OOPS! Please upload images first!');
      imagesUrls = await uploadMultipleFiles(images);
    }

    try {
      setLoading(true);
      const payload = {
        ...tempFinalValues.basic,
        ...tempFinalValues.location,
        ...tempFinalValues.amenities,
        ...tempFinalValues.contact,
        media:
          isEdit && finalValues?.media?.newlyUploadedFiles?.length > 0
            ? [...tempFinalValues?.media?.images, ...imagesUrls]
            : tempFinalValues?.media?.images,
      };
      const res = await EditProperty(
        typeof id === 'string' ? id : id[0],
        payload
      );
      if (res.error) throw new Error(res.error);
      message.success('Property Edited successfully!');
      router.push('/user/properties');
    } catch (error: any) {
      console.log(error);
      message.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      layout="vertical"
      initialValues={finalValues?.contact}
      onFinish={isEdit ? handleFinishEdit : handleFinishCreate}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <PropertyFormItem
          name="ownerName"
          label="Owner Name"
          rules={[
            {
              required: true,
              message: 'Owner Name is required!',
            },
          ]}
        >
          <Input placeholder="Owner Name" />
        </PropertyFormItem>
        <PropertyFormItem
          name="ownerPhone"
          label="Owner Number"
          rules={[
            {
              required: true,
              message: 'Owner Number is required!',
            },
          ]}
        >
          <InputNumber
            className="w-full"
            type="number"
            placeholder="Owner Number"
          />
        </PropertyFormItem>
        <PropertyFormItem
          name="ownerEmail"
          label="Owner Email"
          rules={[
            {
              required: true,
              message: 'Owner Email is required!',
            },
          ]}
        >
          <Input placeholder="Owner Email" />
        </PropertyFormItem>
        <PropertyFormItem
          name="showOwnerContact"
          label="Show Owner Contact"
          rules={[
            {
              required: true,
              message: 'Show Owner Contact is required!',
            },
          ]}
        >
          <Select options={SHOW_OWNER_DETAILS} />
        </PropertyFormItem>
      </div>
      {isShowButton && !isEdit ? (
        <div className="flex justify-end gap-2 mt-7">
          <Button type="default" onClick={handleImageUpload}>
            Upload Images
          </Button>
        </div>
      ) : isEdit &&
        finalValues?.media?.newlyUploadedFiles?.length > 0 &&
        images?.length < 1 ? (
        <div className="flex justify-end gap-2 mt-7">
          <Button type="default" onClick={handleImageUpload}>
            Upload Images
          </Button>
        </div>
      ) : null}
      <BackNextButtons
        currentStep={currentStep}
        loading={loading}
        setCurrentStep={setCurrentStep}
      />
    </Form>
  );
};

export default PropertyFormContact;

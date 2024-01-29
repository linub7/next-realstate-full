'use client';

import { useState } from 'react';
import { Steps } from 'antd';

import PropertyFormBasic from './basic';
import PropertyFormLocation from './location';
import PropertyFormAmenities from './amenities';
import PropertyFormMedia from './media';
import PropertyFormContact from './contact';

interface Props {
  initialValues?: any;
  isEdit?: boolean;
}

const PropertyForm = (props: Props) => {
  const { initialValues = {}, isEdit = false } = props;

  const [currentStep, setCurrentStep] = useState(0);
  const [finalValues, setFinalValues] = useState({
    basic: initialValues,
    location: initialValues,
    amenities: initialValues,
    media: {
      newlyUploadedFiles: [],
      images: initialValues?.media || [],
    },
    contact: initialValues,
  });

  const commonPropsForSteps = {
    currentStep,
    finalValues,
    setCurrentStep,
    setFinalValues,
    isEdit,
  };

  const CREATE_PROPERTY_STEPS = [
    { title: 'Basic', content: <PropertyFormBasic {...commonPropsForSteps} /> },
    {
      title: 'Location',
      content: <PropertyFormLocation {...commonPropsForSteps} />,
    },
    {
      title: 'Amenities',
      content: <PropertyFormAmenities {...commonPropsForSteps} />,
    },
    { title: 'Media', content: <PropertyFormMedia {...commonPropsForSteps} /> },
    {
      title: 'Contact',
      content: <PropertyFormContact {...commonPropsForSteps} />,
    },
  ];
  return (
    <div>
      <Steps current={currentStep} items={CREATE_PROPERTY_STEPS} />
      <div className="mt-8">{CREATE_PROPERTY_STEPS[currentStep]?.content}</div>
    </div>
  );
};

export default PropertyForm;

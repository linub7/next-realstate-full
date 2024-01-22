'use client';

import { useEffect, useState } from 'react';
import { Steps } from 'antd';

import PropertyFormBasic from './basic';
import PropertyFormLocation from './location';
import PropertyFormAmenities from './amenities';
import PropertyFormMedia from './media';
import PropertyFormContact from './contact';

interface Props {}

const PropertyForm = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [finalValues, setFinalValues] = useState({
    basic: {},
    location: {},
    amenities: {},
    media: {},
    contact: {},
  });

  useEffect(() => {
    console.log(finalValues);

    return () => {};
  }, [finalValues]);

  const commonPropsForSteps = {
    currentStep,
    finalValues,
    setCurrentStep,
    setFinalValues,
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

import { PropertyFormStepProps } from '@/types';
import BackNextButtons from '../common/back-next-buttons';

const PropertyFormAmenities = (props: PropertyFormStepProps) => {
  const { currentStep, finalValues, setCurrentStep, setFinalValues } = props;
  return (
    <div>
      <BackNextButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

export default PropertyFormAmenities;

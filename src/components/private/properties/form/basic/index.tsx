import { PropertyFormStepProps } from '@/types';
import BackNextButtons from '../back-next-buttons';

const PropertyFormBasic = (props: PropertyFormStepProps) => {
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

export default PropertyFormBasic;

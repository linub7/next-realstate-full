export interface PropertyFormStepProps {
  currentStep: number;
  finalValues: any;
  setCurrentStep: (currentStep: number) => void;
  setFinalValues: (finalValues: any) => void;
}

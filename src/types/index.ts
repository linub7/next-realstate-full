export interface PropertyFormStepProps {
  currentStep: number;
  finalValues: any;
  setCurrentStep: (currentStep: number) => void;
  setFinalValues: (finalValues: any) => void;
  isEdit?: boolean;
}

export interface UploadedImageToCloudinaryType {
  url: string;
  public_id: string;
}

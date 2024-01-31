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

export interface SubscriptionPlan {
  name: string;
  price: number;
  propertiesLimit: number;
  imagesPerPropertyLimit: number;
  features: string[];
}

export interface FilterSearchParam {
  type: string;
  status: string;
  city: string;
  furnished: string;
  age: string;
  parking: string;
}

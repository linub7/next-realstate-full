import { Button } from 'antd';

interface Props {
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
}

const BackNextButtons = (props: Props) => {
  const { currentStep, setCurrentStep } = props;
  return (
    <div className="flex justify-end gap-2 mt-7">
      <Button
        disabled={currentStep === 0}
        type="default"
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        Back
      </Button>
      <Button htmlType="submit" disabled={currentStep === 4} type="primary">
        Next
      </Button>
    </div>
  );
};

export default BackNextButtons;

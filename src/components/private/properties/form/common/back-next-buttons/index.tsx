import { Button } from 'antd';

interface Props {
  currentStep: number;
  loading?: boolean;
  setCurrentStep: (currentStep: number) => void;
}

const BackNextButtons = (props: Props) => {
  const { currentStep, setCurrentStep, loading = false } = props;
  return (
    <div className="flex justify-end gap-2 mt-7">
      <Button
        disabled={currentStep === 0 || loading}
        type="default"
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        Back
      </Button>
      {currentStep === 4 ? (
        <Button htmlType="submit" type="primary" loading={loading}>
          Save Property
        </Button>
      ) : (
        <Button htmlType="submit" type="primary">
          Next
        </Button>
      )}
    </div>
  );
};

export default BackNextButtons;

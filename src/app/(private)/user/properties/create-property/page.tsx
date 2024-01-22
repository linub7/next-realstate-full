import PageTitle from '@/components/common/page-title';
import PropertyForm from '@/components/private/properties/form';

interface Props {}

const CreatePropertyPage = (props: Props) => {
  return (
    <div>
      <PageTitle title="Create Property" />
      <PropertyForm />
    </div>
  );
};

export default CreatePropertyPage;

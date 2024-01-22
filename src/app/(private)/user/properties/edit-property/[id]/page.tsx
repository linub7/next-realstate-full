import PageTitle from '@/components/common/page-title';
import PropertyForm from '@/components/private/properties/form';

interface Props {}

const EditPropertyPage = (props: Props) => {
  return (
    <div>
      <PageTitle title="Edit Property" />
      <PropertyForm />
    </div>
  );
};

export default EditPropertyPage;

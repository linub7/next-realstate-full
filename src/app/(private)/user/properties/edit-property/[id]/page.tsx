import { GetSingleProperty } from '@/actions/properties';
import PageTitle from '@/components/common/page-title';
import PropertyForm from '@/components/private/properties/form';

interface Props {
  params: {
    id: string;
  };
}

const EditPropertyPage = async (props: Props) => {
  const {
    params: { id },
  } = props;

  const response = await GetSingleProperty(id);

  return (
    <div>
      <PageTitle title="Edit Property" />
      <PropertyForm initialValues={response?.data!} isEdit={true} />
    </div>
  );
};

export default EditPropertyPage;

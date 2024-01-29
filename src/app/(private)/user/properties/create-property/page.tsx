import { GetSingleProperty } from '@/actions/properties';
import PageTitle from '@/components/common/page-title';
import PropertyForm from '@/components/private/properties/form';

interface Props {
  searchParams: any;
}

const CreatePropertyPage = async (props: Props) => {
  const { searchParams } = props;
  const cloneFrom = searchParams?.cloneFrom || '';
  let response: any = {};
  if (cloneFrom) {
    response = await GetSingleProperty(cloneFrom);
  }
  return (
    <div>
      <PageTitle title="Create Property" />
      <PropertyForm
        initialValues={response?.status === 'success' ? response?.data : {}}
      />
    </div>
  );
};

export default CreatePropertyPage;

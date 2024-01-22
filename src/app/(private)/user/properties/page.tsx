import LinkButton from '@/components/common/buttons/link';
import PageTitle from '@/components/common/page-title';
import PropertiesTable from '@/components/private/properties/table';

interface Props {}

const UserPropertiesPage = (props: Props) => {
  return (
    <div>
      <PageTitle title="Properties">
        <LinkButton
          btnTitle="Create Property"
          path="/user/properties/create-property"
        />
      </PageTitle>
      <PropertiesTable />
    </div>
  );
};

export default UserPropertiesPage;

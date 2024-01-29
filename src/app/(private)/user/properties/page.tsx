import { Suspense } from 'react';

import LinkButton from '@/components/common/buttons/link';
import CommonLoader from '@/components/common/loader';
import PageTitle from '@/components/common/page-title';
import PropertiesFilters from '@/components/private/properties/filters';
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
      <PropertiesFilters />
      <Suspense fallback={<CommonLoader />}>
        <PropertiesTable />
      </Suspense>
    </div>
  );
};

export default UserPropertiesPage;

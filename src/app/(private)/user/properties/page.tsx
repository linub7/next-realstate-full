import { Suspense } from 'react';

import LinkButton from '@/components/common/buttons/link';
import CommonLoader from '@/components/common/loader';
import PageTitle from '@/components/common/page-title';
import PropertiesFilters from '@/components/private/filters';
import PropertiesTable from '@/components/private/properties/table';
import { FilterSearchParam } from '@/types';

interface Props {
  searchParams: FilterSearchParam;
}

const UserPropertiesPage = (props: Props) => {
  const { searchParams } = props;
  const key = JSON.stringify(searchParams);
  return (
    <div>
      <PageTitle title="Properties">
        <LinkButton
          btnTitle="Create Property"
          path="/user/properties/create-property"
        />
      </PageTitle>
      <PropertiesFilters searchParams={searchParams} />
      <Suspense fallback={<CommonLoader />} key={key}>
        <PropertiesTable searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default UserPropertiesPage;

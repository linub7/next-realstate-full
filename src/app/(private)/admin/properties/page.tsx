import { Suspense } from 'react';

import CommonLoader from '@/components/common/loader';
import PageTitle from '@/components/common/page-title';
import PropertiesFilters from '@/components/private/filters';
import PropertiesTable from '@/components/private/properties/table';
import { FilterSearchParam } from '@/types';

interface Props {
  searchParams: FilterSearchParam;
}

const AdminPropertiesPage = (props: Props) => {
  const { searchParams } = props;
  const key = JSON.stringify(searchParams);
  return (
    <div>
      <PageTitle title="Admin / Properties" />
      <PropertiesFilters searchParams={searchParams} />
      <Suspense fallback={<CommonLoader />} key={key}>
        <PropertiesTable searchParams={searchParams} isAdmin={true} />
      </Suspense>
    </div>
  );
};

export default AdminPropertiesPage;

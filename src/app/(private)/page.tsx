import { Suspense } from 'react';

import CommonLoader from '@/components/common/loader';
import PropertiesFilters from '@/components/private/filters';
import HomePagePropertiesData from '@/components/private/home/data';
import { FilterSearchParam } from '@/types';

interface Props {
  searchParams: FilterSearchParam;
}

export default async function Home(props: Props) {
  const { searchParams } = props;
  const key = JSON.stringify(searchParams);

  return (
    <div>
      <PropertiesFilters searchParams={searchParams} />
      <Suspense fallback={<CommonLoader />} key={key}>
        <HomePagePropertiesData searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

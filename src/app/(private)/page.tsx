import { Suspense } from 'react';

import CommonLoader from '@/components/common/loader';
import PropertiesFilters from '@/components/private/filters';
import HomePagePropertiesData from '@/components/private/home/data';

export default async function Home() {
  return (
    <div>
      <PropertiesFilters />
      <Suspense fallback={<CommonLoader />}>
        <HomePagePropertiesData />
      </Suspense>
    </div>
  );
}

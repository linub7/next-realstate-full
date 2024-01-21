'use client';

import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';

import LayoutProviderHeader from '@/components/common/layout-provider/header';
import CommonLoader from '@/components/common/loader';

interface Props {
  children: ReactNode;
}

const LayoutProvider = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const isPubicRoute = ['sign-in', 'sign-up']?.includes(
    pathname?.split('/')[1]
  );
  return (
    <div>
      {!isPubicRoute && (
        <LayoutProviderHeader
          isPubicRoute={isPubicRoute}
          setIsLoading={setIsLoading}
        />
      )}
      {isLoading ? (
        <CommonLoader />
      ) : (
        <div className={`${isPubicRoute ? '' : 'py-5 lg:px-20 px-5'}`}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default LayoutProvider;

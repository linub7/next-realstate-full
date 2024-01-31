'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { message } from 'antd';

import { User } from '@prisma/client';
import LayoutProviderHeader from '@/components/common/layout-provider/header';
import CommonLoader from '@/components/common/loader';
import { GetCurrentUserFromMongoDb } from '@/actions/users';
import { ADMIN_MENU, USER_MENU } from '@/constants';
import LinkButton from '@/components/common/buttons/link';

interface Props {
  children: ReactNode;
}

const LayoutProvider = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [menuToShow, setMenuToShow] = useState(USER_MENU);
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);
  const pathname = usePathname();
  const isPubicRoute = ['sign-in', 'sign-up']?.includes(
    pathname?.split('/')[1]
  );
  const isAdminRoute = pathname.split('/')[1] === 'admin';

  useEffect(() => {
    if (!isPubicRoute) getCurrentUser();

    return () => {};
  }, [isPubicRoute]);

  const getCurrentUser = async () => {
    try {
      setIsLoading(true);
      const response: any = await GetCurrentUserFromMongoDb();
      if (response?.error) throw new Error(response?.error?.message);
      setCurrentUserData(response?.data);
      if (response?.data?.isAdmin) {
        setMenuToShow(ADMIN_MENU);
      }
    } catch (error: any) {
      message.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };
  if (isAdminRoute && !currentUserData?.isAdmin)
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
        <span className="text-red-600 font-bold">
          You are not authorized to view this page
        </span>
        <LinkButton btnTitle="Back to home" path="/" />
      </div>
    );
  return (
    <div>
      {!isPubicRoute && (
        <LayoutProviderHeader
          currentUserData={currentUserData}
          menuToShow={menuToShow}
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

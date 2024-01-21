'use client';

import { useEffect, useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import { Button, Dropdown, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';

import { GetCurrentUserFromMongoDb } from '@/actions/users';
import { ADMIN_MENU, USER_MENU } from '@/constants';

interface Props {
  isPubicRoute: boolean;
  setIsLoading: (state: boolean) => void;
}

const LayoutProviderHeader = (props: Props) => {
  const { isPubicRoute, setIsLoading } = props;
  const [menuToShow, setMenuToShow] = useState(USER_MENU);
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);

  const router = useRouter();

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

  return (
    <div className="lg:px-5 px-20">
      <div className="bg-primary p-3 flex justify-between items-center rounded-b">
        <Link href={'/'} className="text-2xl text-white font-bold no-underline">
          Linuxxii
        </Link>
        <div className="bg-white py-2 px-5 rounded-sm flex items-center gap-5">
          <Dropdown
            menu={{
              items: menuToShow.map((item: any, index: number) => ({
                key: index,
                label: item?.name,
                onClick: () => {
                  router?.push(item?.path);
                },
              })),
            }}
          >
            <Button className="text-primary" type="link">
              {currentUserData?.username}
            </Button>
          </Dropdown>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
};

export default LayoutProviderHeader;

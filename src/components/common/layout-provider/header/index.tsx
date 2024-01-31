'use client';

import { UserButton } from '@clerk/nextjs';
import { Button, Dropdown, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import type { User } from '@prisma/client';

interface Props {
  menuToShow: { name: string; path: string }[];
  currentUserData: User | null;
}

const LayoutProviderHeader = (props: Props) => {
  const { currentUserData, menuToShow } = props;

  const router = useRouter();

  return (
    <div className="lg:px-20 px-5">
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
          <UserButton afterSignOutUrl="/sign-in" signInUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
};

export default LayoutProviderHeader;

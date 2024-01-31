'use client';

import Image from 'next/image';
import { Table, TableColumnsType } from 'antd';
import dayjs from 'dayjs';

import { DAYJS_FORMAT } from '@/constants';
import type { User } from '@prisma/client';

interface Props {
  users: User[];
}

const AdminUsersTable = (props: Props) => {
  const USER_COLUMNS: TableColumnsType<User> = [
    {
      title: 'Profile',
      dataIndex: 'profilePic',
      key: 'profilePic',
      render(profilePic: string) {
        return (
          <Image
            src={profilePic}
            alt={profilePic}
            width={35}
            height={35}
            className="rounded-full"
          />
        );
      },
    },
    { title: 'Name', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Registered On',
      dataIndex: 'createdAt',
      key: 'createdAt',
      responsive: ['md'],
      render(createdAt: string) {
        return dayjs(createdAt).format(DAYJS_FORMAT);
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      responsive: ['md'],
      render(status: string, record: User) {
        return record?.isActive ? 'Active' : 'InActive';
      },
    },
  ];

  return (
    <div>
      <Table
        dataSource={props?.users}
        columns={USER_COLUMNS}
        rowKey={({ id }) => id}
      />
    </div>
  );
};

export default AdminUsersTable;

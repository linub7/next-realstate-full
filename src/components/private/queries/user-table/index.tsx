'use client';

import dayjs from 'dayjs';
import { Table } from 'antd';

import type { Property, Query } from '@prisma/client';
import { DAYJS_FORMAT } from '@/constants';

interface Props {
  queries: Query[];
}

const UserQueriesPageTable = (props: Props) => {
  const QUERY_COLUMN = [
    {
      key: '1',
      title: 'Property',
      dataIndex: 'property',
      render: (property: Property) => property?.name,
    },
    {
      key: '2',
      title: 'Quote Amount',
      dataIndex: 'quoteAmount',
      render: (quoteAmount: number) => `$${quoteAmount}`,
    },
    {
      key: '3',
      title: 'Message',
      dataIndex: 'message',
    },
    {
      key: '4',
      title: 'Date & Time',
      dataIndex: 'createdAt',
      render: (createdAt: string) => dayjs(createdAt).format(DAYJS_FORMAT),
    },
  ];
  return (
    <div>
      <Table
        columns={QUERY_COLUMN}
        dataSource={props?.queries}
        rowKey={({ id }) => id}
      />
    </div>
  );
};

export default UserQueriesPageTable;

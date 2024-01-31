'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, Table, message } from 'antd';
import dayjs from 'dayjs';
import type { TableColumnsType } from 'antd';

import type { Property, Query } from '@prisma/client';
import { GetSingleQueryByPropertyId } from '@/actions/queries';
import { DAYJS_FORMAT } from '@/constants';

interface Props {
  isShowQueriesModal: boolean;
  selectedProperty: Property | null;
  setIsShowQueriesModal: Dispatch<SetStateAction<boolean>>;
}

const PropertiesTableClientSidePropertyQueries = (props: Props) => {
  const { isShowQueriesModal, selectedProperty, setIsShowQueriesModal } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [queries, setQueries] = useState<Query[]>([]);

  useEffect(() => {
    if (selectedProperty) handleGetQueries();
    return () => {
      setIsLoading(false);
      setQueries([]);
    };
  }, [selectedProperty]);

  const QUERY_COLUMN: TableColumnsType<Query> = [
    {
      key: '1',
      title: 'Customer Name',
      dataIndex: 'name',
    },
    {
      key: '2',
      title: 'Customer Phone',
      dataIndex: 'phoneNumber',
    },
    {
      key: '3',
      title: 'Quote Amount',
      dataIndex: 'quoteAmount',
      render: (quoteAmount: number) => `$${quoteAmount}`,
    },
    {
      key: '4',
      title: 'Message',
      dataIndex: 'message',
      responsive: ['lg'],
    },
    {
      key: '5',
      title: 'Date & Time',
      dataIndex: 'createdAt',
      render: (createdAt: string) => dayjs(createdAt).format(DAYJS_FORMAT),
    },
  ];

  const handleGetQueries = async () => {
    try {
      setIsLoading(true);
      const response = await GetSingleQueryByPropertyId(selectedProperty?.id!);
      if (response.error) throw new Error(response?.error);
      setQueries(response?.data!);
    } catch (error: any) {
      console.log(error);
      message.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => setIsShowQueriesModal(false);
  return (
    <Modal
      title={`Queries for ${selectedProperty?.name}`}
      open={isShowQueriesModal}
      width={1000}
      footer={null}
      onCancel={handleCloseModal}
    >
      <Table
        columns={QUERY_COLUMN}
        dataSource={queries}
        loading={isLoading}
        rowKey={({ id }) => id}
      />
    </Modal>
  );
};

export default PropertiesTableClientSidePropertyQueries;

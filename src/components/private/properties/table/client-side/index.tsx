'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Button, Table, message } from 'antd';

import type { Property } from '@prisma/client';
import { DeleteProperty } from '@/actions/properties';
import { destroyImageFromCloudinary } from '@/helpers/imageUpload';
import { DAYJS_FORMAT } from '@/constants';
import PropertiesTableClientSidePropertyQueries from './property-queries';

interface Props {
  properties: Property[];
}

const PropertiesTableClientSide = (props: Props) => {
  const { properties } = props;
  const [loading, setLoading] = useState(false);
  const [isShowQueries, setIsShowQueries] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const router = useRouter();

  const handleDeleteProperty = async (record: Property) => {
    if (window.confirm('Are you sure?')) {
      try {
        setLoading(true);
        for (const image of record?.media) {
          await destroyImageFromCloudinary(image?.public_id);
        }
        const response = await DeleteProperty(record?.id);
        if (response?.error) throw new Error(response?.error);
        message.success('Deleted Successfully!');
      } catch (error: any) {
        message.error(error?.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClickQueries = (record: Property) => {
    setSelectedProperty(record);
    setIsShowQueries(true);
  };

  const PROPERTY_COLUMNS = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render(price: number) {
        return `$${price}`;
      },
    },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render(updatedAt: Date) {
        return dayjs(updatedAt).format(DAYJS_FORMAT);
      },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render(value: any, record: Property) {
        return (
          <div className="flex gap-5 items-center">
            <Button size="small" onClick={() => handleClickQueries(record)}>
              Queries
            </Button>
            <Button size="small" onClick={() => handleDeleteProperty(record)}>
              <i className="ri-delete-bin-line"></i>
            </Button>
            <Button
              size="small"
              onClick={() =>
                router.push(
                  `/user/properties/create-property?cloneFrom=${record?.id}`
                )
              }
            >
              <i className="ri-file-copy-line"></i>
            </Button>
            <Button
              size="small"
              onClick={() =>
                router.push(`/user/properties/edit-property/${record?.id}`)
              }
            >
              <i className="ri-pencil-line"></i>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="capitalize">
      <Table
        dataSource={properties}
        columns={PROPERTY_COLUMNS}
        loading={loading}
        rowKey={({ id }) => id}
      />
      {isShowQueries && (
        <PropertiesTableClientSidePropertyQueries
          selectedProperty={selectedProperty}
          isShowQueriesModal={isShowQueries}
          setIsShowQueriesModal={setIsShowQueries}
        />
      )}
    </div>
  );
};

export default PropertiesTableClientSide;

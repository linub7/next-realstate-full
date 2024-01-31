'use client';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

import PropertiesFiltersForm from './form';
import PropertiesFiltersTags from './tags';

interface Props {
  searchParams: any;
}

const PropertiesFilters = (props: Props) => {
  const {
    searchParams: { age, city, furnished, parking, status, type },
  } = props;
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleShowModal = () => setIsShowModal(true);
  const handleHideModal = () => setIsShowModal(false);
  const handleClearFilters = () => router.push(pathname);

  return (
    <>
      <div className="flex items-center justify-between p-5 border border-solid border-gray-300 rounded-sm my-5">
        <PropertiesFiltersTags searchParams={props?.searchParams} />
        <div className="flex items-center gap-5">
          {(age !== undefined ||
            city !== undefined ||
            furnished !== undefined ||
            parking !== undefined ||
            status !== undefined ||
            type !== undefined) && (
            <Button onClick={handleClearFilters}>Clear</Button>
          )}
          <Button type="primary" onClick={handleShowModal}>
            Show Filters
          </Button>
        </div>
      </div>
      {isShowModal && (
        <Modal
          title={
            <h1 className="text-xl font-semibold text-primary text-center">
              Apply Filters
            </h1>
          }
          open={isShowModal}
          centered
          width={800}
          footer={null}
          onCancel={handleHideModal}
        >
          <PropertiesFiltersForm
            searchParams={props?.searchParams}
            handleHideModal={handleHideModal}
          />
        </Modal>
      )}
    </>
  );
};

export default PropertiesFilters;

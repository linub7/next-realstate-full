import type { Property } from '@prisma/client';
import { GetAllProperties } from '@/actions/properties';
import HomePagePropertiesDataItem from './item';

interface Props {}

const HomePagePropertiesData = async (props: Props) => {
  const response = await GetAllProperties();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {response?.data?.map((item: Property) => (
        <HomePagePropertiesDataItem key={item?.id} property={item} />
      ))}
    </div>
  );
};

export default HomePagePropertiesData;

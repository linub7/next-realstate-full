import { GetAllMyProperties } from '@/actions/properties';
import PropertiesTableClientSide from './client-side';
import { FilterSearchParam } from '@/types';

interface Props {
  searchParams: FilterSearchParam;
}

const PropertiesTable = async (props: Props) => {
  const { searchParams } = props;
  const response = await GetAllMyProperties(searchParams);

  return (
    <div>
      <PropertiesTableClientSide properties={response?.data!} />
    </div>
  );
};

export default PropertiesTable;

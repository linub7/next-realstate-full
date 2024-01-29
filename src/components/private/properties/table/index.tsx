import { GetAllMyProperties } from '@/actions/properties';
import PropertiesTableClientSide from './client-side';

interface Props {}

const PropertiesTable = async (props: Props) => {
  const response = await GetAllMyProperties();

  return (
    <div>
      <PropertiesTableClientSide properties={response?.data!} />
    </div>
  );
};

export default PropertiesTable;

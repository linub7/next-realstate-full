import { GetAllMyOrAdminProperties } from '@/actions/properties';
import PropertiesTableClientSide from './client-side';
import { FilterSearchParam } from '@/types';

interface Props {
  searchParams: FilterSearchParam;
  isAdmin?: boolean;
}

const PropertiesTable = async (props: Props) => {
  const { searchParams, isAdmin = false } = props;
  const response = await GetAllMyOrAdminProperties(searchParams, isAdmin);

  return (
    <div>
      <PropertiesTableClientSide
        properties={response?.data!}
        isAdmin={isAdmin}
      />
    </div>
  );
};

export default PropertiesTable;

import PageTitle from '@/components/common/page-title';
import { GetAllMyQueries } from '@/actions/queries';
import UserQueriesPageTable from '@/components/private/queries/user-table';

interface Props {}

const UserQueriesPage = async (props: Props) => {
  const response = await GetAllMyQueries();

  return (
    <div>
      <PageTitle title="Queries" />
      <UserQueriesPageTable queries={response?.data!} />
    </div>
  );
};

export default UserQueriesPage;

import { Suspense } from 'react';

import CommonLoader from '@/components/common/loader';
import PageTitle from '@/components/common/page-title';
import AdminUsersTable from '@/components/private/admin/users/table';
import { GetAllAdminUsers } from '@/actions/admin/users';

interface Props {}

const AdminUsersPage = async (props: Props) => {
  const response = await GetAllAdminUsers();
  return (
    <div>
      <PageTitle title="Admin / Users" />
      <Suspense fallback={<CommonLoader />}>
        <AdminUsersTable users={response?.data!} />
      </Suspense>
    </div>
  );
};

export default AdminUsersPage;

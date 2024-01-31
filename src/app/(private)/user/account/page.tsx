import { currentUser } from '@clerk/nextjs';
import dayjs from 'dayjs';

import { GetCurrentUserFromMongoDb } from '@/actions/users';
import AttributeDetails from '@/components/common/attribute-details';
import PageTitle from '@/components/common/page-title';
import SectionTitle from '@/components/common/section-title';
import { DAYJS_FORMAT } from '@/constants';
import { GetAllMyPropertiesCount } from '@/actions/properties';

interface Props {}

const UserAccountPage = async (props: Props) => {
  const clerkUser = await currentUser();
  const response = await GetCurrentUserFromMongoDb();
  const countResponse = await GetAllMyPropertiesCount();
  const mongoUser = response?.data;
  const count = countResponse?.data;
  return (
    <div>
      <PageTitle title="My Account" />

      <div className="flex flex-col gap-5">
        <SectionTitle title="Basic Details" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AttributeDetails
            name="Name"
            value={mongoUser?.username || ''}
            isAccount={true}
          />
          <AttributeDetails
            name="Email"
            value={mongoUser?.email || ''}
            isAccount={true}
          />
          <AttributeDetails
            name="Clerk User Id"
            value={mongoUser?.clerkUserId || ''}
            isAccount={true}
          />
          <AttributeDetails
            name="Registered on"
            value={dayjs(mongoUser?.createdAt).format(DAYJS_FORMAT) || ''}
            isAccount={true}
          />
          <AttributeDetails
            name="Last Login"
            value={dayjs(clerkUser?.lastSignInAt).format(DAYJS_FORMAT) || ''}
            isAccount={true}
          />
          <AttributeDetails
            name="Properties Posted"
            value={count || ''}
            isAccount={true}
          />
        </div>
      </div>

      {/* <div className="flex flex-col gap-5 mt-10">
        <SectionTitle title="Subscription Details" />
        <span>ToDo ...</span>
      </div> */}
    </div>
  );
};

export default UserAccountPage;

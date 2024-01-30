import PageTitle from '@/components/common/page-title';
import SubscriptionsPageItem from '@/components/private/subscriptions/item';
import { SUBSCRIPTIONS_PLANS } from '@/constants';

interface Props {}

const SubscriptionsPage = (props: Props) => {
  return (
    <div>
      <PageTitle title="Subscriptions" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SUBSCRIPTIONS_PLANS?.map((plan, index) => (
          <SubscriptionsPageItem key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;

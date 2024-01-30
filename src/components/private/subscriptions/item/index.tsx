import { SubscriptionPlan } from '@/types';
import BuySubscription from '../buy';

interface Props {
  plan: SubscriptionPlan;
}

const SubscriptionsPageItem = (props: Props) => {
  const { plan } = props;
  const isSelected = plan?.name === 'Basic';

  return (
    <div
      className={`flex flex-col gap-5 justify-between p-5 border border-solid rounded ${
        isSelected ? 'border-primary border-2' : 'border-gray-300'
      } `}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold text-primary">{plan?.name}</h1>
        <h1 className="text-orange-700 text-2xl lg:text-5xl font-bold">
          ${plan?.price}
        </h1>

        <hr />
        <div className="flex flex-col gap-1">
          {plan?.features?.map((feature, index) => (
            <span key={index} className="text-gray-500 text-sm">
              {feature}
            </span>
          ))}
        </div>
      </div>
      <BuySubscription plan={plan} />
    </div>
  );
};

export default SubscriptionsPageItem;

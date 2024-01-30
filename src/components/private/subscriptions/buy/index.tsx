'use client';
import { Button } from 'antd';

import { SubscriptionPlan } from '@/types';

interface Props {
  plan: SubscriptionPlan;
}

const BuySubscription = (props: Props) => {
  const { plan } = props;
  const isDisabled = plan?.price === 0;
  return (
    <Button block disabled={isDisabled}>
      Buy Now
    </Button>
  );
};

export default BuySubscription;

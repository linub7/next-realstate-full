'use client';
import { Button, message } from 'antd';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { SubscriptionPlan } from '@/types';
import { useState } from 'react';
import { GetStripeClientSecret } from '@/actions/payments';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface Props {
  plan: SubscriptionPlan;
}

const BuySubscription = (props: Props) => {
  const [clientSecret, setClientSecret] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { plan } = props;
  const isDisabled = plan?.price === 0;

  const handleGetClientSecret = async () => {
    try {
      setIsLoading(true);
      const response = await GetStripeClientSecret(plan?.price);
      if (response?.error) throw new Error(response?.error);
      setClientSecret(response?.data!);
    } catch (error: any) {
      console.log(error);
      message?.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      block
      disabled={isDisabled || isLoading}
      onClick={handleGetClientSecret}
      loading={isLoading}
    >
      Buy Now
    </Button>
  );
};

export default BuySubscription;

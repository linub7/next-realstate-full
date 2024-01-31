'use server';

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export const GetStripeClientSecret = async (amount: number) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
      description: 'Payment for the realstate properties',
    });
    console.log({ paymentIntent });
    return {
      status: 'success',
      data: 'OK',
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

'use server';
import { revalidatePath } from 'next/cache';

import prisma from '@/config/db';
import { GetCurrentUserFromMongoDb } from '../users';

export const AddProperty = async (property: any) => {
  try {
    const user: any = await GetCurrentUserFromMongoDb();
    property.userId = user?.data?.id;
    await prisma.property.create({ data: property });
    revalidatePath(`/user/properties`);
    return {
      status: 'success',
      data: property,
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

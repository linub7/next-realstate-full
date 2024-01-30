'use server';

import prisma from '@/config/db';
import { GetCurrentUserFromMongoDb } from '../users';

export const AddQuery = async (query: any) => {
  try {
    const user: any = await GetCurrentUserFromMongoDb();
    query.userId = user?.data?.id;
    await prisma.query.create({
      data: query,
    });
    return {
      status: 'success',
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

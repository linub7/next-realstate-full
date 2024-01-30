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

export const GetAllMyQueries = async () => {
  try {
    const user: any = await GetCurrentUserFromMongoDb();
    const userId = user?.data?.id;
    const queries = await prisma.query.findMany({
      where: {
        userId,
      },
      include: {
        property: true,
      },
    });
    return {
      status: 'success',
      data: queries,
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

export const GetSingleQueryByPropertyId = async (propertyId: string) => {
  try {
    const user: any = await GetCurrentUserFromMongoDb();
    const userId = user?.data?.id;
    const queries = await prisma.query.findMany({
      where: {
        userId,
        propertyId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return {
      status: 'success',
      data: queries,
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

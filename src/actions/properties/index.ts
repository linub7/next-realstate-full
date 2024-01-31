'use server';
import { revalidatePath } from 'next/cache';

import prisma from '@/config/db';
import { GetCurrentUserFromMongoDb } from '../users';
import { FilterSearchParam } from '@/types';

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

export const GetAllProperties = async (searchParams: FilterSearchParam) => {
  try {
    const payload = {
      ...searchParams,
      age:
        searchParams?.age !== undefined
          ? parseInt(searchParams?.age)
          : undefined,
    };
    const properties = await prisma.property.findMany({
      where: payload,
      orderBy: {
        updatedAt: 'desc',
      },
    });
    return {
      status: 'success',
      data: properties,
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

export const GetAllMyProperties = async (searchParams: FilterSearchParam) => {
  try {
    const user: any = await GetCurrentUserFromMongoDb();
    const payload = {
      ...searchParams,
      age:
        searchParams?.age !== undefined
          ? parseInt(searchParams?.age)
          : undefined,
    };
    const properties = await prisma.property.findMany({
      where: {
        userId: user?.data?.id,
        ...payload,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    return {
      status: 'success',
      data: properties,
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

export const GetAllMyPropertiesCount = async () => {
  try {
    const user: any = await GetCurrentUserFromMongoDb();
    const propertiesCount = await prisma.property.count({
      where: {
        userId: user?.data?.id,
      },
    });
    return {
      status: 'success',
      data: propertiesCount,
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

export const GetSingleProperty = async (propertyId: string) => {
  try {
    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
      },
    });
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

export const EditProperty = async (propertyId: string, property: any) => {
  try {
    await prisma.property.update({ where: { id: propertyId }, data: property });
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

export const DeleteProperty = async (propertyId: string) => {
  try {
    await prisma.property.delete({ where: { id: propertyId } });
    revalidatePath(`/user/properties`);
    return {
      status: 'success',
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

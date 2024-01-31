import { GetCurrentUserFromMongoDb } from '@/actions/users';
import prisma from '@/config/db';

export const GetAllAdminUsers = async () => {
  try {
    const user: any = await GetCurrentUserFromMongoDb();
    if (!user?.data?.isAdmin) return { error: 'Unauthorized!' };
    const users = await prisma.user.findMany({
      where: {
        id: {
          not: user?.data?.id,
        },
      },
    });

    return {
      status: 'success',
      data: users,
    };
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
};

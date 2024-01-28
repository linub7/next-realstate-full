'use server';

import cloudinaryV2 from '@/cloud';

export const uploadImageToCloudinary = async (filePath: string) => {
  try {
    const { secure_url, public_id } = await cloudinaryV2.uploader.upload(
      filePath,
      {
        resource_type: 'auto',
      }
    );
    return { url: secure_url, public_id };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const destroyImageFromCloudinary = async (public_id: string) => {
  try {
    const { result } = await cloudinaryV2.uploader.destroy(public_id);

    return result;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

'use server';

import { uploadImageToCloudinary } from '@/helpers/imageUpload';

export const uploadMultipleFiles = async (files: string[]): Promise<any[]> => {
  const uploadedFilesResponse = await Promise.all(
    files.map(async (file: string) => {
      const res = await uploadImageToCloudinary(file);
      return res;
    })
  );

  const uploadedFilesUrls = await Promise.all(
    uploadedFilesResponse.map((res) => res)
  );

  return uploadedFilesUrls;
};

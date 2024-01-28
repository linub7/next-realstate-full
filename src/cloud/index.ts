import cloudinary from 'cloudinary';

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET,
  secure: true,
});

export default cloudinaryV2;

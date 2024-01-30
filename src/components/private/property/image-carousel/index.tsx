import Image from 'next/image';
import { Carousel } from 'antd';

import { UploadedImageToCloudinaryType } from '@/types';

interface Props {
  images: UploadedImageToCloudinaryType[];
}

const PropertyImageCarousel = (props: Props) => {
  const { images } = props;
  return (
    <Carousel autoplay>
      {images?.map((el) => (
        <div key={el?.public_id}>
          <Image
            src={el?.url}
            alt={el?.public_id}
            width={450}
            height={450}
            className="w-full h-96 object-cover rounded"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default PropertyImageCarousel;

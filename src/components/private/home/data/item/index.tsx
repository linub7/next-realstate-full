import Image from 'next/image';
import Link from 'next/link';

import type { Property } from '@prisma/client';

interface Props {
  property: Property;
}

const HomePagePropertiesDataItem = (props: Props) => {
  const {
    property: { id, media, name, city, landmark, price },
  } = props;
  return (
    <div className="border rounded border-solid border-gray-300 overflow-hidden">
      <Image
        src={media[0]?.url}
        alt={media[0]?.public_id}
        height={240}
        width={240}
        className="w-full h-60 object-cover rounded-t property-main-image"
      />
      <div className="p-3 flex flex-col">
        <span className="text-sm font-bold text-primary">{name}</span>
        <span className="text-xs text-gray-500">
          {city}, {landmark}
        </span>
      </div>
      <div className="p-3 bg-gray-100 flex items-center justify-between rounded-b">
        <span className="text-primary font-bold text-xl">${price}</span>
        <Link
          href={`/property/${id}`}
          className="text-sm text-primary font-semibold no-underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HomePagePropertiesDataItem;

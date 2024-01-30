import { GetSingleProperty } from '@/actions/properties';
import LinkButton from '@/components/common/buttons/link';
import PropertyImageCarousel from '@/components/private/property/image-carousel';
import PropertyPageInfo from '@/components/private/property/info';

interface Props {
  params: {
    id: string;
  };
}

const PropertyPage = async (props: Props) => {
  const {
    params: { id },
  } = props;
  const response = await GetSingleProperty(id);

  return (
    <div>
      <LinkButton btnTitle="Back to Properties" path="/" />
      <h1 className="text-2xl font-bold text-primary">
        {response?.data?.name}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <PropertyImageCarousel images={response?.data?.media!} />
          <p className="text-sm text-gray-600 mt-7">
            {response?.data?.description}
          </p>
        </div>
        <div className="border border-solid border-gray-400 rounded p-5">
          <PropertyPageInfo property={response?.data!} />
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;

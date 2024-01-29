import { GetSingleProperty } from '@/actions/properties';

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

  return <div>{response?.data?.name}</div>;
};

export default PropertyPage;

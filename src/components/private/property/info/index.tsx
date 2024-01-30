import type { Property } from '@prisma/client';

interface Props {
  property: Property;
}

const PropertyPageInfo = (props: Props) => {
  const { property } = props;

  const getAttributeDetails = ({
    name,
    value,
  }: {
    name: string;
    value: any;
  }) => (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-400">{name}</span>
      <span className="text-sm text-gray-800  capitalize">{value}</span>
    </div>
  );

  const getSectionTitle = (title: string) => (
    <div>
      <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      <hr className="border border-solid border-gray-400 my-2" />
    </div>
  );
  return (
    <>
      <div className="flex flex-col gap-1">
        {getSectionTitle('Amenities')}
        {getAttributeDetails({ name: 'Type', value: property?.type })}
        {getAttributeDetails({ name: 'Bedrooms', value: property?.bedrooms })}
        {getAttributeDetails({ name: 'Bathrooms', value: property?.bathrooms })}
        {getAttributeDetails({ name: 'Balconies', value: property?.balconies })}
        {getAttributeDetails({ name: 'Floors', value: property?.floors })}
        {getAttributeDetails({ name: 'Parking', value: property?.parking })}
        {getAttributeDetails({ name: 'Area', value: property?.area })}
        {getAttributeDetails({ name: 'Age', value: property?.age })}
        {getAttributeDetails({ name: 'Status', value: property?.status })}
        {getAttributeDetails({
          name: 'Furnishing',
          value: property?.furnished,
        })}
        {getAttributeDetails({ name: 'Facing', value: property?.facing })}
      </div>
      <div className="flex flex-col gap-1 mt-7">
        {getSectionTitle('Address')}
        {getAttributeDetails({ name: 'City', value: property?.city })}
        {getAttributeDetails({ name: 'Pincode', value: property?.pincode })}
        {getAttributeDetails({ name: 'Landmark', value: property?.landmark })}
      </div>

      {property?.showOwnerContact && (
        <div className="flex flex-col gap-1 mt-7">
          {getSectionTitle('Owner Details')}
          {getAttributeDetails({
            name: 'Name',
            value: property?.ownerName,
          })}
          {getAttributeDetails({
            name: 'Email',
            value: property?.ownerEmail,
          })}
          {getAttributeDetails({
            name: 'Phone',
            value: property?.ownerPhone,
          })}
        </div>
      )}
    </>
  );
};

export default PropertyPageInfo;

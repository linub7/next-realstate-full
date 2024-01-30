import type { Property } from '@prisma/client';
import AttributeDetails from '@/components/common/attribute-details';
import SectionTitle from '@/components/common/section-title';

interface Props {
  property: Property;
}

const PropertyPageInfo = (props: Props) => {
  const { property } = props;
  return (
    <>
      <div className="flex flex-col gap-1">
        <SectionTitle title="Amenities" />
        <AttributeDetails name="Type" value={property?.type} />
        <AttributeDetails name="Bedrooms" value={property?.bedrooms} />
        <AttributeDetails name="Bathrooms" value={property?.bathrooms} />
        <AttributeDetails name="Balconies" value={property?.balconies} />
        <AttributeDetails name="Floors" value={property?.floors} />
        <AttributeDetails name="Area" value={property?.area} />
        <AttributeDetails name="Age" value={property?.age} />
        <AttributeDetails name="Status" value={property?.status} />
        <AttributeDetails name="Furnishing" value={property?.furnished} />
        <AttributeDetails name="Facing" value={property?.facing} />
      </div>
      <div className="flex flex-col gap-1 mt-7">
        <SectionTitle title="Address" />
        <AttributeDetails name="City" value={property?.city} />
        <AttributeDetails name="Pincode" value={property?.pincode} />
        <AttributeDetails name="Landmark" value={property?.landmark} />
      </div>

      {property?.showOwnerContact && (
        <div className="flex flex-col gap-1 mt-7">
          <SectionTitle title="Owner Details" />
          <AttributeDetails name="Name" value={property?.ownerName} />
          <AttributeDetails name="Email" value={property?.ownerEmail} />
          <AttributeDetails name="Phone" value={property?.ownerPhone} />
        </div>
      )}
    </>
  );
};

export default PropertyPageInfo;

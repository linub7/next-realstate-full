interface Props {
  name: string;
  value: any;
  isAccount?: boolean;
}

const AttributeDetails = (props: Props) => {
  const { name, value, isAccount = false } = props;
  return (
    <div
      className={
        isAccount ? 'flex flex-col' : 'flex justify-between items-center'
      }
    >
      <span className="text-sm text-gray-400">{name}</span>
      <span className="text-sm text-gray-800  capitalize">{value}</span>
    </div>
  );
};

export default AttributeDetails;

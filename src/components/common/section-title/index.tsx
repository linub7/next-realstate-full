interface Props {
  title: string;
}

const SectionTitle = (props: Props) => {
  const { title } = props;
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      <hr className="border border-solid border-gray-400 my-2" />
    </div>
  );
};

export default SectionTitle;

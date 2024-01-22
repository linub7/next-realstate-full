import Link from 'next/link';

interface Props {
  btnTitle: string;
  path: string;
}

const LinkButton = (props: Props) => {
  const { btnTitle, path } = props;
  return (
    <div className="border border-solid rounded-sm px-3 py-2 border-primary">
      <Link href={path} className="no-underline text-primary">
        {btnTitle}
      </Link>
    </div>
  );
};

export default LinkButton;

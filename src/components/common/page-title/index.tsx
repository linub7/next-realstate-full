import { ReactNode } from 'react';

interface Props {
  title: string;
  children?: ReactNode;
}

const PageTitle = (props: Props) => {
  const { children, title } = props;
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-primary mb-5">{title}</h1>
      {children}
    </div>
  );
};

export default PageTitle;

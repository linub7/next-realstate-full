import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthPagesLayout = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      {props.children}
    </div>
  );
};

export default AuthPagesLayout;

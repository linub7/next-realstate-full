import { SignIn } from '@clerk/nextjs';
import AuthPagesLayout from '@/components/auth/layout';

const SigninPage = () => {
  return (
    <AuthPagesLayout>
      <SignIn />
    </AuthPagesLayout>
  );
};

export default SigninPage;

import { SignUp } from '@clerk/nextjs';
import AuthPagesLayout from '@/components/auth/layout';

const SignupPage = () => {
  return (
    <AuthPagesLayout>
      <SignUp />
    </AuthPagesLayout>
  );
};

export default SignupPage;

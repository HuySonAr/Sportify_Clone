import { Button } from './ui/button';
import { useSignIn } from '@clerk/react';

const SignInOAuthButtons = () => {
  const { signIn } = useSignIn();

  const signInWithGoogle = async () => {
    if (!signIn) return;
    try {
      await signIn.sso({
        strategy: 'oauth_google',
        redirectCallbackUrl: '/sso-callback',
        redirectUrl: '/auth-callback',
      });
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };
  return (
    <Button
      onClick={signInWithGoogle}
      variant={'secondary'}
      className="w-full text-white border-zinc-200 h-11"
    >
      Continue with Google
    </Button>
  );
};

export default SignInOAuthButtons;

import Button from 'components/ui/Button';
import { signIn, signOut } from 'next-auth/react';
import { settings } from 'settings';

const Login = () => {
  const handleSignInClick = async () => {
    console.log('signIn');

    await signIn('auth0');
  };

  const handleSignOutClick = async () => {
    console.log('signOut');

    await signOut({ callbackUrl: `${settings.nextAuthUrl}/login` });
  };

  return (
    <>
      <div>Login</div>
      <Button label={'Sign in'} onClick={() => void handleSignInClick()} />
      <Button label={'Sign Out'} onClick={() => void handleSignOutClick()} />
    </>
  );
};

export default Login;

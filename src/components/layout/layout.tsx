import { AppBar } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar position="sticky" />
      <main>{children}</main>
    </>
  );
};

export default Layout;

import Header from './Header'; // Contains the hamburger menu
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;

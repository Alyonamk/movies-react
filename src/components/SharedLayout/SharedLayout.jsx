import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  Navigation,
  Menu,
  MenuItem,
  Link,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Header>
      <Navigation>
        <Menu>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/movies">Movies</Link>
          </MenuItem>
        </Menu>
      </Navigation>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </Header>
  );
};

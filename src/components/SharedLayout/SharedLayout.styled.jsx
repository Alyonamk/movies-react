import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  background: #BDB76B;
  margin-bottom: 0;
`;

export const Navigation = styled.nav`
  padding: 35px 30px;
  border-bottom: 3px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: left;
`;

export const MenuItem = styled.li`
  font-size: 32px;
  font-weight: 500;
  padding: 10px 25px;

  background: #BDB76B;;
  box-shadow:  2px 2px 5px #9b8f90, -2px -2px 5px #ffeff0;
  border-radius: 40px;
  &:hover {
    background: #EEE8AA;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #4B0082;
  &:hover {
    color: black;
  }
  &.active {
    color: #483D8B;
  }
`;

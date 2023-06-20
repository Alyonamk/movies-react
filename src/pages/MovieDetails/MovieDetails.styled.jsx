import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const GoBack = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  margin-left: 70px;
  display: flex;
  gap: 10px;
  align-items: center;
  width: 150px;
  padding: 10px;
  color: #5e447e;
`;

export const NavButtons = styled.ul`
  margin-bottom: 0;
  margin-left: 30px;
  padding-bottom: 50px;
  display: flex;
  gap: 50px;
`;

export const Button = styled.li`
  font-size: 20px;
  font-weight: bold;
`;

export const LinkBtn = styled(NavLink)`
  text-decoration: none;
  padding: 15px 25px;
  &.active {
    color: #d1ccd7;
  }
`;

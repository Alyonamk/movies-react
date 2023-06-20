import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  padding: 20px 50px 130px;
  margin-bottom: 0;
`;
export const Description = styled(Link)`
  text-decoration: none;
  text-align: center;
`;
export const Item = styled.li`
  width: 280px;
  border-radius: 15px;
  background: #BDB76B;
  box-shadow: 18px 18px 36px #FFFFE0, -18px -18px 36px #FAFAD2;

  &:hover {
    z-index: 1;
    background: #FFE4B5;
    background: #EEE8AA;
    );
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 400px;
  border-radius: 15px;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #12343b;
`;

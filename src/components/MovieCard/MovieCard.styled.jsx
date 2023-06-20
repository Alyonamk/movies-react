import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  padding: 55px;
  box-shadow:  2px 2px 5px #9b8f90, -2px -2px 5px #ffeff0;
`;

export const Poster = styled.img`
  width: auto;
  height: 500px;
  border-radius: 15px;
  background: #BDB76B;
  box-shadow:  2px 2px 5px #9b8f90, -2px -2px 5px #ffeff0;
`;

export const MovieInfo = styled.div`
  width: 800px;
  margin-left: 50px;
  padding: 10px;
  border-radius: 15px;
  background: transparent;
  box-shadow:  2px 2px 5px #9b8f90, -2px -2px 5px #ffeff0;
`;

export const Title = styled.h2`
  border-radius: 65px;
  background: #BDB76B;
  box-shadow: 2px 2px 5px #9b8f90, -2px -2px 5px #ffeff0;
  width: 600px;
  padding: 10px;
  margin: 20px auto;
  text-align: center;
  letter-spacing: 1px;
  color: #585b84;
`;

export const Release = styled.span`
  margin-left: 15px;
`;

export const Details = styled.p`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.1px;
  color: #9e6164;
`;

export const Info = styled.span`
  color: #1c1d2d;
  font-size: 22px;
  font-weight: 500;
`;

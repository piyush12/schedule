import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  flex: ${({ size }) => `0 0 ${100 / (12 / size)}%`};
  max-width: 50%;
`;

export const ImageStyle = styled.img`
  width: 100%;
`;

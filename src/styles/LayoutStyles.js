import styled from 'styled-components';
import { device } from './device';

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${device.mobileL} {
    max-width: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  @media ${device.mobileL} {
    margin: 0;
  }
`;

export const Col = styled.div`
  flex: ${({ size }) => `0 0 ${100 / (12 / size)}%`};
  max-width: ${({ size }) => `0 0 ${100 / (12 / size)}%`};

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 100%;
  }
`;

export const ImageStyle = styled.img`
  width: 100%;
`;

export const RowHeading = styled.h2`
  text-align: center;
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 3rem;
  color: ${({ theme }) =>
    theme.mode === 'dark-mode' ? 'var(--color-white)' : 'var(--color-black)'};
`;

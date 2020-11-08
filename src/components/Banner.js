import React from 'react';
import styled from 'styled-components/macro';

import useToggleTheme from '../hooks/useToggleTheme';
import Button from '../shared/Button';
import { Col, Container, ImageStyle, Row } from '../styles/LayoutStyles';
import { APP_IMAGES } from '../utils/Images';

const BannerStyles = styled.div`
  height: 400px;
  margin-top: 80px;

  h1 {
    margin: 0;
    font-size: 6rem;
    color: ${({ theme }) =>
      theme === 'light-mode' ? 'var(--color-black)' : 'var(--color-white)'};
  }

  span {
    font-family: 'Cookie', cursive;
    color: var(--color-nav-right-text);
    font-size: 7rem;
  }

  p {
    margin: 0;
    color: var(--color-navigation-text);
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const BannerButtonsStyles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  a {
    &:nth-child(2) {
      padding: 0 2rem;
    }
  }
`;

const BannerImgHolderStyle = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  img {
    width: 80%;
  }
`;

const Banner = () => {
  const { banner, android, appple } = APP_IMAGES;
  const { theme } = useToggleTheme();

  return (
    <BannerStyles theme={theme}>
      <Container>
        <Row
          css={{
            alignItems: 'center',
          }}
        >
          <Col size={6}>
            <h1>
              Easier to <span>Meetup</span>
            </h1>
            <p>
              It easier to schedule dinner with friends, a group study date, a
              birthday party, or anything in-between
            </p>
            <BannerButtonsStyles>
              <a href="#">
                <img src={appple} />
              </a>
              <a href="#">
                <img src={android} />
              </a>
              <Button variant="primary">Join for free</Button>
            </BannerButtonsStyles>
          </Col>
          <Col size={6}>
            <BannerImgHolderStyle>
              <ImageStyle src={banner} alt="schedule image" />
            </BannerImgHolderStyle>
          </Col>
        </Row>
      </Container>
    </BannerStyles>
  );
};

export default Banner;

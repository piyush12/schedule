import React from 'react';
import styled from 'styled-components/macro';

import { BannerButtonsStyles } from '../components/Banner';
import Button from '../shared/Button';
import { Col, Container, Row } from '../styles/LayoutStyles';
import { APP_IMAGES } from '../utils/Images';

const CompatibleStyle = styled.div`
  background-color: var(--color-nav-right-text);
  border-radius: 20px;
  padding: 2rem 5rem;

  h3 {
    color: var(--color-white);
    font-size: 5rem;
    margin: 0;
    font-weight: 700;
  }
`;

const Compatibility = () => {
  const { android, appple, people, devices } = APP_IMAGES;

  return (
    <Container>
      <CompatibleStyle>
        <Row>
          <Col size={6}>
            <h3>Compatible with all device</h3>
            <BannerButtonsStyles>
              <a href="#">
                <img src={appple} />
              </a>
              <a href="#">
                <img src={android} />
              </a>
              <Button variant="white">Join for free</Button>
            </BannerButtonsStyles>
            <img
              src={people}
              css={{
                marginTop: '5rem',
              }}
            />
          </Col>
          <Col
            size={6}
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={devices} />
          </Col>
        </Row>
      </CompatibleStyle>
    </Container>
  );
};

export default Compatibility;

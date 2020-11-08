import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components/macro';

import { Container, Row, RowHeading, Col } from '../styles/LayoutStyles';
import { APP_IMAGES } from '../utils/Images';

const { icon1, icon2, icon3, icon4, icon5 } = APP_IMAGES;

const KEY_FEATURE = [
  {
    id: shortid.generate(),
    image: icon1,
    name:
      'Schedule Us will automatically pick a day and time that is available for all attendees',
  },
  {
    id: shortid.generate(),
    image: icon2,
    name:
      'No need for polls, social media connections, or endlessly iterating dates further and further out via tiresome email or text threads',
  },
  {
    id: shortid.generate(),
    image: icon3,
    name:
      'Invitations and replies are done primarily via text with email optional',
  },
  {
    id: shortid.generate(),
    image: icon4,
    name: 'Fully integrated contact syncing (phone application version only)',
  },
  {
    id: shortid.generate(),
    image: icon5,
    name:
      'The built-in location finder will help you choose a new place to meet up',
  },
];

const BoxStyle = styled.div`
  padding: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 2rem;
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 300;
    color: ${({ theme }) =>
      theme.mode === 'dark-mode' ? 'var(--color-white)' : 'var(--color-black)'};
  }
`;

const BoxImage = styled.div`
  img {
    width: 60px;
    height: 60px;
  }
`;

const LinkStyle = styled.a`
  color: ${({ theme }) =>
    theme.mode === 'dark-mode'
      ? 'var(--color-white)'
      : 'var(--color-nav-right-text)'};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 300;
  border: 1px solid var(--color-grey);
  padding: 0.7rem 2rem;
  border-radius: 4px;

  &:hover {
    background-color: var(--color-grey);
  }
`;

const KeyFeatures = () => {
  return (
    <Container>
      <RowHeading>Key Features</RowHeading>
      <Row
        css={{
          justifyContent: 'center',
        }}
      >
        {KEY_FEATURE.map((item) => (
          <Col size="4" key={item.id}>
            <BoxStyle>
              <BoxImage>
                <img src={item.image} />
              </BoxImage>
              <p>{item.name}</p>
            </BoxStyle>
          </Col>
        ))}
      </Row>
      <Row
        css={{
          justifyContent: 'center',
          margin: '2rem 0',
        }}
      >
        <LinkStyle href="#">View all features</LinkStyle>
      </Row>
    </Container>
  );
};

export default KeyFeatures;

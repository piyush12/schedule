import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components/macro';

import { Col, Container, Row, RowHeading } from '../styles/LayoutStyles';
import { APP_IMAGES } from '../utils/Images';

const { pIcon, pIcon2, pIcon3 } = APP_IMAGES;
const PLAN_DETAILS = [
  {
    id: shortid.generate(),
    planName: 'Starter',
    icon: pIcon,
    price: 'Free',
    description: [
      'Create up to 3 events per month',
      'Events may not have more than 50 attendees',
      'Past events are not saved',
    ],
  },
  {
    id: shortid.generate(),
    planName: 'Pro',
    icon: pIcon2,
    price: '3.99',
    description: [
      'Create up to 30 events per month',
      'Raise attendee limit to 150 people per event',
      'Past events are saved for up to 3 months',
      'Optionally allow attendees to suggest different times or locations for your event',
      'Premium user flair on event pages',
    ],
  },
  {
    id: shortid.generate(),
    planName: 'Premium',
    icon: pIcon3,
    price: '9.99',
    description: [
      'Create unlimited events',
      'Unlimited attendees allowed per event',
      'Past events are saved permanently',
      'Pro user flair on event pages',
    ],
  },
];

const LinkStyle = styled.a`
  color: var(--color-white);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 300;
  border: 1px solid var(--color-grey);
  padding: 0.7rem 2rem;
  border-radius: 50px;
  background-color: var(--color-black);

  &:hover {
    background-color: var(--color-grey);
    color: ${({ theme }) =>
      theme.mode === 'dark-mode' ? 'var(--color-white)' : 'var(--color-black)'};
  }
`;

const BoxFrameStyle = styled.div``;

const PricingBoxStyle = styled.div`
  padding: 3rem 2rem;
  margin: 0 2rem 3rem;
  border: 1px solid var(--color-grey);
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) => {
    if (props.i === 2) {
      return `
          box-shadow: 0px 14px 40px rgba(24, 30, 41, 0.2);
          `;
    }
  }}

  background-color: ${({ i }) =>
    i % 2 == 0
      ? 'var(--color-orange-light)'
      : i === 3
      ? 'var(--color-light-green)'
      : 'var(--color-white)'};

  .icon {
    position: absolute;
    left: -15px;
    top: -15px;
  }

  .plan-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    padding: 0rem 2rem 0 3rem;
  }
  .plan-list {
    display: flex;
    flex-grow: 1;
    ul {
      li {
        list-style: none;
        color: ${({ theme }) =>
          theme.mode === 'dark-mode'
            ? 'var(--color-bg-background)'
            : 'var(--color-black)'};
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
        line-height: 1.5;
      }
    }
  }
  .plan-footer {
    padding: 2rem 0 0;
    justify-content: center;
    align-items: center;
    display: flex;

    a {
      text-decoration: none;
      background: ${({ i }) =>
        i % 2 == 0 ? 'var(--color-nav-right-text)' : 'var(--color-white)'};
      border-radius: 50px;
      border: 1px solid var(--color-nav-right-text);
      padding: 1rem 2rem;
      font-size: 1.5rem;
      width: 50%;
      text-align: center;
      color: ${({ i }) =>
        i % 2 == 0 ? 'var(--color-white)' : 'var(--color-nav-right-text)'};
    }
  }
`;

const Pricing = () => {
  return (
    <Container>
      <BoxFrameStyle direction="top" />
      <RowHeading>Pricing</RowHeading>

      <Row>
        {PLAN_DETAILS.map((plan, i) => (
          <Col
            size={4}
            key={shortid.generate()}
            css={{
              display: 'flex',
            }}
          >
            <PricingBoxStyle i={i + 1}>
              <div className="icon">
                <img src={plan.icon} />
              </div>
              <div className="plan-heading">
                <span>{plan.planName}</span>
                <span
                  css={{
                    fontWeight: 600,
                  }}
                >
                  {plan.price !== 'Free' && <sup>$</sup>}
                  {plan.price}
                  {plan.price !== 'Free' && <span>/m</span>}
                </span>
              </div>
              <div className="plan-list">
                <ul>
                  {plan.description.map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </ul>
              </div>
              <div className="plan-footer">
                <a href="#">Schedule Now</a>
              </div>
            </PricingBoxStyle>
          </Col>
        ))}
      </Row>

      <Row
        css={{
          justifyContent: 'center',
          margin: '2rem 0',
        }}
      >
        <LinkStyle href="#">Sign up Now</LinkStyle>
      </Row>
      <BoxFrameStyle direction="bottom" />
    </Container>
  );
};

export default Pricing;

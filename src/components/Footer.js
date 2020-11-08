import React from 'react';

import { Col, Container, Row } from '../styles/LayoutStyles';
import { APP_IMAGES } from '../utils/Images';
import {
  FooterStyle,
  SocialIconsStyle,
  FooterList,
} from '../styles/FooterStyles';
import { BannerButtonsStyles } from './Banner';
import Button from '../shared/Button';

const Footer = () => {
  const {
    twitter,
    facebook,
    insta,
    linkedin,
    footerLogo,
    appple,
    android,
  } = APP_IMAGES;

  return (
    <FooterStyle>
      <Container>
        <Row>
          <Col size={4}>
            <SocialIconsStyle>
              <div className="logo">
                <img src={footerLogo} />
              </div>
              <div className="social-icons">
                <a href="#">
                  <img src={twitter} />
                </a>
                <a href="#">
                  <img src={facebook} />
                </a>
                <a href="#">
                  <img src={insta} />
                </a>
                <a href="#">
                  <img src={linkedin} />
                </a>
              </div>
            </SocialIconsStyle>
          </Col>

          <Col size={4}>
            <Row>
              <Col size={6}>
                <FooterList>
                  <h4>Schedule Us</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </FooterList>
              </Col>
              <Col size={6}>
                <FooterList>
                  <h4>Your Account</h4>
                  <ul>
                    <li>
                      <a href="#">Sign up</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </FooterList>
              </Col>
            </Row>
          </Col>
          <Col size={4}>
            <h5 className="social-icon-heading">Download Free App Now</h5>
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
        </Row>
      </Container>
    </FooterStyle>
  );
};

export default Footer;

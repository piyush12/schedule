import React from 'react';
import styled from 'styled-components';

import Banner from '../components/Banner';
import Compatibility from '../components/Compatibility';
import KeyFeatures from '../components/KeyFeatures';
import Pricing from '../components/Pricing';

const SectionStyle = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

const HomePage = () => {
  return (
    <>
      <Banner />
      <SectionStyle>
        <KeyFeatures />
      </SectionStyle>
      <SectionStyle>
        <Pricing />
      </SectionStyle>
      <SectionStyle>
        <Compatibility />
      </SectionStyle>
    </>
  );
};

export default HomePage;

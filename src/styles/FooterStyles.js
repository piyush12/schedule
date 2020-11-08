import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: var(--color-black);
  padding: 4rem 0;

  .social-icon-heading {
    margin: 0;
    font-size: 2.5rem;
    color: var(--color-white);
    font-weight: 300;
  }
`;

const SocialIconsStyle = styled.div`
  padding: 3rem 2rem;

  .logo {
    margin-bottom: 3rem;
  }
  .social-icons {
    a {
      display: inline-block;
      padding-right: 3rem;

      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

const FooterList = styled.div`
  h4 {
    font-size: 2rem;
    color: var(--color-white);
    margin: 0 0 2rem;
    font-weight: 100;
  }

  ul {
  }

  li {
    list-style: none;
    margin-bottom: 1.5rem;
  }
  a {
    color: var(--color-grey);
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--color-light-grey);
  }
`;

export { FooterStyle, SocialIconsStyle, FooterList };

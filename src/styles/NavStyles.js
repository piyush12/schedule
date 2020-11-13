import styled from 'styled-components';
import Button from '../shared/Button';

const Nav = styled.nav`
  text-align: ${({ align }) => align || 'left'};

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: ${({ align }) =>
      align === 'right' ? 'flex-end' : 'flex-start'};
  }

  li {
    padding: ${({ align }) => (align === 'right' ? '0 0.5rem' : '0 2rem')};
    display: flex;
    align-items: center;
  }

  a {
    color: ${({ align }) =>
      align === 'right'
        ? 'var(--color-nav-right-text)'
        : 'var(--color-navigation-text)'};
    font-size: 1.5rem;
    padding: 0 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const SignUpStyle = styled.a`
  background: var(--color-nav-right-text);
  box-shadow: 0px 4px 5px rgba(24, 30, 41, 0.1);
  border-radius: 16px;
  color: var(--color-white) !important;
  padding: 0.9rem 1.9rem !important;
`;

const ButtonStyle = styled(Button)`
  background-color: transparent !important;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  color: ${({ mode }) =>
    mode === 'light-mode' ? '#ffc107' : '#fff'}!important;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 2rem;
`;

export { ButtonStyle, SignUpStyle, Nav };

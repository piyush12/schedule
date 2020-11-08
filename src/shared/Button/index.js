import React from 'react';
import styled from 'styled-components';

const buttonBackgroundVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return 'var(--color-nav-right-text)';
    case 'secondary':
      return 'var(--color-black)';
    case 'outline-primary':
      return 'transparent';
    case 'outline-secondary':
      return 'transparent';
    case 'white':
      return 'var(--color-white)';
    default:
      return 'var(--color-nav-right-text)';
  }
};

const buttonBorderVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return 'none';
    case 'secondary':
      return 'none';
    case 'outline-primary':
      return '1px solid var(--color-nav-right-text)';
    case 'outline-secondary':
      return '1px solid var(--color-black)';
    default:
      return 'none';
  }
};

const textVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return 'var(--color-white)';
    case 'secondary':
      return 'var(--color-white)';
    case 'outline-primary':
      return 'var(--color-nav-right-text)';
    case 'outline-secondary':
      return 'var(--color-black)';
    case 'white':
      return 'var(--color-nav-right-text)';
    default:
      return 'var(--color-white)';
  }
};

const ButtonStyle = styled.button`
  background-color: ${({ variant }) => buttonBackgroundVariant(variant)};
  outline: 0;
  border-radius: 4px;
  border: ${({ variant }) => buttonBorderVariant(variant)};
  font-size: 1.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${({ variant }) => textVariant(variant)};

  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({ type = 'button', onClick, children, variant, ...rest }) => {
  return (
    <ButtonStyle type={type} onClick={onClick} variant={variant} {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

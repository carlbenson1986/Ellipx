import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { Media } from '../lib/style';

import { ReactComponent as LogoIcon } from '../assets/logo.svg';

const headerStyle = css`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  width: 100%;
  background-color: #262726;

  ${Media.medium} {
    height: 100px;
  }

  a {
    width: 187px;
    height: 38px;

    svg {
      width: 187px;
      height: 38px;
    }
  }
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header css={[headerStyle]}>
      <Link to="/" replace={pathname === '/'}>
        <LogoIcon />
      </Link>
    </header>
  );
};

export default Header;

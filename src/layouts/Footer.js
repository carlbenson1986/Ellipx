import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as LogoWhiteIcon } from '../assets/logo-white.svg';
import { ReactComponent as CalqueIcon } from '../assets/calque.svg';
import { Link, useLocation } from 'react-router-dom';
import { Media } from '../lib/style';

const footerStyle = css`
  padding: 35px 184px;
  height: auto;
  background-color: #262726;
  color: #FFF;
  ${Media.xlarge} {
    padding: 35px 140px;
  }
  ${Media.large} {
    padding: 35px 105px;
  }
  ${Media.medium} {
    padding: 35px 70px;
  }
  ${Media.small} {
    padding: 35px 35px;
  }

  & > nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: 20px;

    .first-line {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      ${Media.small} {
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }

      .calque {
        width: 187px;
        height: 38px;
      }

      .resource-legal {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 100px;
        ${Media.small} {
          gap: 50px;
        }

        & > div {
          display: flex;
          flex-direction: column;
          gap: 13px;

          & > span {
            font-weight: 700;
            font-family: BarlowSemiCondensed-ExtraLight;
            font-size: 22px;
            line-height: 26.4px;
          }
          & > a {
            font-weight: 500;
            font-family: BarlowSemiCondensed-Medium;
            font-size: 16px;
            line-height: 19.2px;
          }
        }
      }
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: #FFF;
    }

    .second-line {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;

      & > div {
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
      }
    }
  }
`;

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer css={[footerStyle]}>
      <nav>
        <div className='first-line'>
          <CalqueIcon className='calque' />
          <div className='resource-legal'>
            <div>
              <span>Resources</span>
              <Link to="/contact" replace={pathname === '/'}>Contact</Link>
            </div>
            <div>
              <span>Legal</span>
              <Link to="/" replace={pathname === '/'}>Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='second-line'>
          <div>&copy;{new Date().getFullYear()} EllipX. All rights reserved.</div>
          <LogoWhiteIcon />
        </div>
      </nav>
    </footer >
  );
};

export default Footer;

import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as AppStoreIcon } from '../assets/app-store.svg';
import { ReactComponent as CheckOnIcon } from '../assets/checkon.svg';
import { ReactComponent as EthstorageIcon } from '../assets/ethstorage.svg';
import { ReactComponent as BrowserIcon } from '../assets/browser.svg';
import { Link, useLocation } from 'react-router-dom';
import { Media } from '../lib/style';
import Epx from '../assets/epx.png';

const HomePageStyle = css`
  width: 100%;
  padding: 67px 164px 138px 164px;
  background-color: #2A292E;
  display: flex;
  flex-direction: column;
  gap: 95px;
  color: #FFF;
  ${Media.xlarge} {
    padding: 67px 120px 138px 120px;
  }
  ${Media.large} {
    padding: 67px 80px 138px 80px;
  }
  ${Media.medium} {
    padding: 67px 40px 138px 40px;
  }
  ${Media.small} {
    padding: 67px 0px 138px  0px;
  }

    & > div:nth-of-type(1) {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      gap: 124px;
      ${Media.xlarge} {
        gap: 100px;
      }
      ${Media.large} {
        gap: 80px;
      }
      ${Media.medium} {
        gap: 60px;
      }
      ${Media.small} {
        flex-direction: column;
        gap: 40px;
        align-items: center;
      }

      & > div:nth-of-type(1) {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 40%;
        ${Media.small} {
          width: 100%;
          padding: 0px 20px;
        }

        & > span:nth-of-type(1) {
          font-weight: 500;
          font-family: BarlowSemiCondensed-Medium;
          font-size: 48px;
          line-height: 57.6px;

        }
        & > span:nth-of-type(2) {
          font-weight: 400;
          font-family: BarlowSemiCondensed-Regular;
          font-size: 24px;
          line-height: 37px;
          margin: 30px 0px 16px;
        }
      }

      & > div:nth-of-type(2) {
        width: 60%;
        & > img {
          width: 100%;
          height: auto;
        }
        ${Media.small} {
          width: 100%;
          padding: 0px 40px;
        }
        ${Media.xsmall} {
          width: 100%;
          padding: 0px 20px;
        }
      }
    }

    & > div:nth-of-type(2) {
      padding: 0px 212px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      ${Media.small} {
        flex-direction: column;
      }
      ${Media.xlarge} {
        padding: 0px 140px;
      }
      ${Media.large} {
        padding: 0px 70px;
      }
      ${Media.medium} {
        padding: 0px 0px;
      }

      & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        width: 300px;

        & > svg {
          width: 85px;
          height: 85px;
        }
        & > span:nth-of-type(1) {
          font-weight: 500;
          font-family: BarlowSemiCondensed-Medium;
          font-size: 20px;
          line-height: 27.32px;
        }
        & > span:nth-of-type(2) {
          font-weight: 400;
          font-family: BarlowSemiCondensed-Regular;
          font-size: 16px;
          line-height: 19.2px;
        }
      }

      & > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        width: 300px;

        & > svg {
          width: 88px;
          height: 88px;
        }
        & > span:nth-of-type(1) {
          font-weight: 500;
          font-family: BarlowSemiCondensed-Medium;
          font-size: 20px;
          line-height: 27.32px;
        }
        & > span:nth-of-type(2) {
          font-weight: 400;
          font-family: BarlowSemiCondensed-Regular;
          font-size: 16px;
          line-height: 19.2px;
        }
      }

      & > div:nth-of-type(3) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        width: 300px;

        & > svg {
          width: 104px;
          height: 104px;
        }
        & > span:nth-of-type(1) {
          font-weight: 500;
          font-family: BarlowSemiCondensed-Medium;
          font-size: 20px;
          line-height: 27.32px;
        }
        & > span:nth-of-type(2) {
          font-weight: 400;
          font-family: BarlowSemiCondensed-Regular;
          font-size: 16px;
          line-height: 19.2px;
        }
      }
    }
`;

const HomePage = () => {
  const { pathname } = useLocation();

  return (
    <div css={[HomePageStyle]}>
      <div>
        <div>
          <span>The crypto wallet for everyone</span>
          <span>EllipX Wallet redefines the expectations of a crypto wallet, serving as more than just a means to access your crypto. It acts as your digital gateway to the decentralized internet and its vast potential.</span>
          <Link to="/" replace={pathname === '/'}>
            <AppStoreIcon />
          </Link>
        </div>
        <div>
          <img src={Epx} />
        </div>
      </div>
      <div>
        <div>
          <CheckOnIcon />
          <span>Simple and easy</span>
          <span>Send borderless, fee-less payments to anyone, anywhere</span>
        </div>
        <div>
          <EthstorageIcon />
          <span>Manage ETH</span>
          <span>Send borderless, fee-less payments to anyone, anywhere</span>
        </div>
        <div>
          <BrowserIcon />
          <span>In App browser (coming soon)</span>
          <span>Securely navigate the digital landscape of dApps, enjoying a seamless crypto experience without the usual obstacles via the in-app browser.</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

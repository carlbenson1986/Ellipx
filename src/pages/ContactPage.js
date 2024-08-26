import React from 'react';
import { css } from '@emotion/react';
import { Media } from '../lib/style';

const ContactPageStyle = css`
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
    & > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 769px;
      border-radius: 7px;
      background: linear-gradient(96.9deg, rgba(241, 238, 244, 0.65) 3.7%, rgba(42, 41, 46, 0.65) 250.51%);
      box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.03);
      padding: 0px 131px;
      color: #111827;
      justify-content: space-evenly;
      ${Media.xlarge} {
        padding: 0px 90px;
      }
      ${Media.large} {
        padding: 0px 60px;
      }
      ${Media.medium} {
        padding: 0px 30px;
      }

      & > span:nth-of-type(1) {
        font-weight: 500;
        font-family: BarlowSemiCondensed-Medium;
        font-size: 24px;
        line-height: 20px;
        letter-spacing: 2%;
      }
      & > span:nth-of-type(2) {
        font-weight: 400;
        font-family: BarlowSemiCondensed-Regular;
        font-size: 16px;
        line-height: 19.2px;
      }

      & > div:nth-of-type(1) {
        padding: 0px 124px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        font-weight: 500;
        font-family: BarlowSemiCondensed-Medium;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 2%;
        gap: 14px;
        width: 100%;
        ${Media.xlarge} {
          padding: 0px 90px;
        }
        ${Media.large} {
          padding: 0px 60px;
        }
        ${Media.medium} {
          padding: 0px 30px;
        }
        ${Media.small} {
          padding: 0px 0px;
        }

        & > input {
          width: 100%;
          height: 45px;
          border-radius: 8px;
          padding: 8px;
          background-color: #FCF9FE;
          outline: none;
          border: none;
        }

        & > textarea {
          width: 100%;
          height: 201px;
          border-radius: 8px;
          padding: 8px;
          background-color: #FCF9FE;
          outline: none;
          border: none;
        }
      }

      & > div:nth-of-type(2) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 18px;

        & > input {
          width: 17px;
          height: 17px;
        }

        & > span {
          font-weight: 400;
          font-family: BarlowSemiCondensed-Regular;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 2%;
        }
      }

      & > button {
        width: 403px;
        height: 41px;
        padding: 11px 0px 11px 0px;
        border-radius: 7px;
        background-color: #111827;
        font-size: 16px;
        font-weight: 500;
        font-family: BarlowSemiCondensed-Medium;
        line-height: 19.2px;
        text-align: center;
        color: #FFFFFF;
        margin: 0 auto;
        ${Media.xlarge} {
          width: 300px;
        }
        ${Media.medium} {
          max-width: 200px;
          width: 100%;
        }
      }
    }
  }
`;

const ContactPage = () => {
  return (
    <div css={[ContactPageStyle]}>
      <div>
        <span>Contact us</span>
        <span>We are here to help you. Please fill out the form below and we will get back to you as soon as possible.</span>
        <div>
          <span>Name</span>
          <input type='text' name='name' placeholder='Your name' />
          <span>Email</span>
          <input type='email' name='email' placeholder='Your email' />
          <span>Subject</span>
          <input type='text' name='subject' placeholder='Your subject' />
          <span>Message</span>
          <textarea name='message' placeholder='Your message' />
        </div>
        <div>
          <input type='checkbox' />
          <span>I agree to the privacy policy</span>
        </div>
        <button type='submit'>Send</button>
      </div>
    </div>
  );
};

export default ContactPage;

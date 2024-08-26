import React from 'react';
import { css } from '@emotion/react';
import { Media } from '../lib/style';

const TextPageStyle = css`
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
      height: auto;
      border-radius: 7px;
      background: linear-gradient(96.9deg, rgba(241, 238, 244, 0.65) 3.7%, rgba(42, 41, 46, 0.65) 250.51%);
      box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.03);
      padding: 35px 131px 70px 131px;
      color: #111827;
      justify-content: space-evenly;
      gap: 16px;
      ${Media.xlarge} {
        padding: 35px 90px 70px 90px;
      }
      ${Media.large} {
        padding: 35px 60px 70px 60px;
      }
      ${Media.medium} {
        padding: 35px 30px 70px 30px;
      }

      & > div {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-family: BarlowSemiCondensed-Regular;
        font-size: 16px;
        line-height: 19.2px;
      }

      & > span:nth-of-type(even) {
        font-weight: 500;
        font-family: BarlowSemiCondensed-Medium;
        font-size: 16px;
        line-height: 19.2px;
      }

      & > span:nth-of-type(odd) {
        font-weight: 400;
        font-family: BarlowSemiCondensed-Regular;
        font-size: 16px;
        line-height: 19.2px;
      }

      & > span:nth-of-type(1) {
        font-weight: 500;
        font-family: BarlowSemiCondensed-Medium;
        font-size: 24px;
        line-height: 20px;
        letter-spacing: 2%;
      }
    }
  }
`;

const TextPage = () => {
  return (
    <div css={[TextPageStyle]}>
      <div>
        <span>Privacy Policy</span>
        <div>
          <span>Updated May, 1 2024</span>
          <span>Your privacy is critically important to us. At EllipX we have a few fundamental principles:</span>
          <ul>
            <li>We don’t ask you for personal information unless we truly need it.</li>
            <li>We don’t share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
            <li>We don’t store personal information on our servers unless required for the on-going operation of one of our services.</li>
            <li>In our products, we aim to make it as simple as possible for you to control what’s visible to the public, seen by search engines, kept private, and permanently deleted.</li>
          </ul>
          <span>If you have questions about deleting or correcting your personal data please contact our support team. EllipX operates several websites including <a href='https://www.ellipx.com/' style={{ textDecoration: 'underline' }} target='_blank'>https://www.ellipx.com/</a>.</span>
          <span>It is EllipX’s policy to respect your privacy regarding any information we may collect while operating our websites.</span>
        </div>
        <span>Website Visitors</span>
        <span>Like most website operators, EllipX collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. EllipX’s purpose in collecting non-personally-identifying information is to better understand how EllipX’s visitors use its website. From time to time, EllipX may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
          EllipX also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on the service. EllipX only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below, except that commenter IP addresses and email addresses are visible and disclosed to the administrators of the site where the comment was left.</span>
        <span>Gathering of Personally-Identifying Information</span>
        <span>Certain visitors to EllipX’s websites choose to interact with EllipX in ways that require EllipX to gather personally-identifying information. The amount and type of information that EllipX gathers depends on the nature of the interaction. For example, we ask visitors who sign up at https://www.ellipx.com/ to provide a username and email address. Those who engage in transactions with EllipX are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, EllipX collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with EllipX. EllipX does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.</span>
        <span>Aggregated Statistics</span>
        <span>EllipX may collect statistics about the behavior of visitors to its websites. EllipX may display this information publicly or provide it to others. However, EllipX does not disclose personally-identifying information other than as described below.</span>
        <span>Protection of Certain Personally-Identifying Information</span>
        <span>EllipX discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on EllipX’s behalf or to provide services available at EllipX’s websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using EllipX’s websites, you consent to the transfer of such information to them. EllipX will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, EllipX discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when EllipX believes in good faith that disclosure is reasonably necessary to protect the property or rights of EllipX, third parties or the public at large. If you are a registered user of a EllipX website and have supplied your email address, EllipX may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with EllipX and our products. We primarily use our various product to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. EllipX takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</span>
        <span>Cookies</span>
        <span>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. EllipX uses cookies to help EllipX identify and track visitors, their usage of EllipX website, and their website access preferences. EllipX visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using EllipX’s websites, with the drawback that certain features of EllipX’s websites may not function properly without the aid of cookies.</span>
        <span>Business Transfers</span>
        <span>If EllipX, or substantially all of its assets, were acquired, or in the unlikely event that EllipX goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of EllipX may continue to use your personal information as set forth in this policy.</span>
        <span>Ads</span>
        <span>Ads appearing on any of our websites may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by EllipX and does not cover the use of cookies by any advertisers.</span>
        <span>Comments</span>
        <span>Comments and other content may be submitted to anti-spam service are not saved on our servers unless they were marked as false positives, in which case we store them long enough to use them to improve the service to avoid future false positives.</span>
        <span>Privacy Policy Changes</span>
        <span>Although most changes are likely to be minor, EllipX may change its Privacy Policy from time to time, and in EllipX’s sole discretion. EllipX encourages visitors to frequently check this page for any changes to its Privacy Policy. If you have a EllipX account, you should also check your account dashboard for alerts to these changes. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</span>
      </div>
    </div >
  );
};

export default TextPage;

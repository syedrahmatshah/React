/** @format */
import styled from "styled-components";
import React from "react";

import { UserIcon } from "./Icons/SvgIcons";

function UserComponent() {
  return (
    <Card>
      <UserInfo>
        <UserIcon />
        <UserHeader>500+</UserHeader>
        <DescriptionText>LeadLeadLeadLead</DescriptionText>
        <UserIdentity>LeadLeadLeadLeadLead aaedjeqkeqjkd</UserIdentity>
        <UserFooter>Last updated Jan 2, 2024</UserFooter>
      </UserInfo>

      <UserDescription>
        <UserDescriptionText>LeadLeadLead</UserDescriptionText>
        <UserActionSection>
          <UserActionSectionHeader>
            Hosting a Software Engineer Intern?
          </UserActionSectionHeader>
          <UserActionSectionText>
            My provide exclusive influencer and model services.
          </UserActionSectionText>
          <UserActionLink href='address'>Send me a message</UserActionLink>
        </UserActionSection>
      </UserDescription>
    </Card>
  );
}

export default UserComponent;

/** @format */

export const Card = styled.div`
  grid-gap: 20px 20px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  margin-top: 3em;
  margin-bottom: 3em;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // Switch to 1 column when the screen size is smaller
  }
`;

export const UserInfo = styled.div`
  background-color: var(--lgren);
  background-image: url("/images/info.svg");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 32px;
  padding: 24px;
`;

export const UserHeader = styled.h1`
  letter-spacing: 1px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 54px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  line-height: 44px;
  padding-top: 0.3em;
  padding-bottom: 8px;
`;

export const DescriptionText = styled.p`
  color: var(--black);
  font-weight: 700;
  font-family: Inter;
  margin-top: 0;
  margin-bottom: 4px;
  line-height: 24px;
`;

export const UserIdentity = styled.p`
  color: var(--dark-slate-grey);
  font-size: 16px;
  font-family: Inter, sans-serif;
  margin-top: 0;
  margin-bottom: 0;
`;

export const UserFooter = styled.p`
  display: block;
  color: var(--dark-slate-grey);
  font-family: Inter, sans-serif;
  font-size: 16px;
  margin-top: 3em;
  margin-bottom: 0;
`;

export const UserDescription = styled.div``;
export const UserDescriptionText = styled.div`
  background-color: var(--white);
  background-image: url("/images/description.svg");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 32px;
  padding: 24px 24px 33px 24px;
  letter-spacing: 0px;
  margin-top: 0;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 0.87em;
`;

export const UserActionSection = styled.div`
  background-color: var(--misty-rose);
  background-image: url("/images/action.svg");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 32px;
  padding: 24px;
`;

export const UserActionSectionHeader = styled.h2`
  color: var(--black);
  font-weight: 700;
  font-family: Inter, sans-serif;
  font-size: 16px;
  margin-block: 0;
`;

export const UserActionSectionText = styled.p`
  color: var(--dim-grey);
  font-size: 1rem;
  margin-top: 4px;
`;

export const UserActionLink = styled.a`
  display: block;
  color: var(--black);
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  padding-top: 1em;
  margin-bottom: 0;
`;

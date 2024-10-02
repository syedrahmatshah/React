/** @format */

import React from "react";
import {
  Container,
  Section,
  ProfileWrapper,
  ProfileImage,
  MainHeading,
  DubmmyParagraph,
  StyledIconContainer,
  ButtonContainer,
  FlexWrapper,
  StyledSection,
  StyledButton,
  LineDivider,
  EventWrapper,
  EventCard,
  FlexCard,
  DateCard,
  FlexWrapperMedium,
  DistributeEvents,
  DistributeEventsName,
  TextWrapper,
  FlexEvent,
  StyledContentWrapper,
  CopyrightText,
} from "./HomePage.styled";
import UserComponent from "../Components/UserComponent";
import SocialLinks from "../Components/SocialLinks";
import AppStore from "../Components/AppStore";
import { ButtonData, socaildata, AppData } from "../constant/Constant";

import { GraphicSymbol, HeartIcon, Free } from "../Components/Icons/SvgIcons";

import Button from "../Components/Button";

function HomePage() {
  return (
    <Container>
      <Section>
        <ProfileWrapper>
          <ProfileImage
            src='https://cdn.prod.website-files.com/66e01218ee95e2bdb08666f3/66e01219ee95e2bdb0866748_Group%2040.png'
            alt='profile'
          />
        </ProfileWrapper>

        <MainHeading>First Last</MainHeading>

        <DubmmyParagraph>
          LeadLead @ LeadLeadLead | LeadLead @ Lead Lead Lead | Lead Lead Lead @
          Lead Lead | Lead Lead @ Lead Lead
        </DubmmyParagraph>

        {/* ICON COMPONENT */}
        <StyledIconContainer>
          {socaildata.map((item, i) => (
            <div key={i}>
              <SocialLinks data={item} />
            </div>
          ))}
        </StyledIconContainer>

        {/* Button Component */}
        <ButtonContainer>
          {ButtonData.map((icon, i) => (
            <div key={i}>
              <Button
                title={icon.title}
                icon={icon.icon}
                address={icon.address}
                style={icon.style}
              />
            </div>
          ))}
        </ButtonContainer>
      </Section>

      {/* USER COMPONENT */}
      <UserComponent />

      <FlexWrapper>
        <h4>LeadLeadLeadMy Technologies & Frameworks:</h4>
        <p>LLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLead</p>
        <a href='address'>Send me a message</a>
      </FlexWrapper>

      <StyledSection></StyledSection>
      <StyledButton href='address'>Read more articles</StyledButton>
      <LineDivider></LineDivider>

      <EventWrapper>
        <h4>Upcoming events</h4>
        <EventCard>
          <FlexCard>
            <DateCard>
              <h2>24</h2>
              <p>August</p>
            </DateCard>
          </FlexCard>
          <FlexWrapperMedium>
            <h3>Name of your event</h3>
            <p>
              Here is a breakdown of what I think beginners should focus on when
              learning design
            </p>

            {/* REMAIN BUTTON */}
            <Button
              icon={<Free />}
              title='Free to register'
              address='address'
              // textColor='var(--white)'
              // bgColor=''
              // width='140px'
              style={{
                width: "175px",
                backgroundColor: "var(--blue-violet)",
                color: "var(--white)",
              }}
            />
          </FlexWrapperMedium>
        </EventCard>
      </EventWrapper>

      <DistributeEvents>
        <DistributeEventsName>
          <img
            src='./images/bg-image.png'
            alt='backgroundImage'
          />

          <TextWrapper>
            <h4>Name of your event</h4>
            <FlexEvent>
              <GraphicSymbol />

              <div>August 24, 2020, 8:00AM GMT0</div>
            </FlexEvent>
          </TextWrapper>
        </DistributeEventsName>

        <Button
          icon={<Free />}
          title='Free'
          address='address'
          style={{
            border: "1px solid #000",
            backgroundColor: "#0000",
            color: "var(--black)",
          }}
        />
      </DistributeEvents>

      <StyledContentWrapper>
        <LineDivider></LineDivider>
        <h4>My Apps on the App Store:</h4>
        {AppData.map((obj, i) => (
          <div key={i}>
            <AppStore
              text={obj.text}
              icon={obj.icon}
              address={obj.address}
            />
          </div>
        ))}
        <LineDivider></LineDivider>
      </StyledContentWrapper>

      <Button
        icon={<HeartIcon />}
        title='Resume'
        address='address'
        style={{
          marginTop: "2em",
          backgroundColor: "var(--blue-violet)",
          color: "var(--white)",
        }}
      />
      <LineDivider
        marginTop='3em'
        marginBottom='3em'></LineDivider>

      <CopyrightText>
        &copy; 2024 by Zaid Dahir. All Rights Reserved.
      </CopyrightText>
    </Container>
  );
}

export default HomePage;

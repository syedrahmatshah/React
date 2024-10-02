/** @format */

import styled from "styled-components";
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;
export const Section = styled.div``;
export const Container = styled.div`
  max-width: 600px;
  height: auto;
  margin-top: 3em;
  margin-bottom:1.5em;
  margin-left: auto;
  display-flex;
  flex-direction:column;
  margin-right: auto;

  @media screen and (max-width: 479px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
export const ProfileWrapper = styled.div`
  width: 120px;
  height: 120px;
  //   my-style
  margin: auto;
`;
export const ProfileImage = styled.img`
  border: 2px solid var(--gainsboro);
  border-radius: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 8px;
  display: flex;
`;

export const MainHeading = styled.h3`
  text-align: center;
  // my style
  letter-spacing: -0.1px;
  margin-bottom: 8px;
  line-height: 30px;
  font-size: 24px;
  font-family: Inter, sans-serif;
  // font-weight: 600;
`;

export const DubmmyParagraph = styled.p`
  text-align: center;
  margin: 0 auto 1.5em auto;
  // my style
  max-width: 46ch;
  letter-spacing: -0.2px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 450;
  color: var(--dim-grey);

  @media screen and (max-width: 480px) {
    p {
      font-size: 15px;
    }
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  margin-bottom: 1.5em;
`;

export const FlexWrapper = styled.div`
  background-color: var(--black);
  color: var(--white);
  border-radius: 32px;
  padding: 24px;
  margin-top: 3em;
  margin-bottom: 3em;
  overflow: hidden;

  h4 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    width: 481.109px;
  }

  p {
    margin-top: 0;
    font-size: 16px;
    padding-bottom: 2em;
  }

  a {
    color: var(--white);
    font-weight: 700;
    padding-top: 1em;
  }
`;

export const StyledSection = styled.div`
  background-image: url("/images/bg-image.png");
  bacground-repeat: no-repeat;
  background-size: cover;
  background-position-x: -45px;
  border-radius: 32px;
  width: 100%;
  height: 400px;
  line-height: 300%;
  margin-top: 3em;
  margin-bottom: 16px;

  @media screen and (max-width: 479px) {
    border-radius: 24px;
    height: 110px;
  }
`;

export const StyledButton = styled.button`
  background-color: var(--white);
  color: var(--black);
  width: 100%;
  text-align: center;
  border-radius: 16px;
  border: none;
  margin-top: 1.5em;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: 16px;
  font-family: Inter;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s;
  display: flex;

  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;

export const LineDivider = styled.div`
  background-color: var(--gainsboro);
  width: 100%;
  height: 1px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const EventWrapper = styled.div`
  margin-top: 2.5em;
  margin-bottom: 2em;
  h4 {
    margin-top: 0;
    margin-bottom: 1.5em;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;

    @media screen and (max-width: 479px) {
      text-align: center;
    }
  }
`;

export const EventCard = styled.div`
  color: var(--white);
  background-image: linear-gradient(#0000, #0a1b1a),
    url("/images/Rectangle.png");
  background-position: 0 0, 50%;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  border-radius: 32px;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  padding: 24px;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
`;

export const FlexCard = styled.div`
  display: flex;
  justify-content: end;
`;

export const DateCard = styled.div`
  background-color: var(--blue-violet);
  text-align: center;
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 16px;
  display: flex;

  h2 {
    margin-bottom: 0;
    font-size: 32px;
    font-weight: 700;
    line-height: 0;
  }

  @media screen and (max-width: 479px) {
    p {
      font-size: 15px;
    }
  }
`;

export const FlexWrapperMedium = styled.div`
  h3 {
    letter-spacing: -0.3px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;

    @media screen and (max-width: 479px) {
      font-size: 22px;
    }
  }

  p {
    margin-top: 0.2em;
    opacity: 0.6;
    max-width: 380px;
    @media screen and (max-width: 479px) {
      font-size: 15px;
    }
  }
`;

export const DistributeEvents = styled.div`
  background-color: var(--misty-rose);
  border-radius: 32px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;

  @media screen and (max-width: 479px) {
    text-align: center;
    border-radius: 24px;
    flex-direction: column;
  }
`;

export const ButtonStyled = styled.button`
  background-color: var(--blue-violet);
  color: var(--white);

  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const DistributeEventsName = styled.div`
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

  img {
    object-fit: cover;
    border-radius: 16px;
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 479px) {
    text-align: center;
    flex-wrap: wrap;
    border-radius: 24px;
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  h4 {
    margin-top: 0;
    margin-bottom: 0.3em;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const FlexEvent = styled.div`
  display: flex;
  align-items:center;
  margin-left:0.25em;
  gap:14px;

  &>div{
    
  @media screen and (max-width: 479px) {
        font-size: 14px;
        text-align:center;
        
        }
`;

export const StyledContentWrapper = styled.div`
  margin-top: 2.8em;

  h4 {
    margin-top: 0;
    margin-bottom: 1.5em;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    @media screen and (max-width: 479px) {
      text-align: center;
    }
  }
`;

export const CopyrightText = styled.p`
  text-align: center;
  margin-bottom: 5.5em;
  @media screen and (max-width: 479px) {
    font-size: 15px;
  }
`;

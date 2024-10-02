/** @format */

import React from "react";
import styled from "styled-components";

const AppStore = ({ text, icon, address }) => {
  return (
    <ContentWrappper href={address}>
      {text} {icon}
    </ContentWrappper>
  );
};

export default AppStore;

export const ContentWrappper = styled.a`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  color: var(--black);
  border-radius: 16px;
  padding: 25px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition: all 0.4s;
  margin-top: 0.5em;
`;

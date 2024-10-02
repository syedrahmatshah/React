/** @format */

import React from "react";
import styled from "styled-components";

function SocialLinks({ data }) {
  return <IconContainer href={data.address}>{data.icon}</IconContainer>;
}

export default SocialLinks;

export const IconContainer = styled.a`
  background-color: #fff9;
  border-radius: 500px;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  color: var(---black);
  padding: 10px;
  transition: all 0.4s;
  display: flex;
  overflow: hidden;
`;

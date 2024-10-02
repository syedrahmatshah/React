/** @format */
import React from "react";
import styled from "styled-components";

const Button = ({ title, icon, address, style }) => {
  return (
    <ButtonIcon
      href={address}
      style={style}>
      {icon} {title}
    </ButtonIcon>
  );
};

export default Button;

export const ButtonIcon = styled.a`
  grid-column-gap: 11px;
  grid-row-gap: 10px;
  background-color: var(--white);
  color: var(--black);
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  box-sizing: border-box;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.4s;
  display: flex;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--blue-violet);
    color: var(--white);
  }
`;

import React from "react";
import styled from "styled-components";
import { SiYoutube } from "react-icons/si";
import { FaSistrix } from "react-icons/fa";

function Navbar(props) {
  return (
    <NavWrapper>
      <NavTitle>Youtube</NavTitle>
      <SiYoutube size={35} color='#fff' />

      <SearchGroup>
        <Search placeholder='Search' />
        <FaSistrix className='icon' />
      </SearchGroup>
    </NavWrapper>
  );
}

export default Navbar;

export const NavWrapper = styled.nav`
  ${({ theme }) => theme.flexCenter};
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0.6rem;
  z-index: 99;

  .icon {
    position: absolute;
    right: 30%;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    ${({ theme }) => theme.deviceObj.mobile`
      display: none;
    `};
  }
`;

export const NavTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.5rem;
  padding: 1rem;
  cursor: pointer;
`;

export const SearchGroup = styled.div`
  width: 85%;
  ${({ theme }) => theme.flexCenter};
`;

export const Search = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 39%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

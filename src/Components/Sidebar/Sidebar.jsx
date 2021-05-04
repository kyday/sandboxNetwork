import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeIcon, LikeIcon } from "../Icons/Icons";

function Sidebar(props) {
  return (
    <SidebarWrapper>
      <StyledLink to='/'>
        <div className='icon'>
          <HomeIcon />
          <span>Home</span>
        </div>
      </StyledLink>
      <StyledLink to='/favorite'>
        <div className='icon'>
          <LikeIcon />
          <span>Favorite videos</span>
        </div>
      </StyledLink>
    </SidebarWrapper>
  );
}

export default Sidebar;

export const SidebarWrapper = styled.article`
  position: fixed;
  left: 0;
  top: 5%;
  bottom: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 1.875rem 0;
  transition: all 0.3s;

  .icon {
    display: flex;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 3.5rem 1rem 1rem;

    &:hover {
      background-color: #383838;
    }

    svg {
      fill: ${({ theme }) => theme.colors.white};
      width: 35px;
      height: 35px;
    }
  }

  .icon span {
    display: inline-block;
    padding-left: 1rem;
    font-size: 1rem;
    position: relative;
    top: 7px;
    white-space: nowrap;
  }
`;

export const StyledLink = styled(Link)``;

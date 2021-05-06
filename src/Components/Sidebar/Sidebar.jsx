import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeIcon } from "../Icons/Icons";
import { MdPlaylistPlay } from "react-icons/md";
import { useSelector } from "react-redux";

function Sidebar(props) {
  const listNames = useSelector((state) => state.listReducer);

  return (
    <SidebarWrapper>
      <Link to='/'>
        <IconWrapper>
          <HomeIcon />
          <IconName>Home</IconName>
        </IconWrapper>
      </Link>
      {listNames.map((list) => {
        return (
          <Link to={`/favorite/${list.id}`}>
            <IconWrapper>
              <MdPlaylistPlay />
              <IconName>
                {list.text.length > 10
                  ? list.text.slice(0, 10) + "..."
                  : list.text}
              </IconName>
            </IconWrapper>
          </Link>
        );
      })}
    </SidebarWrapper>
  );
}

export default Sidebar;

export const SidebarWrapper = styled.article`
  position: fixed;
  left: 0;
  top: 7.5%;
  bottom: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 13%;
  overflow-y: auto;
  transition: all 0.3s;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 2rem;

  &:hover {
    background-color: #383838;
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 35px;
    height: 35px;
  }
`;

export const IconName = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  padding-left: 1rem;
  white-space: nowrap;
`;

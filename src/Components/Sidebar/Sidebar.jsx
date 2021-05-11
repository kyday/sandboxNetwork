import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeIcon } from "../Icons/Icons";
import { MdPlaylistPlay } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BiFolderPlus } from "react-icons/bi";
import { toggleList } from "../../store/actions";

function Sidebar(props) {
  const listNames = useSelector((state) => state.listReducer);

  const [inHover, setInHover] = useState(false);
  const [isListId, setIsListId] = useState("");

  const dispatch = useDispatch();

  const onMergeCheck = (e, id) => {
    e.preventDefault();
    dispatch(toggleList(id));
    setIsListId(id);
  };

  const onMergeList = () => {
    //구현을 못했습니다..
  };

  return (
    <SidebarWrapper>
      <Link to='/'>
        <IconWrapper>
          <HomeIcon />
          <IconName>Home</IconName>
        </IconWrapper>
      </Link>
      {listNames &&
        listNames.map((list) => {
          return (
            <Link
              key={list.id}
              to={{
                pathname: `/favorite/${list.id}`,
                state: list.text,
              }}
            >
              <IconWrapper inHover={() => setInHover(!inHover)}>
                {list?.text.length > 0 && <MdPlaylistPlay />}
                <IconName done={list.done}>
                  {list?.text.length > 10
                    ? list.text.slice(0, 10) + "..."
                    : list.text}
                </IconName>
                <BiFolderPlus
                  className='merge'
                  size={12}
                  onClick={(e) => onMergeCheck(e, list.id)}
                />
              </IconWrapper>
            </Link>
          );
        })}
      <button onClick={() => onMergeList()}>Merge</button>
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

  button {
    width: 70%;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid #fff;
    border-radius: 5%;
    font-size: 1rem;
    margin: 1% 12%;
    text-align: center;

    ${({ theme }) => theme.deviceObj.ipad`
      width: 100%;
      border: none;
      font-size: 0.8rem;
      margin: 4%;
    `};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 2rem;

  ${({ theme }) => theme.deviceObj.ipad`
      padding: 1.5rem 1rem;
  `};

  ${({ theme }) => theme.deviceObj.mobile`
      padding: 1.5rem 0.5rem;
  `};

  .merge {
    visibility: hidden;
  }

  &:hover {
    position: relative;
    background-color: #383838;

    .merge {
      visibility: ${(props) => props.inHover && `visible`};
      width: 23px;
      position: absolute;
      right: 10%;
      ${({ theme }) => theme.deviceObj.ipad`
        display: none;
      `};
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 35px;
    height: 35px;
  }
`;

export const IconName = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  padding-left: 1rem;
  white-space: nowrap;
  color: ${(props) => (props.done ? `#8C0000` : `#fff`)};
`;

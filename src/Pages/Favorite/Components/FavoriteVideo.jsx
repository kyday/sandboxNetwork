import React from "react";
import styled from "styled-components";
import { Thumb } from "../../Main/Components/VideoCard/VideoCard";
import { BsX } from "react-icons/bs";

function FavoriteVideo({ favoriteVideo, closeButton }) {
  return (
    <FavoriteListGroup>
      <FavoriteThumb src={favoriteVideo.thumbnail} alt='thumbnail' />
      <FavoriteVideoTitle readOnly>
        {favoriteVideo.title}
        <br />
        <UserName>UserName</UserName>
      </FavoriteVideoTitle>
      <BsX
        size={25}
        className='deleteIcon'
        onClick={(e) => closeButton(e, favoriteVideo.id, favoriteVideo.listId)}
      />
    </FavoriteListGroup>
  );
}

export default FavoriteVideo;

export const FavoriteListGroup = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 5%;
  padding-bottom: 3%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};

  .deleteIcon {
    position: absolute;
    left: 95%;
  }
`;

export const FavoriteThumb = styled(Thumb)`
  width: 10%;
`;

export const FavoriteVideoTitle = styled.h2`
  padding: 2%;
`;

export const UserName = styled.span`
  color: #909090;
`;

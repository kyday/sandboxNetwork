import React from "react";
import styled from "styled-components";
import { Thumb } from "../../Main/Components/VideoCard/VideoCard";

function FavoriteVideo({ favoriteVideo }) {
  console.log("favoriteVideo", favoriteVideo);

  return (
    <FavoriteListGroup>
      <FavoriteThumb src={favoriteVideo.thumbnail} alt='thumbnail' />
      <FavoriteVideoTitle>
        {favoriteVideo.title}
        <br />
        <UserName>UserName</UserName>
      </FavoriteVideoTitle>
    </FavoriteListGroup>
  );
}

export default FavoriteVideo;

export const FavoriteListGroup = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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

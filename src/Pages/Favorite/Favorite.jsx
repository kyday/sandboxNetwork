import React from "react";
import styled from "styled-components";
import FavoriteVideo from "./Components/FavoriteVideo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";

function Favorite(props) {
  const location = useLocation();

  console.log(location);

  const favoriteVideo = useSelector((state) => state.videoReducer);
  const lists = useSelector((state) => state.listReducer);

  console.log("favoriteVideo==============>", favoriteVideo);

  const { id } = useParams();

  const listId = lists.map((item) => String(item.id));
  const matchId = listId.filter((item) => item === id);

  return (
    <MainLayout>
      <FavoriteTitleContainer>
        <FavoriteTitle>{location.state}</FavoriteTitle>
      </FavoriteTitleContainer>
      <FavoriteVideosContainer>
        <ul>
          {matchId.join("") === id &&
            favoriteVideo.map((list) => {
              return (
                <li>
                  <FavoriteVideo favoriteVideo={list} />
                </li>
              );
            })}
        </ul>
      </FavoriteVideosContainer>
    </MainLayout>
  );
}

export default Favorite;

export const FavoriteTitleContainer = styled.section`
  ${({ theme }) => theme.flexCenter};
  margin-bottom: 8%;
`;

export const FavoriteTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FavoriteVideosContainer = styled.article`
  li {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 5%;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

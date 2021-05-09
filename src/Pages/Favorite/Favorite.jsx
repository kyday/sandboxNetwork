import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteVideo from "./Components/FavoriteVideo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";

function Favorite(props) {
  const location = useLocation();
  const favoriteVideo = useSelector((state) => state.listReducer);
  const { id } = useParams();

  const filterFavoriteVideo = favoriteVideo.filter(
    (item) => item.id === Number(id)
  );

  console.log("favoriteVideo", favoriteVideo);

  return (
    <MainLayout>
      <FavoriteTitleContainer>
        <FavoriteTitle>{location.state}</FavoriteTitle>
      </FavoriteTitleContainer>
      <FavoriteVideosContainer>
        <ul>
          {filterFavoriteVideo[0].video?.map((list) => {
            return (
              <Link
                to={{
                  pathname: `https://youtube.com/watch?v=${list.id}`,
                }}
                target='_blank'
              >
                <li key={list.id}>{<FavoriteVideo favoriteVideo={list} />}</li>
              </Link>
            );
          })}
        </ul>
      </FavoriteVideosContainer>
    </MainLayout>
  );
}

export default Favorite;

export const FavoriteTitleContainer = styled.section`
  color: ${({ theme }) => theme.colors.white};
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
    padding-bottom: 3%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

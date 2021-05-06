import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";

function Favorite(props) {
  const location = useLocation();

  return (
    <MainLayout>
      <FavoriteTitleContainer>
        <FavoriteTitle>{location.state}</FavoriteTitle>
      </FavoriteTitleContainer>
      <FavoriteVideosContainer>
        <ul>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
        </ul>
      </FavoriteVideosContainer>
    </MainLayout>
  );
}

export default Favorite;

export const FavoriteTitleContainer = styled.section`
  ${({ theme }) => theme.flexCenter};
  margin-bottom: 8%;
  border: 1px solid red;
`;

export const FavoriteTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FavoriteVideosContainer = styled.article`
  li {
    margin-bottom: 5%;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

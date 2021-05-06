import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";

function Favorite(props) {
  const { id } = useParams();

  return (
    <MainLayout>
      <div>{id} 입니다.</div>
    </MainLayout>
  );
}

export default Favorite;

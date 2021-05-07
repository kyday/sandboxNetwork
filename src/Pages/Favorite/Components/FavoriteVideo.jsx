import React from "react";

function FavoriteVideo({ favoriteVideo }) {
  console.log("sad", favoriteVideo);
  return <div>{favoriteVideo.thumbnail}</div>;
}

export default FavoriteVideo;

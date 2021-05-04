import React, { useState } from "react";
import styled from "styled-components";
import { FiMoreVertical } from "react-icons/fi";

const VideoCard = ({ video }) => {
  const [inHover, setInHover] = useState(false);
  const handleMoreOnClick = (e) => {
    e.preventDefault();
  };

  return (
    <VideoCardLayOut
      onMouseEnter={() => setInHover(true)}
      onMouseLeave={() => setInHover(false)}
    >
      <Thumb src={video.thumbnail} alt='thumbnail' />
      <VideoInfoContainer>
        <VideoInfo>
          <VideoTitle>
            {video.title.length > 40
              ? video.title.slice(0, 40) + "..."
              : video.title}
          </VideoTitle>
          <span className='secondary'>UserName</span>
        </VideoInfo>
        <button>
          {inHover && <FiMoreVertical size={25} onClick={handleMoreOnClick} />}
        </button>
      </VideoInfoContainer>
    </VideoCardLayOut>
  );
};

export default VideoCard;

export const VideoCardLayOut = styled.section``;

export const Thumb = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const VideoInfoContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;

  button {
    width: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const VideoInfo = styled.div`
  flex: 9;
`;

export const VideoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

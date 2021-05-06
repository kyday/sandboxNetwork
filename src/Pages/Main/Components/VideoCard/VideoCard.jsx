import React, { useState } from "react";
import styled from "styled-components";
import { FiMoreVertical } from "react-icons/fi";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "styled-dropdown-component";
import { addVideo } from "../../../../store/actions";
import { useDispatch } from "react-redux";
import { showModal } from "../../../../store/actions";

const VideoCard = ({ video }) => {
  const [hidden, setHidden] = useState(true);
  const [inHover, setInHover] = useState(false);

  const dispatch = useDispatch();

  const handleMoreOnClick = (e) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  const handleOnModal = (e) => {
    e.preventDefault();
    dispatch(showModal());
    dispatch(addVideo(video));
    setHidden(!hidden);
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
        <button onClick={handleMoreOnClick}>
          {inHover && <FiMoreVertical size={25} />}
        </button>

        <Dropdown>
          <CustomDropdownMenu
            right={true}
            hidden={hidden}
            toggle={() => setHidden(!hidden)}
            onClick={handleOnModal}
          >
            <DropdownItem>Favorite List 추가</DropdownItem>
          </CustomDropdownMenu>
        </Dropdown>
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
  .secondary {
    color: #909090;
  }
`;

export const VideoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export const CustomDropdownMenu = styled(DropdownMenu)`
  ${DropdownItem} {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: #909090;
    }
  }

  display: ${(props) => props.multiple && `hidden`};
  background-color: ${({ theme }) => theme.colors.dropListColor};
  margin: -1rem -2rem;
`;

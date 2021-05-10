import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteVideo from "./Components/FavoriteVideo";
import MainLayout from "../../Components/Layout/MainLayout";
import Modal from "../../Components/Modal/Modal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import { modifyTitle, favoriteDeleteVideo } from "../../store/actions";

function Favorite(props) {
  const [values, setValues] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);

  const listNames = useSelector((state) => state.listReducer);
  const nameInput = useRef();

  const { id } = useParams();

  const filterFavoriteVideo = listNames.filter(
    (item) => item.id === Number(id)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setValues(values);
  }, [values]);

  const titleOnchange = (e) => {
    const { value } = e.target;
    setValues(value);
  };

  const handleModify = () => {
    setBtnStatus(!btnStatus);
    setValues("");
    nameInput.current.focus();
  };

  const handleModifyAfter = (id) => {
    setBtnStatus(!btnStatus);
    dispatch(modifyTitle(Number(id), values));
  };

  const closeButton = (e, id, listId) => {
    e.preventDefault();
    const deleteVideo = filterFavoriteVideo[0].video.filter(
      (item) => item.id !== id
    );
    dispatch(favoriteDeleteVideo(deleteVideo, listId));
  };
  return (
    <MainLayout>
      <FavoriteTitleContainer>
        <FavoriteTitle
          value={btnStatus ? filterFavoriteVideo[0]?.text : values}
          onChange={titleOnchange}
          readOnly={btnStatus ? true : false}
          ref={nameInput}
        />
        {btnStatus ? (
          <MdModeEdit className='modify' size={25} onClick={handleModify} />
        ) : (
          <button onClick={() => handleModifyAfter(id)}>수정</button>
        )}
      </FavoriteTitleContainer>

      <FavoriteVideosContainer>
        <ul>
          {filterFavoriteVideo[0]?.video?.length <= 0 ? (
            <Notice>There is no video.</Notice>
          ) : (
            filterFavoriteVideo[0]?.video?.map((list) => {
              return (
                <Link
                  to={{
                    pathname: `https://youtube.com/watch?v=${list.id}`,
                  }}
                  target='_blank'
                  key={list.id}
                >
                  <FavoriteVideo
                    favoriteVideo={list}
                    closeButton={closeButton}
                  />
                </Link>
              );
            })
          )}
        </ul>
      </FavoriteVideosContainer>
      <Modal />
    </MainLayout>
  );
}

export default Favorite;

export const FavoriteTitleContainer = styled.section`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.flexCenter};
  margin-bottom: 8%;
  position: relative;

  .modify {
    cursor: pointer;
    ${({ theme }) => theme.deviceObj.ipad`
       padding: 3rem;
    `};
  }

  .merge {
    position: absolute;
    right: 15%;
    cursor: pointer;
  }

  button {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
  }
`;

export const FavoriteTitle = styled.input`
  width: 50%;
  text-align: center;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FavoriteVideosContainer = styled.article`
  ul {
    margin-top: 5%;
  }
`;

export const Notice = styled.div`
  ${({ theme }) => theme.flexCenter};
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  opacity: 0.6;
`;

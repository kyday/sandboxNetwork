import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainLayout from "../../Components/Layout/MainLayout";
import GetAxios from "../../api/GetAxios";
import VideoLayout from "../../Styles/VideoLayout";
import VideoCard from "./Components/VideoCard/VideoCard";
import Modal from "../../Components/Modal/Modal";

function Main(props) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const pageEnd = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  const PAGEEND = currentPage * 100;
  const PAGESTART = PAGEEND - 100;

  const loadMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entires) => {
          if (entires[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading, loadMore]);

  useEffect(() => {
    const getAxios = async () => {
      setLoading(true);
      const videoList = await GetAxios.getData();
      setDatas(videoList?.data);
      setLoading(false);
    };
    getAxios();
  }, []);

  return (
    <MainLayout>
      <VideoLayout>
        <>
          {datas &&
            datas?.slice(PAGESTART, PAGEEND).map((video, idx) => {
              return (
                <Link
                  key={idx}
                  to={{
                    pathname: `https://youtube.com/watch?v=${video.video_id}`,
                  }}
                  target='_blank'
                >
                  <VideoCard
                    videoId={video.video_id}
                    videoTitle={video.title}
                    thumbnail={video.thumbnail}
                  />
                </Link>
              );
            })}
          <Loding ref={pageEnd}>{loading && "Loading..."}</Loding>
          <Modal />
        </>
      </VideoLayout>
    </MainLayout>
  );
}

export default Main;

const Loding = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
`;

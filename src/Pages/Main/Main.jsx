import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../Components/Layout/MainLayout";
import GetAxios from "../../api/GetAxios";
import VideoLayout from "../../Styles/VideoLayout";
import VideoCard from "./Components/VideoCard/VideoCard";

function Main(props) {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const PAGEEND = currentPage * 100;
  const PAGESTART = PAGEEND - 100;

  const getAxios = useCallback(async () => {
    const videoList = await GetAxios.getData(currentPage);
    setDatas(videoList?.data);
  }, [currentPage]);

  useEffect(() => {
    getAxios();
  }, [getAxios]);

  return (
    <MainLayout>
      <VideoLayout>
        {datas.slice(PAGESTART, PAGEEND).map((video, idx) => {
          return (
            <Link
              key={idx}
              to={{
                pathname: `https://youtube.com/watch?v=${video.video_id}`,
              }}
              target='_blank'
            >
              <VideoCard video={video} />
            </Link>
          );
        })}
      </VideoLayout>
    </MainLayout>
  );
}

export default Main;

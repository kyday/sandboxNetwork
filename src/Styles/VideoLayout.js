import styled from "styled-components";

const VideoLayout = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;

  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default VideoLayout;

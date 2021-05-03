import { css } from "styled-components";

const device = {
  desktop: 1024,
  mobile: 480,
};

const objKeys = Object.keys(device).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${device[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const colors = {
  main: "#1C1F2E",
  gray: "rgba(33, 33, 33, 0.98)",
};

const flexContentCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const theme = {
  colors,
  flexContentCenter,
  objKeys,
};

export default theme;

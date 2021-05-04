import { css } from "styled-components";

const device = {
  desktop: 1024,
  mobile: 450,
};

const deviceObj = Object.keys(device).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${device[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const colors = {
  main: "#1C1F2E",
  gray: "#202020",
  white: "#fff",
  black: "#181818",
  dropListColor: "#212121",
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const theme = {
  colors,
  flexCenter,
  deviceObj,
};

export default theme;

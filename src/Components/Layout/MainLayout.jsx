import styled from "styled-components";

function MainLayout({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}

export default MainLayout;

export const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 6% 15%;
  background-color: ${({ theme }) => theme.colors.black};
`;

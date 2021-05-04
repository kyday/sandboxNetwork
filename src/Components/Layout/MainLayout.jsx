import styled from "styled-components";

function MainLayout({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}

export default MainLayout;

export const MainWrapper = styled.main`
  width: 90%;
  height: 100%;
  margin-left: 11.5%;
  padding: 7% 5%;
  background-color: ${({ theme }) => theme.colors.black};
`;

import React from "react";
import styled from "styled-components";

function Navbar(props) {
  return <NavWrapper>YouTube</NavWrapper>;
}

export default Navbar;

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 0.7rem 1.5rem;
`;

import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: black;
    color: white;
    position: fixed;
    width: 100vw;
    height: 40px;
  }

  h1 {
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <h1>My App</h1>
    </StyledHeader>
  );
}

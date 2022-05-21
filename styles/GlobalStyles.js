import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./variables";

export const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,
body {
    background-color:${theme.colors.grey50};
    font-family: 'Roboto', cursive;
    font-size: ${theme.fontSize.normal};
  }
  
  input, select, textarea, button{font-family:inherit;}

a {
    color: inherit;
    text-decoration: none;
}

ul{
    list-style: none;
}

`;

// section

export const Section = styled.section`
  padding: 70px 0;

  @media screen and (max-width: 968px) {
    padding: 50px 0px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0px;
  }
  @media screen and (max-width: 568px) {
    padding: 30px 0px;
  }
  @media screen and (max-width: 368px) {
    padding: 20px 0px;
  }
`;

// container
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 70px;
  @media screen and (max-width: 968px) {
    padding: 0px 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 568px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 368px) {
    padding: 0 20px;
  }
`;

export const Text = styled.p`
  font-size: ${({ bigger }) => (bigger ? "18px" : "15px")};
  color: ${theme.colors.grey100};
  letter-spacing: 1px;
  margin: 0.5rem 0;
`;

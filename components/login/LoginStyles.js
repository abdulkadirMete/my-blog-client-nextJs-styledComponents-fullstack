import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const LoginSection = styled.section`
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
    url("/images/login.jpg");

  background-size: cover;
  background-position: center;
`;

export const LoginContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 0.75rem;
`;

export const LoginHeading = styled.h1`
  font-size: 1.8rem;
  color: #2b2e3d;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1rem;
`;

export const LoginGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid #dde;

  svg {
    color: ${({ theme }) => theme.colors.grey300};
    font-size: 2rem;
  }

  &:focus-within {
    border: 2px solid #07cff2;
  }
`;

export const LoginInput = styled.input`
  flex: 1;
  height: 40px;
  border: none;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  border-radius: 0.5rem;
  background-image: linear-gradient(to right, #15e1bc, #7c0dc9);
  height: 40px;
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
  transition: all 0.3 linear;
  border: none;

  &:hover {
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-top: -11px;
  font-size: 1.2rem;
`;

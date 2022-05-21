import styled from "styled-components";
import { Container, Section } from "../../styles/GlobalStyles";

export const FooterSection = styled(Section)`
  background: linear-gradient(
    90deg,
    hsla(173, 76%, 46%, 1) 0%,
    hsla(274, 83%, 43%, 1) 100%
  );
`;

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SocialIcons = styled.div`
  display: flex;
  column-gap: 0.75rem;
`;

export const SocialIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme.borders.border3};
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }

  svg {
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

export const CopyRight = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 500;
  margin-top: 2rem;
`;

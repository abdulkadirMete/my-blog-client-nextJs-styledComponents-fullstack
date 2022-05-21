import styled from "styled-components";
import { Container, Section } from "../../../../styles/GlobalStyles";

export const PostAltSection = styled.section`
  padding: ${({ padding }) => padding || "40px 0"};
`;

export const ShareWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;

  & > span,
  svg {
    color: ${({ theme }) => theme.colors.grey300};
    font-size: ${({ theme }) => theme.fontSize.normal};
  }

  svg:not(:first-child) {
    border-radius: 50%;
    width: ${({ size }) => `${size}px` || "40px"};
    height: ${({ size }) => `${size}px` || "40px"};
    cursor: pointer;
  }
`;

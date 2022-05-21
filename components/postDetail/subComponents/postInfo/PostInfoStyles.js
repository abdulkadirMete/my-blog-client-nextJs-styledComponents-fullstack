import styled from "styled-components";
import { Container, Section } from "../../../../styles/GlobalStyles";

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
`;

export const PostInfoHeader = styled.h1`
  font-family: "Fira Sans", sans-serif;
  color: ${({ theme }) => theme.colors.grey500};
  font-size: 40px;
  font-weight: 900;
`;

// post info details
export const PostInfoDetails = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export const AuthorName = styled.span`
  font-family: "Fira Sans", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 600;
  color: black;

  &:hover {
    color: #f2546a;
  }
`;

// post info alt
export const PostInfoAltGroup = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;

  svg {
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.colors.grey300};
  }
`;

export const PostInfoAltItem = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

// post image
export const PostImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
`;

// post content
export const PostContentWrapper = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: ${({ theme }) => theme.borders.border1};
`;

export const PostContent = styled.p`
  color: #384450;
  font-size: 17px;
`;

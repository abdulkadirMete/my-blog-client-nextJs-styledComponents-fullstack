import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentItemWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: ${({ theme }) => theme.borders.border1};

  @media screen and (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    row-gap: 2rem;
  }
`;

export const ContentItemImage = styled.img`
  max-width: 350px;
  object-fit: cover;
  border-radius: 0.5rem;

  @media screen and (max-width: 968px) {
    max-width: 100%;
  }
`;

export const ContentItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  &:last-child {
    margin-top: auto;
  }
`;

export const ContentItemCategory = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 13px;
`;

export const ContentItemHeading = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
`;

export const ContentItemDate = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: ${({ theme }) => {
    theme.fontSize.normal;
  }};
`;

export const ContentItemText = styled.p`
  font-size: ${({ theme }) => {
    theme.fontSize.normal;
  }};

  color: #313131;
`;

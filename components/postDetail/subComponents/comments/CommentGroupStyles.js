import styled from "styled-components";
import { Section } from "../../../../styles/GlobalStyles";

export const CommentsWrapper = styled(Section)`
  display: flex;
  column-gap: 0.75rem;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.span`
  color: "#212d45";
  font-size: 28px;
  font-weight: 900;
  font-family: "Fira Sans", sans-serif;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

import styled from "styled-components";
import { Container, Section } from "../../../../styles/GlobalStyles";

export const SendCommentSection = styled(Section)`
  padding: 40px;
  max-width: 900px;
`;

export const SendCommentForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const UserInfoGroup = styled.div`
  display: flex;
  column-gap: 3rem;
`;

export const SendCommentInput = styled.input`
  border: ${({ theme }) => theme.borders.border1};
  height: 48px;
  color: #495057;
  font-size: 13px;
  padding: 0.75rem 1rem;
  border-radius: 4px;

  &:focus {
    outline: 1px solid #555cc3;
  }
`;

export const SendCommentContent = styled.textarea`
  border: ${({ theme }) => theme.borders.border1};
  height: 200px;
  color: #495057;
  font-size: 13px;
  padding: 0.75rem 1rem;
  border-radius: 4px;

  &:focus {
    outline: 1px solid #555cc3;
  }
`;

export const SendCommentButton = styled.button`
  background-color: #f2546a;
  padding: 12px 54px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid #f2546a;
  border-radius: 4px;
  margin-right: auto;

  &:hover {
    background-color: #010f22;
  }
`;

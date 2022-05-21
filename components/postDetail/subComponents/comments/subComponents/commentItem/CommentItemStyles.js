import styled from "styled-components";

export const CommentItemWrapper = styled.div`
  display: flex;
  column-gap: 0.75rem;
`;

export const Left = styled.div``;

export const UserImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const InfoHeader = styled.div`
  display: flex;
  column-gap: 0.75rem;
`;

export const UserName = styled.span`
  color: #212d45;
  font-weight: 900;
  font-family: "Fira Sans", sans-serif;
`;

export const Date = styled.span`
  font-size: 14px;
  color: #999999;
`;

export const CommentContent = styled.p`
  color: #777777;
  font-size: 15px;
`;

export const SendCommentButton = styled.div`
  border-radius: 0.5rem;
  display: flex;
  column-gap: 5px;
  color: #72b572;
  font-size: 12px;
  background-color: white;
  padding: 0.5rem 1rem;
  margin-right: auto;
  display: flex;
  align-items: center;

  svg {
    font-size: 12px;
    color: #72b572;
  }
`;

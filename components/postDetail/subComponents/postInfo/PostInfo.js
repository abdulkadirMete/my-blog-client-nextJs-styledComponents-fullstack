import React from "react";
import { AiFillClockCircle, AiFillEye, AiOutlineComment } from "react-icons/ai";
import {
  AuthorName,
  PostContent,
  PostContentWrapper,
  PostImage,
  PostInfoAltGroup,
  PostInfoAltItem,
  PostInfoContainer,
  PostInfoDetails,
  PostInfoHeader
} from "./PostInfoStyles";

const PostInfo = ({ post }) => {
  const { id, heading, img, content, date, viewCount, comments, update } =
    post[0];
  return (
      <PostInfoContainer>
        <PostInfoHeader>{heading}</PostInfoHeader>
        <PostInfoDetails>
          <AuthorName>Abdulkadir Mete</AuthorName>
          <PostInfoAltGroup>
            <AiFillEye />
            <PostInfoAltItem>{viewCount}</PostInfoAltItem>
          </PostInfoAltGroup>

          <PostInfoAltGroup>
            <AiFillClockCircle />
            <PostInfoAltItem>{date}</PostInfoAltItem>
          </PostInfoAltGroup>

          <PostInfoAltGroup>
            <AiOutlineComment />
            <PostInfoAltItem>{comments}</PostInfoAltItem>
          </PostInfoAltGroup>
        </PostInfoDetails>

        <PostImage src={img} alt="" />
        <PostContentWrapper>
          <PostContent>{content}</PostContent>
        </PostContentWrapper>
      </PostInfoContainer>
  );
};

export default PostInfo;

import React from "react";
import {
  Post,
  PostHeading,
  PostImage,
  PostInfo,
  PostInfoAlt,
  PostInfoAltGroup,
  PostInfoAltItem,
} from "./PostItemStyles";
import { AiFillEye, AiFillClockCircle, AiOutlineComment } from "react-icons/ai";
import Link from "next/link";

const PostItem = ({
  id,
  heading,
  img,
  content,
  date,
  viewCount,
  comments,
  update,
}) => {
  return (
    <Post>
      <PostImage img={img} />
      <PostInfo>
        <Link href={`post/${id}`}>
          <PostHeading>{heading}</PostHeading>
        </Link>
        <PostInfoAlt>
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
        </PostInfoAlt>
      </PostInfo>
    </Post>
  );
};

export default PostItem;

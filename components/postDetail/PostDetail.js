import React from "react";
import { PostDetailContainer, PostDetailSection } from "./PostDetailStyles";
import CommentGroup from "./subComponents/comments/CommentGroup";
import SharePost from "./subComponents/postAlt/SharePost";
import PostInfo from "./subComponents/postInfo/PostInfo";
import { Profile } from "./subComponents/profile/Profile";
import { SendComment } from "./subComponents/sendComment/SendComment";

export const PostDetail = ({ post }) => {
  return (
    <PostDetailSection>
      <PostDetailContainer>
        <PostInfo post={post} />
        <SharePost />
        <Profile />
        <CommentGroup />
        <SendComment />
      </PostDetailContainer>
    </PostDetailSection>
  );
};

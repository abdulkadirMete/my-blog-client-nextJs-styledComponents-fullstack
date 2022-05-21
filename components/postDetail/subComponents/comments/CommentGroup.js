import React from "react";
import {
  CommentList,
  CommentsWrapper, SectionHeader
} from "./CommentGroupStyles";
import CommentItem from "./subComponents/commentItem/CommentItem";


const Comments = () => {
  return (
    <CommentsWrapper>
      <SectionHeader>Toplam 2 Yorum</SectionHeader>
      <CommentList>
        <CommentItem />
        <CommentItem />
      </CommentList>
    </CommentsWrapper>
  );
};

export default Comments;

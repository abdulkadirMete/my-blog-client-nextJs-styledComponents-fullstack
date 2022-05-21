import React from "react";
import { SectionHeader } from "../comments/CommentGroupStyles";
import {
  SendCommentButton, SendCommentContent,
  SendCommentForm,
  SendCommentInput,
  SendCommentSection,
  UserInfoGroup
} from "./SendCommentStyles";

export const SendComment = () => {
  return (
    <SendCommentSection>
      <SectionHeader>Yorum Yap</SectionHeader>
        <SendCommentForm>
          <UserInfoGroup>
            <SendCommentInput placeholder="Ad Soyad" />
            <SendCommentInput placeholder="E-posta" />
          </UserInfoGroup>
          <SendCommentContent placeholder="Yorum" />
          <SendCommentButton>Gönder</SendCommentButton>
        </SendCommentForm>
    </SendCommentSection>
  );
};

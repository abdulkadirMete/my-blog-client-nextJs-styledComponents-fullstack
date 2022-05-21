import React from "react";
import {
  CommentContent,
  CommentItemWrapper,
  Date,
  InfoHeader,
  Left,
  Right,
  SendCommentButton,
  UserImage,
  UserName,
} from "./CommentItemStyles";

import { BiCommentDots } from "react-icons/bi";

const CommentItem = () => {
  return (
    <CommentItemWrapper>
      <Left>
        <UserImage src="https://www.hafzullah.com/assets/imgs/default-profile.svg" />
      </Left>
      <Right>
        <InfoHeader>
          <UserName>Bilal Kaval</UserName>
          <Date>04.03.2021 10:25:31</Date>
        </InfoHeader>
        <CommentContent>
          harikasınız gerçekten. emeğinize sağlık. başarılarınızın dünya çapında
          devamını diliyorum
        </CommentContent>
        <SendCommentButton>
          <BiCommentDots />
          <span>BU YORUMU CEVAPLA</span>
        </SendCommentButton>
      </Right>
    </CommentItemWrapper>
  );
};

export default CommentItem;

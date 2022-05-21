import React from "react";
import { BsFillShareFill } from "react-icons/bs";
import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { PostAltSection, ShareWrapper } from "./SharePostStyles";

const SharePost = ({ padding, size }) => {
  return (
    <PostAltSection padding={padding}>
      <ShareWrapper size={size}>
        <BsFillShareFill />
        <span>Paylaş:</span>
        <FacebookIcon />
        <TwitterIcon />
        <TelegramIcon />
        <EmailIcon />
        <WhatsappIcon />
        <RedditIcon />
      </ShareWrapper>
    </PostAltSection>
  );
};

export default SharePost;

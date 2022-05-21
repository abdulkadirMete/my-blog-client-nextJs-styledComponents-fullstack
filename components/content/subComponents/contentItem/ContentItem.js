import React from "react";
import SharePost from "../../../postDetail/subComponents/postAlt/SharePost";
import {
  ContentItemCategory,
  ContentItemDate,
  ContentItemHeading,
  ContentItemImage,
  ContentItemInfo,
  ContentItemText,
  ContentItemWrapper
} from "./ContentItemStyles";

const ContentItem = ({ heading, category, date, img, content }) => {
  return (
    <ContentItemWrapper>
      <ContentItemImage src={img} />
      <ContentItemInfo>
        <ContentItemCategory>{category}</ContentItemCategory>
        <ContentItemHeading>{heading}</ContentItemHeading>
        <ContentItemDate>{date}</ContentItemDate>
        <ContentItemText>{`${content?.slice(0, 170)}...`}</ContentItemText>
        <SharePost padding="0" size={32} />
      </ContentItemInfo>
    </ContentItemWrapper>
  );
};

export default ContentItem;

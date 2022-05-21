import React from "react";
import { mytrys } from "../../data/dummyData";
import {
  ContentCategoryDivider,
  ContentContainer,
  ContentSection,
  ContentWrapper,
} from "./ContentStyles";
import ContentItem from "./subComponents/contentItem/ContentItem";

const Content = () => {
  return (
    <ContentSection>
      <ContentContainer>
        <ContentCategoryDivider>
          <span>Şiirler</span>
        </ContentCategoryDivider>
        <ContentWrapper
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            staggerChildren: 0.5,
            type: "spring",
            duration: 1,
            bounce: 0.3,
          }}
        >
          {mytrys.map((content, index) => (
            <ContentItem {...content} key={index}/>
          ))}
        </ContentWrapper>
      </ContentContainer>
    </ContentSection>
  );
};

export default Content;

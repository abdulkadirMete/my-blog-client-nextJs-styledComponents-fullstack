import React from "react";
import { Carousel, PostContainer, PostSection } from "./PostsStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "../../data/data";
import { sliderItems } from "../../data/dummyData";
import PostItem from "../postItem/PostItem";
// slider

const Posts = () => {
  return (
    <PostSection>
      <PostContainer>
        <Carousel {...sliderSettings}>
          {sliderItems.map((item) => {
            return <PostItem key={item.id} {...item} />;
          })}
        </Carousel>
      </PostContainer>
    </PostSection>
  );
};

export default Posts;

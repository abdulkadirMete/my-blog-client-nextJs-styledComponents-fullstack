import styled from "styled-components";
import { Container, Section } from "../../styles/GlobalStyles";
import Slider from "react-slick";

export const PostSection = styled(Section)``;

export const PostContainer = styled(Container)`
  display: flex;
`;

export const Carousel = styled(Slider)`
  overflow: auto;
  width: 100%;
  position: relative;
  .slick-slide {
    width: 100%;
  }
  .slick-arrow {
    z-index: 3;
    opacity: 0;
  }
  .slick-arrow.slick-prev {
    position: absolute;
    left: 10px;
  }
  .slick-arrow.slick-next {
    position: absolute;
    right: 10px;
    z-index: 3;
  }
  &:hover {
    .slick-arrow {
      opacity: 1;
    }
  }
`;

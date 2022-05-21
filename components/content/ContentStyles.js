import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, Section } from "../../styles/GlobalStyles";

export const ContentSection = styled(Section)`
  padding: 40px;
`;

export const ContentContainer = styled(Container)`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  row-gap: 2rem;
`;

export const ContentCategoryDivider = styled.div`
  border-bottom: 3px solid #444444;
  padding-bottom: 5px;

  & > span {
    padding: 0.5rem;
    background-color: #444444;
    color: white;
  }
`;

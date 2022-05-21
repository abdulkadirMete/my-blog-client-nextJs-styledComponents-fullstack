import styled from "styled-components";

export const Post = styled.div`
  position: relative;
  min-height: 310px;
  margin: 0 1rem;
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: all 0.3s linear;

  &:hover {
    padding-bottom: 10px;
  }
`;

export const PostImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7)),
    url(${({ img }) => img}) no-repeat center center;
  background-size: cover;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-position: calc(50% - 30px) 50%;
    padding-bottom: 10px;
    filter: brightness(80%);
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
`;

export const PostHeading = styled.h3`
  color: white;
  font-size: 1.6rem;
  font-weight: 800;
  width: calc(100% - 20px);
  padding: 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #ffd5ad;
  }
`;

export const PostInfoAlt = styled.div`
  display: flex;
  column-gap: 0.75rem;
  margin-top: 0.5rem;

  svg {
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.colors.grey200};

  }
`;

export const PostInfoAltGroup = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

export const PostInfoAltItem = styled.span`
  color: ${({ theme }) => theme.colors.grey200};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

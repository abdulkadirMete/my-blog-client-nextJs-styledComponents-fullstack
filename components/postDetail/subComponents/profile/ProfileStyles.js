import styled from "styled-components";

export const ProfileWrapper = styled.div`
  padding: 2rem;
  background-color: white;
  column-gap: 2rem;
  border: ${({ theme }) => theme.borders.border1};
  border-radius: 0.75rem;
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileName = styled.span`
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: "#212D45";
  cursor: pointer;

  &:hover {
    color: "red";
  }
`;

export const ProfileDescription = styled.p`
  color: "#384450";
  font-size: 17px;
  
`;

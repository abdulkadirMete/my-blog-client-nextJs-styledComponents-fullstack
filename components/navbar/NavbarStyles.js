import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const Nav = styled.nav`
  height: 50px;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
`;

export const NavContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.span`
  color: ${({ theme }) => theme.colors.brand};
  font-family: "Macondo", cursive;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  letter-spacing: 2px;
  cursor: pointer;
`;

export const NavInfo = styled.div`
  column-gap: 3rem;
  display: flex;
  align-items: center;
`;

// menu
export const NavMenu = styled.ul`
  display: flex;
  column-gap: 0.5rem;
`;

export const NavMenuItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.grey400};
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    letter-spacing: 1px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.brand};
  }
`;

// searchbar

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  border: ${({ theme }) => theme.borders.border2};

  svg {
    color: ${({ theme }) => theme.colors.grey300};
    margin: 0 5px;
    font-size: 1.4rem;
  }
`;

export const Searchbar = styled.input`
  height: 30px;
  width: 250px;
  border: none;
  outline: none;
  transition: width 0.3s ease-in-out;

  &:focus-within {
    width: 350px;
  }
`;

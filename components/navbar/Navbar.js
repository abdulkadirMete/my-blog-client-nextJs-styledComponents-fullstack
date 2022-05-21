import React from "react";
import {
  Brand,
  Nav,
  NavContainer,
  NavInfo,
  NavMenu,
  NavMenuItem,
  Searchbar,
  SearchGroup,
} from "./NavbarStyles";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Link href="/">
          <Brand>Abdulkadir Mete</Brand>
        </Link>
        <NavInfo>
          <NavMenu>
            <NavMenuItem>
              <Link href="/content">Yazılar</Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/content">Denemeler</Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/content">Kitaplar</Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/content">Hakkımda</Link>
            </NavMenuItem>
          </NavMenu>
          <SearchGroup>
            <BiSearch />
            <Searchbar placeholder="Ara" />
          </SearchGroup>
        </NavInfo>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

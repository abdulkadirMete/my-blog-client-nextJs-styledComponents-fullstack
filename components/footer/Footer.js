import Link from "next/link";
import React from "react";
import { socialLinks } from "../../data/data";
import {
  CopyRight,
  FooterContainer,
  FooterSection,
  SocialIcons,
  SocialIconWrapper,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <SocialIcons>
          {socialLinks.map((social) => {
            return <SocialItem key={social.id} {...social} />;
          })}
        </SocialIcons>
        <CopyRight>{`© ${new Date().getFullYear()} Tüm hakları saklıdır.(Abdulkadir Mete)`}</CopyRight>
      </FooterContainer>
    </FooterSection>
  );
};

const SocialItem = ({ icon, link, name }) => {
  return (
    <Link href={link || ""}>
      <SocialIconWrapper>{icon}</SocialIconWrapper>
    </Link>
  );
};

export default Footer;

import React from "react";
import {
  ProfileDescription,
  ProfileImage,
  ProfileInfoGroup,
  ProfileName,
  ProfileWrapper,
} from "./ProfileStyles";

export const Profile = () => {
  return (
    <ProfileWrapper>
      <div>
        <ProfileImage src="/images/profil.jpg" alt="profile" />
      </div>
      <ProfileInfoGroup>
        <ProfileName>Abdulkadir Mete</ProfileName>
        <ProfileDescription>
          Merhaba ben Hafzullah! Voiser.net, Hesaplus.com projelerinin
          kurucusuyum. 2015'te Kocaeli Üniversitesi'nden mezun oldum ve
          devamında Yüksek Lisans eğitimimi tamamladım
        </ProfileDescription>
      </ProfileInfoGroup>
    </ProfileWrapper>
  );
};

import React from 'react';
import {
  Image,
  ImageWrapper,
  TeamCardWrapper,
  UserName,
  UserRole,
  UserDetails,
  DetailsWrapper,
  TeamCardContentWrapper,
} from './styles';

const TeamCard = ({ userImg, userName, userRole, userDetails, abbreviation, ...rest }) => {
  return (
    <TeamCardWrapper {...rest}>
      <ImageWrapper>
        <Image src={userImg} alt={userName} />
      </ImageWrapper>
      <TeamCardContentWrapper>
        <UserName>{userName}</UserName>
        <UserRole>
          {userRole} <br /> {abbreviation}
        </UserRole>
        <DetailsWrapper>
          <UserDetails>{userDetails}</UserDetails>
        </DetailsWrapper>
      </TeamCardContentWrapper>
    </TeamCardWrapper>
  );
};

export default TeamCard;

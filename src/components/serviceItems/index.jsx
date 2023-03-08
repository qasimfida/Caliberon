import React from 'react';
import { ServicesWrapper, StyledForwardIcon, UserName } from './styles';
import { useNavigate } from 'react-router-dom';

const ServicesItem = ({ serviceName, teamName, teamData, data }) => {
  const navigate = useNavigate();
  let name = serviceName ? 'services' : 'team';
  let stateData = serviceName
    ? {
        serviceName: serviceName,
      }
    : { teamName: teamName, teamData: teamData, data: data };

  const handleClick = () => {
    navigate(`/${name}/${serviceName ? serviceName : teamName}`, {
      state: stateData,
    });
  };
  return (
    <ServicesWrapper onClick={handleClick}>
      <UserName>{serviceName ? serviceName : teamName}</UserName>
      <StyledForwardIcon />
    </ServicesWrapper>
  );
};

export default ServicesItem;

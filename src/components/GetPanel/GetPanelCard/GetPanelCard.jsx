import React from 'react';
import { MemberCard, MemberImage, MemberInfo, MemberName } from "./GetPanelCard.styled";

export const GetPanelCard = ({ member }) => {
  return (
    <MemberCard>
            <MemberImage src={member.photo} alt="Member" width="70px" />  
            <MemberName>{member.name}</MemberName>
            <MemberInfo>{member.position}</MemberInfo>
            <MemberInfo>{member.email}</MemberInfo>
            <MemberInfo>{member.phone}</MemberInfo>
    </MemberCard>
  )
}


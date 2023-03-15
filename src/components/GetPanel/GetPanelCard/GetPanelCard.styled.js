import styled from "styled-components";


export const MemberCard = styled.li `
  width: 370px;
  height: 254px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.secondaryTextColor};
  text-align: center;
  justify-content: center;
  
  @media screen and (max-width:${({theme}) => theme.layout.loptop}){
    width: 282px;
    

}

@media screen and (max-width:${({theme}) => theme.layout.tablet}){
    width: 344px;
    

}


@media screen and (max-width:${({theme}) => theme.layout.modile}){
    width: 328px;
    

}

`
export const MemberImage = styled.img `
  margin: 20px auto;
  text-align: center;
  border-radius: 50%;
`
export const MemberName = styled.p `
overflow: hidden;
margin-bottom: 20px;
`
export const MemberInfo = styled.p `
overflow: hidden;
font-weight: 400;
font-size: 16px;
line-height: 26px;
`
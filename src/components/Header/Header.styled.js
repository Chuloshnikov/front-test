import styled from "styled-components";


export const HeaderWrapper = styled.div`
background-color: #ffffff;
position: fixed;
width: 100%;


`

export const HeaderContainer = styled.header`
    margin: 0 auto;
    display: flex;
    max-width: 1170px;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    margin: 13px 0;

    @media screen and (max-width:${({theme}) => theme.layout.loptop}){
    
        margin-left: 66.69px;

    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
    
    margin-left: 38.69px;

}


@media screen and (max-width:${({theme}) => theme.layout.mobile}){
    
    margin-left: 20.69px;

}
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 13px 0;

    @media screen and (max-width:${({theme}) => theme.layout.loptop}){
    
    margin-right: 60px;

    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
    
    margin-right: 32px;

    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
    
    margin-right: 16px;

    }
`;




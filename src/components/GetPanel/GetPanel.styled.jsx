import styled from "styled-components";

export const GetPanelContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &>h2 {
        margin-top: 140px;
        font-weight: 400;
        font-size: 40px;
        margin-bottom: 50px;
    }

`;

export const GetPanelList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 29px;


    @media screen and (max-width:${({theme}) => theme.layout.loptop}){
    
        margin: 0 60px;
        
    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
        
        margin: 0 32px;
        gap: 16px;

    }

    @media screen and (max-width:${({theme}) => theme.layout.mobile}){
        margin: 0 16px;
        gap: 20px;
    }
`;

export const ShowMoreButton = styled.button`
    background-color: ${({theme}) => theme.colors.primaryBackgroundButton};
    width: 120px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 80px;
    transition: all .3s ease 0s;
    margin-top: 50px;
    

    :hover {
        background-color: ${({theme}) => theme.colors.primaryBackgroundButtonHover};
        transform: scale(1.05);
    }


`;
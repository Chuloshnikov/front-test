import styled from "styled-components";
import img from '../../assets/images/HeroImage.png';


export const HeroContainer = styled.div`
    background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
    ), url(${img});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 650px;

    &> button {
        margin: 32px auto;
    }

    @media screen and (max-width:${({theme}) => theme.layout.tablet}){
    
        height: 500px;

    }
`

export const TextContainer = styled.div`

        width: 380px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 21px;

        
        @media screen and (max-width:390px){
    
            width: 328px;
            margin: 0 16px;

        }
        

&> h1 {
        color: ${({theme}) => theme.colors.secondaryTextColor};
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        margin-top: 164px;


        @media screen and (max-width:${({theme}) => theme.layout.tablet}){
    
            margin-top: 89px;

        }

        @media screen and (max-width:${({theme}) => theme.layout.mobile}){
    
            margin-top: 40px;

        }
    }

    &> p {
        color: ${({theme}) => theme.colors.secondaryTextColor};
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
    }

`
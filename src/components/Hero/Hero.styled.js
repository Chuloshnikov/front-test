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
`

export const TextContainer = styled.div`

        width: 380px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 21px;
        

&> h1 {
        color: ${({theme}) => theme.colors.secondaryTextColor};
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        margin-top: 164px;
    }

    &> p {
        color: ${({theme}) => theme.colors.secondaryTextColor};
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
    }

`
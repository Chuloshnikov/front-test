import styled from "styled-components";

export const Button = styled.button`
background-color: ${({theme}) => theme.colors.primaryBackgroundButton};
    width: 100px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 80px;
    transition: all .3s ease 0s;
    

    :hover {
        background-color: ${({theme}) => theme.colors.primaryBackgroundButtonHover};
        transform: scale(1.05);
    }
`
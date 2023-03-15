import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
html {
    scroll-behavior: smooth;
}
::-webkit-scrollbar {
    display: none;
}
body {
    background-color: ${({theme}) => theme.colors.primaryBackgroundColor};
    color: ${({theme}) => theme.colors.primaryTextColor};
    margin: 0;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1,h2,h3,h4,h5,h6,p {
    margin: 0;
}
ul{
    list-style-type: none;
    margin: 0;
}
a {
    color: inherit;
}
img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    }
`;

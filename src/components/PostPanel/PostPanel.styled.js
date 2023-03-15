import styled from "styled-components";

export const PostPanelContainer = styled.section`
    text-align: center;
    padding-bottom: 100px;

    &>h2 {
        margin-top: 140px;
        font-weight: 400;
        font-size: 40px;
        margin-bottom: 50px;
    }
`;

export const FormWrapper = styled.form `
  display: flex;
  flex-flow: column wrap;
  width: 360px;
  padding: 0px 16px;
  margin: 0 auto;
  text-align: left;

  &>h3 {
        font-weight: 400;
        font-size: 16px;
    }

  &>span {
    color: ${({theme}) => theme.colors.inputTextColor};
    font-size: 12px;
    padding-top: 4px;
    padding-left: 16px;
    text-align: left; 
    margin-bottom: 25px;
  
  }
`

export const StyledInput = styled.input `
  background-color: ${({theme}) => theme.colors. primaryBackgroundColor};
  width: 328px;
  height: 54px;
  margin: 0 auto;
  padding: 14px 0px 14px 16px;
  border: 1px solid #D0CFCF;
  border-radius: 4px;
  font-size: 16px;
  

  
  
  &:not(:first-child) {
    margin-top: 50px;
  }
`

export const Label = styled.label`
    color: ${({theme}) => theme.colors.primaryTextColor};
    display: flex;
    padding-top: 7px;
    text-align: left;  
    font-size: 16px;
    align-items: center;

`;

export const InputCheckbox = styled.input `
  margin-right: 12px;
  margin-top: 7px:
  text-align: left;  
  border: 1px solid;
  width: 16px;
  -ms-transform: scale(1); /* IE */
  -moz-transform: scale(1); /* FF */
  -webkit-transform: scale(1); /* Safari and Chrome */
  -o-transform: scale(1); /* Opera */
  transform: scale(1.5);
`

export const InputUpload = styled.input `
  display: inline-block;
  color: #7E7E7E;
  font-size: 16px;
  width: 328px;
  height: 54px;
  margin: 50px auto;
  border: 1px solid #D0CFCF;
  border-radius: 4px;
  &::placeholder {
    
  }
    
&::file-selector-button {
    background-color: #D0CFCF;
    color: ${({theme}) => theme.colors.primaryTextColor};
    height: 52px;
    border: 1px solid ${({theme}) => theme.colors.primaryTextColor};
    border-radius: 4px 0px 0px 4px;
    &::placeholder {
    
    }
    
  }
`

export const SignUpButton = styled.button `
background-color: #B4B4B4;
  width: 100px;
  height: 34px;
  font-size: 16px;
  margin: 0px auto;
  border: none;
  border-radius: 80px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.secondaryTextColor};
  transition: all .3s ease 0s;
  
  :hover {
        background-color: #858585;
        transform: scale(1.05);
    }
  :disabled{
    background-color: ;
    color: ${({theme}) => theme.colors.secondaryTextColor};
  }
`
import React from 'react';
import { HeaderContainer, HeaderWrapper, LogoContainer, ButtonsContainer} from './Header.styled';
import Logo from '../../assets/icons/Logo.svg';
import { PrimaryButton } from '../Button/PrimaryButton';


const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
            <a href="/">
              <img src={Logo} alt="logo"/>
            </a>
        </LogoContainer>
        <ButtonsContainer>
          <a href="#users"><PrimaryButton text="Users" /></a>
          <a href="#signUp"><PrimaryButton text="Sign Up"/></a>
        </ButtonsContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
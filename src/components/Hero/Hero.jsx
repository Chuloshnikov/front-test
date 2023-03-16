import React from 'react';
import { PrimaryButton } from '../Button/PrimaryButton';
import { HeroContainer, TextContainer } from './Hero.styled.js';

const Hero = () => {
  return (
    <HeroContainer>
        <TextContainer>
            <h1>Test assignment for front-end developer</h1>
                <p>What defines a good front-end developer is one that has 
                skilled knowledge of HTML, CSS, JS with a vast understanding 
                of User design thinking as they'll be building web interfaces 
                with accessibility in mind. They should also be excited to learn, 
                as the world of Front-End Development keeps evolving.
            </p>
        </TextContainer>
        <a href="#signUp"><PrimaryButton text="Sign Up"/></a>
    </HeroContainer>
  )
}

export default Hero
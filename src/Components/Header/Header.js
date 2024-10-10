import React from 'react'
import {HeaderContainer, Logo, NavBar, OptionsList} from './styles'
import logo from '../../assets/picture.png'

function Header (){
  return (
    <HeaderContainer>
        <Logo>
            
            <p>Pedro Cursos</p>
        </Logo>
        <NavBar>
            <OptionsList>
                <li>Cursos</li>
                <li>Sobre nós</li>
                <li>Para empresas</li>
            </OptionsList>
        </NavBar>
    </HeaderContainer>
  )
}

export default Header
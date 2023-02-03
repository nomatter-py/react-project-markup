import React from "react";
import Logo from "../../assets/logo.svg";

import {
  Header,
  HeaderContainer,
  Nav,
  LogoWrapper,
  LogoHeader,
  ProjectCaption,
} from "./NavBarStyled";

const NavBar = () => {
  return (
    <Header>
      <HeaderContainer>
        <Nav>
          <LogoWrapper>
            <img src={Logo} alt="React Logo" />
            <LogoHeader>React Facts</LogoHeader>
          </LogoWrapper>
          <ProjectCaption>React Course - Project 1</ProjectCaption>
        </Nav>
      </HeaderContainer>
    </Header>
  );
};

export default NavBar;

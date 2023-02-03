import styled from "styled-components";
import Container from "../Container/Container";

export const Header = styled.header`
  background: #21222a;
  height: 91px;
`;

export const HeaderContainer = styled(Container)`
  height: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const NavWrapper = styled.div``;

export const LogoWrapper = styled.div`
  display: flex;
  width: 158px;
`;

export const LogoHeader = styled.h3`
  margin-left: 6.68px;

  font-weight: 700;
  font-size: 22.2535px;
  line-height: 27px;
  letter-spacing: -0.05em;
`;

export const ProjectCaption = styled.h4`
  display: flex;
  align-items: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  color: #deebf8;
`;

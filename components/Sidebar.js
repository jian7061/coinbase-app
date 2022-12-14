import React, { useState } from "react";
import Image from "next/image";
import CoinbaseLogo from "../public/assets/cb-logo.png";
import styled from "styled-components";
import { navItems } from "../public/static/navItems";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);
  return (
    <Wrapper>
      <LogoContaioner>
        <Logo>
          <Image src={CoinbaseLogo} alt="Coinbase Logo" />
        </Logo>
      </LogoContaioner>
      <NavsItemContainer>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && "#3773f5" }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
        ))}
      </NavsItemContainer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: calc(100vh);
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`;

const LogoContaioner = styled.div`
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavsItemContainer = styled.div`
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;

  &:hover {
    background-color: #141519;
  }
`;

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: flex;
  place-items: center;
`;

const NavTitle = styled.div``;

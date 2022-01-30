import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../constants/images";
import styled from "styled-components";

export const Menus = () => {
  return (
    <>
      <Lists>
        <a href="#home">Home</a>
      </Lists>
      <Lists>
        <a href="#about">AboutUs</a>
      </Lists>
      <Lists>
        <a href="#menu">Menu</a>
      </Lists>
      <Lists>
        <a href="#awards">Awards</a>
      </Lists>
      <Lists>
        <a href="#contact">Contact</a>
      </Lists>
    </>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Nav>
      <NavBackground>
        <NavBg src={images.gericht} alt="Nav" />
      </NavBackground>

      <NavLinks>
        <Menus />
      </NavLinks>

      <Login>
        <a href="#login">LogIn / Register</a>
        <div />
        <a href="/">Book Table</a>
      </Login>

      <MenuIcon>
        <Icon
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <SmallScreenOverlay>
            <SecondIcon
              onClick={() => {
                setToggle(false);
              }}
            />

            <SmallScreenNavLinks className="slide-bottom">
              <Menus />
            </SmallScreenNavLinks>
          </SmallScreenOverlay>
        )}
      </MenuIcon>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-black);
  padding: 16px 32px;
  position: fixed;
  z-index: 1000;
`;

const NavBackground = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavBg = styled.img`
  width: 150px;
`;

const NavLinks = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Lists = styled.li`
  font-family: var(--font-alt);
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 28px;
  font-size: 16px;
  list-style: none;
  margin: 0px 10px;
  cursor: pointer;
  transition: 0.2s ease-in;

  @media (max-width: 1000px) {
    margin: 32px;
    color: #dcca87;
    cursor: pointer;
    font-family: var(--font-base);
    font-size: 20px;

    &:hover {
      color: whitesmoke;
    }
  }

  &:hover {
    color: var(--color-grey);
  }
`;
const Login = styled.div`
  font-family: var(--font-alt);
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 28px;
  font-size: 16px;
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  transition: 0.8s ease-in-out;

  a {
    margin: 0px 10px;
    cursor: pointer;

    &:hover {
      color: var(--color-grey);
    }
  }

  div {
    width: 1px;
    height: 30px;
    background-color: var(--color-grey);
    color: white;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

const Icon = styled(GiHamburgerMenu)`
  color: #fff;
  font-size: 27px;
  cursor: pointer;
`;

const SmallScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  flex-direction: column;
  z-index: 5;
`;

const SecondIcon = styled(MdOutlineRestaurantMenu)`
  font-size: 27px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: var(--color-grey);
`;

const SmallScreenNavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Navbar;

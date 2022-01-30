import React from "react";
import images from "../constants/images";
import data from "../constants/data";
import styled from "styled-components";
import { Subheading, Menuitem } from "../components/import";

const Menu = () => {
  return (
    <SpecialMenu id="menu">
      <SpecialMenuTitle>
        <Subheading title="Menu That Fits You Pallete" />
        <h1>Today's Special</h1>
      </SpecialMenuTitle>

      <SpecialMenus>
        <SpecialMenuWine>
          <h1>Wine & Beer</h1>
          <SpecialMenuItems>
            {data.wines.map((wine, index) => (
              <Menuitem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </SpecialMenuItems>
        </SpecialMenuWine>

        <SpecialMenuImage>
          <Beer src={images.menu} />
        </SpecialMenuImage>

        <SpecialMenuCocktail>
          <h1>Cocktail</h1>
          <SpecialMenuItems>
            {data.cocktails.map((cocktail, index) => (
              <Menuitem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </SpecialMenuItems>
        </SpecialMenuCocktail>
      </SpecialMenus>
      <Button>
        <button>Explore Now</button>
      </Button>
    </SpecialMenu>
  );
};

const SpecialMenu = styled.div`
  padding: 4rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0d0d0d;
  transition: 1s ease-in-out;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
    transition: 1s ease;
  }

  h1 {
    color: #d4af37;
    font-family: var(--font-base);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
  }
`;

const SpecialMenuTitle = styled.div`
  text-align: center;
`;

const SpecialMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  margin: 32px 0px;
  transition: 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 32px 0px;
  }
`;

const SpecialMenuWine = styled.div`
  flex: 1;
  flex-direction: column;
  width: 100%;

  h1 {
    color: #fff;
    font-size: 40px;
    text-align: center;
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
`;

const SpecialMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 32px 0px;
`;

const SpecialMenuImage = styled.div`
  width: 410px;
  margin: 0px 32px;
  transition: 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    align-self: center;
  }
`;

const Beer = styled.img`
  width: 100%;
  height: auto;
`;

const SpecialMenuCocktail = styled.div`
  flex: 1;
  flex-direction: column;
  width: 100%;
  h1 {
    color: #fff;
    font-size: 40px;
    text-align: center;
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.div`
  button {
    background-color: var(--color-crimson);
    color: var(--color-black);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export default Menu;

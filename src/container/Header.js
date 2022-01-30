import React from "react";
import styled, { css } from "styled-components";
import Subheading from "../components/Subheading";
import images from "../constants/images";

const Header = () => {
  return (
    <Headers id="home">
      <HeadersInfo>
        <Subheading title="Chase the New Flavour" />
        <h1>The Key To Fine Dining</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, qui
          autem. Officiis
        </p>
        <button>Explore Now</button>
      </HeadersInfo>

      <HeaderImage>
        <HeaderImg>
          <img src={images.welcome} alt="Welcome " />
        </HeaderImg>
      </HeaderImage>
    </Headers>
  );
};

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 6rem;
  min-height: 100vh;
  background-color: var(--color-black);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 2rem;
  }
`;

const HeadersInfo = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 30px;
  transition: 0.5s ease-in-out;

  h1 {
    font-family: var(--font-base);
    letter-spacing: 0.04rem;
    line-height: 100px;
    font-size: 75px;
    color: #d4af37;
  }

  p {
    font-family: var(--font-alt);
    color: var(--color-white);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
    margin: 32px 0px;
  }
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

const HeaderImage = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-top: 64px;
  }
`;

const HeaderImg = styled.image`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;

  img {
    width: 80%;
  }
`;

export default Header;

import React from "react";
import images from "../constants/images";
import styled from "styled-components";
const AboutUs = () => {
  return (
    <About className="app__bg" id="about">
      <AboutOverlay>
        <GLetter src={images.G} alt="G Letter" />
      </AboutOverlay>

      <AboutContent>
        <AboutInfo>
          <h1>About Us</h1>
          <Spoon src={images.spoon} alt="spoon" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            qui autem. Officiis Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Labore, qui autem. Officiis
          </p>
          <button>Explore Now</button>
        </AboutInfo>

        <KnifeImage>
          <Knife src={images.knife} />
        </KnifeImage>

        <AboutInfoHistory>
          <h1>Our History</h1>
          <Spoon src={images.spoon} alt="spoon" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            qui autem. Officiis Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Labore, qui autem. Officiis
          </p>
          <button>Explore Now</button>
        </AboutInfoHistory>
      </AboutContent>
    </About>
  );
};

const About = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GLetter = styled.img`
  width: 391px;
  height: 415px;
  z-index: 0;
  transition: 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const AboutContent = styled.div`
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
  justify-content: flex-end;
  h1 {
    color: #d4af37;
    font-family: var(--font-base);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
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
const Spoon = styled.img``;

const KnifeImage = styled.div`
  padding: 32px 44px;
`;

const Knife = styled.img`
  height: 850px;
  transition: 1s ease-in-out;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const AboutInfoHistory = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  h1 {
    font-family: var(--font-base);
    color: #d4af37;
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
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

export default AboutUs;

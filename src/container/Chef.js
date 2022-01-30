import React from "react";
import images from "../constants/images";
import styled from "styled-components";
import Subheading from "../components/Subheading";

const Chef = () => {
  return (
    <Container className="app__bg" id="awards">
      <Wrapper>
        <WrapImage src={images.chef} />
      </Wrapper>

      <WrapperInfo>
        <Subheading title="Chef Word" />
        <h1>What We Believe In</h1>

        <ChefContent>
          <ChefQuote>
            <Quote src={images.quote} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae delectus quae rem asperiores
            </p>
          </ChefQuote>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae delectus quae rem asperiores qui dolores eligendi, quod
            soluta praesentium id dicta! Facilis libero dolor repudiandae,
            quidem debitis voluptatum consectetur incidunt.
          </p>
        </ChefContent>

        <ChefSigns>
          <h3>Marudhu Pandiyan</h3>
          <p>Chef & Founder</p>
          <Sign src={images.sign} />
        </ChefSigns>
      </WrapperInfo>
    </Container>
  );
};

const Container = styled.div`
  padding: 4rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 2rem;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 32px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
    justify-content: center;
  }
`;

const WrapImage = styled.img`
  width: 80%;
`;

const WrapperInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    color: #d4af37;
    font-family: var(--font-base);
    font-size: 40px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
  }

  p {
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: "tnum" on, "lnum" on;
    line-height: 29.9px;
    font-size: 18px;
  }
  h3 {
    color: #d4af57;
  }
`;

const ChefContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 64px;
`;

const ChefQuote = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Quote = styled.img`
  width: 47px;
  height: 40px;
`;

const ChefSigns = styled.div`
  margin-top: 32px;
`;

const Sign = styled.img`
  margin-top: 32px;
  width: 200px;
`;

export default Chef;

import React from "react";
import { images } from "../constants";
import { Subheading } from "../components/import";
import { data } from "../constants";
import styled from "styled-components";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <AwardCards>
      <img src={imgUrl} alt="" />
      <AwardCardsContent>
        <p style={{ color: "white" }}>{title}</p>
        <h5 style={{ color: "white" }}>{subtitle}</h5>
      </AwardCardsContent>
    </AwardCards>
  );
};

const Laurels = () => {
  return (
    <Container className="app__bg">
      <ContainerInfo>
        <Heading>
          <Subheading title="Awards & Recognition" />
          <h1>Our Laurels</h1>
        </Heading>

        <Awards>
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </Awards>
      </ContainerInfo>

      <LaurelsImage>
        <Laurel src={images.laurels} />
      </LaurelsImage>
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
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContainerInfo = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h1 {
    color: #d4af37;
    font-family: var(--font-base);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
  }
`;
const Awards = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
`;

const AwardCards = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 30px;
  width: 300px;

  img {
    width: 70px;
    margin-right: 10px;
  }
`;

const AwardCardsContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  p:first-child {
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: "tnum" on, "lnum" on;
    line-height: 29.9px;
    font-size: 20px;
  }
  h5 {
    font-weight: normal;
  }
`;

const LaurelsImage = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Laurel = styled.img`
  width: 100%;
  object-fit: contain;
`;

export default Laurels;

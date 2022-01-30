import React from "react";
import styled from "styled-components";
import Subheading from "../components/Subheading";
import { NewsLetter, FooterOverlay } from "../components/import";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { images } from "../constants";

const Footer = () => {
  return (
    <Foot>
      <FooterOverlay />
      <NewsLetter />

      <FooterLinks>
        <Contacts>
          <Items>
            <h1>Contacts</h1>
            <p>1/120c, Edayakurichy, Tamilnadu</p>
            <p>+91 950 080 4720</p>
            <p>Marudhupandiyan</p>
          </Items>
        </Contacts>

        <Logos>
          <h1>GERICHT</h1>
          <p>
            "The Best Way To Find YourSelf Is To Lose YourSelf In The Service of
            The Others"
          </p>
          <img src={images.spoon} alt="" />

          <LogoPortion>
            <Logo1 fontSize="40px" />
            <Logo2 fontSize="40px" />
            <Logo3 fontSize="40px" />
          </LogoPortion>
        </Logos>

        <Works>
          <WorkingHours>
            <h1>Working Hours</h1>
            <p>Welcome Our Hotel</p>
            <p>Mon-Fri: 10.00am - 02.00pm</p>
            <p>Sat-Sun: 10.00am - 03.00pm</p>
          </WorkingHours>
        </Works>
      </FooterLinks>

      <h3>2022 Marudhu... All Rights Reserved</h3>
    </Foot>
  );
};

const Foot = styled.div`
  padding: 4rem 6rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: var(--color-black);
  z-index: 1;

  h3 {
    margin-top: 4rem;
    color: var(--color-grey);
    font-family: var(--font-base);
  }

  h1 {
    font-family: var(--font-base);
    color: var(--color-golden);
    font-size: 35px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
  }
`;

const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Items = styled.div`
  p {
    font-family: var(--font-base);
    color: var(--color-grey);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: "tnum" on, "lnum" on;
    line-height: 29.9px;
    font-size: 16px;
  }
  h1 {
    color: #d4af37;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: "tnum" on, "lnum" on;
    line-height: 29.9px;
    font-size: 16px;
    color: var(--color-grey);
  }
  h1 {
    color: #d4af37;
  }
`;

const LogoPortion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: white;
`;

const Logo1 = styled(FiFacebook)`
  margin-right: 15px;
`;

const Logo2 = styled(FiInstagram)`
  margin-right: 15px;
`;

const Logo3 = styled(FiTwitter)`
  margin-left: 15px;
`;

const Works = styled.div`
  p {
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: "tnum" on, "lnum" on;
    line-height: 29.9px;
    font-size: 16px;
    color: var(--color-grey);
  }

  h1 {
    color: #d4af37;
  }
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Footer;

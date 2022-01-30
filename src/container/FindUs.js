import React from "react";
import styled from "styled-components";
import { Subheading } from "../components/import";
import { images } from "../constants";

const FindUs = () => {
  return (
    <Contact className="app__bg" id="contact">
      <ContactInfo>
        <Subheading title="Contact" />
        <h1>Find Us</h1>
        <Hours>
          <p>Lane Ends Bungalow WhatCraft Hall Lane Rudhealth CW9 75G</p>
          <p style={{ color: "#d4af37" }}>Opening Timing</p>
          <p>Mon-Fri: 10.00am - 02.00pm</p>
          <p>Sat-Sun: 10.00am - 03.00pm</p>
        </Hours>
        <button>Explore Now</button>
      </ContactInfo>

      <ContactImg>
        <Photos src={images.findus} />
      </ContactImg>
    </Contact>
  );
};

const Contact = styled.div`
  padding: 4rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }

  h1 {
    color: #d4af37;
    font-family: var(--font-base);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    margin-bottom: 3rem;
  }

  p {
    font-family: var(--font-alt);
    color: var(--color-white);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  button {
    margin-bottom: 20px;
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

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
`;

const Hours = styled.div``;

const ContactInfo = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const ContactImg = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-top: 15px;
    margin-left: unset;
  }
`;

const Photos = styled.img`
  width: 100%;
  object-fit: contain;
`;

export default FindUs;

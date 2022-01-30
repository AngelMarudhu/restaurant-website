import React from "react";
import Subheading from "./Subheading";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <News>
      <NewsHeading>
        <Subheading title="News Letter" />
        <h1>Subscribe To Our NewsLetter</h1>
        <p>Never Missed Latest Updates</p>
      </NewsHeading>

      <Inputs>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </Inputs>
    </News>
  );
};

const News = styled.div`
  padding: 32px 64px;
  border: 1px solid #d4af37;
  background: var(--color-black);
  transition: 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 32px 0;
    border: none;
    width: 400px;
  }
`;

const NewsHeading = styled.div`
  text-align: center;
  h1 {
    font-family: var(--font-base);
    color: white;
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;

    @media (max-width: 768px) {
      font-size: 40px;
      width: 100%;
    }
  }

  p {
    font-family: var(--font-base);
    color: #d4af37;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 29.9px;
    font-size: 23px;
  }
`;

const Inputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    border: none;
    width: 100%;
  }

  input {
    width: 630px;
    padding: 10px;
    border-radius: 10px 60px 0px 10px;
    font-size: 16px;
    font-family: var(--font-base);
    font-weight: 600;
    /* margin-right: 32px; */
    background: transparent;
    outline: white;
    color: #d4af37;

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin: 0px 10px 10px 10px;
    }
  }

  button {
    cursor: pointer;
    font-weight: 600;
    font-family: var(--font-base);
    width: max-content;
    font-size: 16px;
    padding: 10px;
    border-radius: 60px 10px 10px 0px;
    background: transparent;
    outline: white;
    color: #d4af37;
  }
`;

export default NewsLetter;

import React from "react";
import styled, { css } from "styled-components";
import images from "../constants/images";

const Subheading = ({ title }) => {
  return (
    <SubHead>
      <p>{title}</p>
      <Spoon src={images.spoon} alt="spoon" />
    </SubHead>
  );
};

const SubHead = styled.div`
  margin-bottom: 15px;

  p {
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: "tnum" on, "lnum" on;
    line-height: 29.9px;
    font-size: 23px;
  }
`;

const Spoon = styled.img``;

export default Subheading;

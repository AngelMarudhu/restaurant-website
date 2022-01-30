import React from "react";
import styled from "styled-components";

const FooterOverlay = () => {
  return (
    <OverLay>
      <OverLayBlack />
      <OverLayBg className="app__bg " />
    </OverLay>
  );
};

const OverLay = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const OverLayBlack = styled.div`
  height: 25%;
  background: var(--color-black);
`;

const OverLayBg = styled.div`
  height: 75%;
`;

export default FooterOverlay;

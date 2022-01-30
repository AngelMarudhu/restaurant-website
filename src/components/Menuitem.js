import React from "react";
import styled from "styled-components";

const Menuitem = ({ title, price, tags }) => {
  return (
    <ListOut>
      <ListOutHead>
        <ListOutHeadName>
          <p>{title}</p>
        </ListOutHeadName>

        <ListOutHeadSub>
          <p>{tags}</p>
        </ListOutHeadSub>

        <Dash />

        <ListOutHeadPrice>
          <p>{price}</p>
        </ListOutHeadPrice>
      </ListOutHead>
    </ListOut>
  );
};

const ListOut = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ListOutHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListOutHeadName = styled.div`
  flex: 1;
  margin-right: 15px;

  p {
    font-family: var(--font-base);
    color: #d4af37;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
    margin: 32px 0px;
  }
`;

const ListOutHeadPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: #fff;
`;

const ListOutHeadSub = styled.div`
  width: 100%;
  flex: 1;
  color: var(--color-grey);

  p {
    font-size: 13px;
    margin-right: 5px;
  }
`;

const Dash = styled.div`
  width: 60px;
  height: 1px;
  background-color: #d4af37;
  margin: 0px 10px 0px 0px;
`;

export default Menuitem;

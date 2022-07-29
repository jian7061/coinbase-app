import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promo from "./Promo";

const Main = ({ address, thirdWebTokens, sanityTokens }) => {
  return (
    <Wrapper>
      <Portfolio
        address={address}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promo />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh-64px);
  overflow: hidden;

  & div {
    border-radius: 0.4rem;
  }
`;

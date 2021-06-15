import React from "react";
import {
  ProductContainer,
  ProductWrapper,
  ProductTop,
  TopH1,
  TopSub,
  ProductText,
  Text,
  ImgP,
  ProductImg,
} from "./ProductElements";

import DB from "../images/basiura.jpg";
import Nae from "../images/nae.jpg";

const Product = () => {
  return (
    <>
      <ProductContainer id="about">
        <ProductWrapper>
          <ProductTop>
            <TopH1>ホーリーバジル </TopH1>
            <TopSub>紫になります</TopSub>
          </ProductTop>
          <ProductText>
            <Text>
              収穫したホーリーバジルは特製の棚に保存して乾燥させます
              <br />
              二週間ほど乾燥させていきます
              <br />
              色と匂いが最高のドライバジルの完成はすぐそこです
            </Text>
          </ProductText>
        </ProductWrapper>
      </ProductContainer>
      <ProductImg>
        <ImgP src={DB} alt="dry" />
        <ImgP src={Nae} alt="dry" />
      </ProductImg>
    </>
  );
};

export default Product;

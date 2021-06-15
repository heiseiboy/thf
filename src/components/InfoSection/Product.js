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
  ImgP2,
  ImgP3,
  ProductImg,
  TopContainer,
} from "./ProductElements";

import DB from "../images/basiura.jpg";
import Nae from "../images/nae.jpg";
import P169 from "../images/purple169tate.jpg";

const Product = () => {
  return (
    <>
      <TopContainer>
        <ProductContainer id="basil">
          <ProductWrapper>
            <ProductTop>
              <TopH1>
                葉っぱの裏の<span>紫色</span>は
                <br />
                高品質の証{" "}
              </TopH1>
              <TopSub></TopSub>
            </ProductTop>
            <ProductText>
              <Text>
                紫色に染まっていくホーリーバジルを一つ一つ丁寧に育てています。
                <br />
                この綺麗な紫色の葉っぱが
                <br />
                普通のバジルとの違いであり
                <br />
                ホーリーバジルの大きな特徴です。
              </Text>
            </ProductText>
          </ProductWrapper>
        </ProductContainer>
        <ProductImg>
          <ImgP src={DB} alt="dry" />
          <ImgP2 src={Nae} alt="dry" />
          <ImgP3 src={P169} alt="dry" />
        </ProductImg>
      </TopContainer>
    </>
  );
};

export default Product;

import React from "react";
import {
  DrinkContainer,
  DrinkWrapper,
  DrinkTop,
  TopH1,
  TopSub,
  DrinkText,
  Text,
  ImgP,
  ImgP2,
  DrinkImg,
  TopContainer,
} from "./DrinkElements";

import nidasi1 from "../images/nidasi1.jpg";
import nidasi2 from "../images/nidasi2.jpg";

const Drink = () => {
  return (
    <>
      <TopContainer id="basil">
        <DrinkContainer>
          <DrinkWrapper>
            <DrinkTop>
              <TopH1>ティーについて</TopH1>
              <TopSub>作り方、飲み方</TopSub>
            </DrinkTop>
            <DrinkText>
              <Text>
                <span>1</span>､ 2リットルの沸騰したお湯にティーパックを入れる。
                <br />
                <span>2</span>、2〜3分煮出します。
                <br />
                <span>3</span>
                、カップに注ぎ香りを楽しみながらお召し上がりください。
                <br />
                ※冷やして飲んでもスッキリ美味しいです。
              </Text>
            </DrinkText>
          </DrinkWrapper>
        </DrinkContainer>
        <DrinkImg>
          <ImgP src={nidasi1} alt="" />
          <ImgP2 src={nidasi2} alt="" />
        </DrinkImg>
      </TopContainer>
    </>
  );
};

export default Drink;

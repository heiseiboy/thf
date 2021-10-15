import React from "react";
import {
  HoneyContainer,
  HoneyWrapper,
  HoneyTop,
  TopH1,
  TopSub,
  HoneyText,
  Text,
  ImgP,
  ImgP2,
  ImgP3,
  HoneyImg,
  TopContainer,
} from "./HoneyElements";

import Honey1 from "../images/honey1.jpg";
import Honey4 from "../images/honey4.png";
import Honey3 from "../images/honey3.png";

const Honey = () => {
  return (
    <>
      <TopContainer id="honey">
        <HoneyContainer>
          <HoneyWrapper>
            <HoneyTop>
              <TopH1>バジルはちみつ</TopH1>
              <TopSub>
                <span id="hbg">ホーリーバジル</span>と
                <span id="hatimitu">はちみつ</span>
                を合わせた新商品です
              </TopSub>
            </HoneyTop>
            <HoneyText>
              <Text>
                ホーリーバジルを蜂蜜につけた新商品の『バジミツ』です。
                <br />
                埼玉県熊谷市の養蜂家から直接仕入れた蜂蜜とバジルは花芽のみを使用した商品です。
                味はさることながらホーリーバジルと蜂蜜を混ぜたことによる独特の香りもお楽しみ下さい。
              </Text>
            </HoneyText>
          </HoneyWrapper>
        </HoneyContainer>
        <HoneyImg>
          <ImgP src={Honey3} alt="dry" />
          <ImgP2 src={Honey4} alt="dry" />
          <ImgP3 src={Honey1} alt="dry" />
        </HoneyImg>
      </TopContainer>
    </>
  );
};

export default Honey;

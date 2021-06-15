import React from "react";
import {
  MethodContainer,
  MethodWrapper,
  MethodTop,
  TopH1,
  TopSub,
  MethodText,
  Text,
  Img,
} from "./MethodElements";

import DB from "../images/dryBasil.jpg";

const Method = () => {
  return (
    <>
      <MethodContainer id="method">
        <MethodWrapper>
          <MethodTop>
            <TopH1>
              特製の棚で乾燥させ
              <br />
              品質を確保
            </TopH1>
            <TopSub>乾燥させます</TopSub>
          </MethodTop>
          <MethodText>
            <Text>
              収穫したホーリーバジルは特製の棚に保存して乾燥させます
              <br />
              二週間ほど乾燥させていきます
              <br />
              色と匂いが最高のドライバジルの完成です
            </Text>
          </MethodText>
        </MethodWrapper>
      </MethodContainer>
      <Img src={DB} alt="dry" />
    </>
  );
};

export default Method;

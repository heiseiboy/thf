export const HomeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About US",
  // headline: "",
  /*description: (
    <text>
      埼玉のとある青年たちが第6次産業をはじめました
      <br />
      育てているのはホーリーバジル　
      <br />
      通称　Tulsi(トゥルシー)
      <br />
      聴き慣れない言葉だと思います
      <br />
      丁寧に説明しますので是非ご覧ください
    </text>
  )

  // 一応このまま出力できるけどReactのレンダリング的に
  // タグはuppercaseで書けと警告出るから直接書いた

  ,*/

  imgStart: false,
  img: require("../images/purple.jpg").default,
  alt: "purple",
};

export const HomeObjTwo = {
  id: "products",
  topLine: "PRODUCTS",
  headline: "",
  // description: "We grow Holy Basil to make Holy Basil Tea ",

  imgStart: true,
  img: require("../images/basidai.jpg").default,
  // img2: require("../images/nae.jpg").default,
  alt: "",
};

export const HomeObjThree = {
  id: "products",
  topLine: "METHOD",
  headline: "",
  // description: "We grow Holy Basil to make Holy Basil Tea ",

  imgStart: true,
  img: require("../images/dryBasil.jpg").default,
  // img2: require("../images/nae.jpg").default,
  alt: "dryBasil",
};

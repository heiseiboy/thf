import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import InfoSection2 from "../InfoSection/section2";
import InfoSection3 from "../InfoSection/section3";
import FullAbout from "../InfoSection/FullAbout";
import Method from "../InfoSection/Method";
import Product from "../InfoSection/Product";
import { HomeObjOne, HomeObjThree, HomeObjTwo } from "../InfoSection/Data";
import ContactSection from "../InfoSection/ContactSection";
import Footer from "../Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* <InfoSection {...HomeObjOne} /> */}
      <FullAbout />
      <Product />
      <Method />
      {/* <InfoSection2 {...HomeObjTwo} /> */}
      {/* <InfoSection3 {...HomeObjThree} /> */}
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;

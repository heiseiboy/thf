import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import HeroSection from "../HeroSection";
import FullAbout from "../InfoSection/FullAbout";
import Method from "../InfoSection/Method";
import Product from "../InfoSection/Product";
import Drink from "../InfoSection/Drink";
import ContactSection from "../InfoSection/ContactSection";
import Footer from "../Footer";
import Honey from "../Honey/Honey";

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
      <FullAbout />
      <Product />
      <Method />
      <Drink />
      <Honey />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;

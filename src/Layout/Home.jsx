import React from "react";
import Navbar from "../components/Common/Navbar";
import Hero from "../Section/Hero";
import BlurOverlay from "../components/Common/BlurOverlay";
import CustomCursor from "../components/Common/CustomCursor";

const Home = () => {
  return (
    <body className="relative">
      <CustomCursor />
      <section>
        <header>
          <nav>
            <Navbar></Navbar>
          </nav>
        </header>
        <main>
          <Hero></Hero>
        </main>
      </section>
      <BlurOverlay />
    </body>
  );
};

export default Home;

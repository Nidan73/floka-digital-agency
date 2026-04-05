import React from "react";
import Navbar from "../components/Common/Navbar";
import Hero from "../Section/Hero";

const Home = () => {
  return (
    <body>
      <section>
        <header>
          <nav>
            <Navbar></Navbar>
          </nav>
        </header>
        <Hero></Hero>
      </section>
    </body>
  );
};

export default Home;

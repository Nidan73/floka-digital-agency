import React from "react";
import Navbar from "../components/Common/Navbar";
import Hero from "../Section/Hero";
import BlurOverlay from "../components/Common/BlurOverlay";
import CustomCursor from "../components/Common/CustomCursor";
import IntroSection from "../Section/IntroSection";
import PortfolioSection from "../Section/PortfolioSection";
import ExpertiseSection from "../Section/ExpertiseSection";
import FunFactsSection from "../Section/FunFactsSection";
import ClientLogosSection from "../Section/ClientLogosSection";

const Home = () => {
  return (
    <div className="relative bg-white w-full">
      <CustomCursor />

      {/* 1. NAVBAR - Fixed so it stays on top permanently */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-100">
        <Navbar />
      </header>

      {/* 2. MAIN CONTAINER */}
      <main className="relative flex flex-col w-full">
        {/* These sections scroll normally */}
        <div className="relative z-0 bg-white">
          <Hero />
          <IntroSection />
          <PortfolioSection />
        </div>

        {/* 3. THE STACKING CARDS
            Using 'bottom-0' allows you to read the full Expertise Section. 
            Once you reach the bottom of it, it freezes, and FunFacts slides up!
        */}
        <section className="sticky z-10 w-full bg-white shadow-2xl rounded-t-[3rem]">
          <ExpertiseSection />
        </section>

        <section className="sticky z-60 w-full bg-white shadow-[0_-30px_60px_rgba(0,0,0,0.2)] rounded-t-[3rem]">
          <FunFactsSection />
          <ClientLogosSection />
        </section>
      </main>

      <BlurOverlay />
    </div>
  );
};

export default Home;

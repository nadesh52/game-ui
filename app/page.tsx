import CharacterDetail from "@/components/CharacterDetail";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <section className="h-[1594px]x bg-fill overflow-x-hidden bg-[url('/assets/images/bg_section.jpg')] bg-top bg-no-repeat">
      <div className="mx-auto max-w-5xl">
        {/* <Navbar /> */}
        <CharacterDetail />
      </div>
    </section>
  );
};

export default Home;

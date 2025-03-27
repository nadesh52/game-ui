import React from "react";
import CharacterDetail from "@/components/CharacterDetail";

const Home = () => {
  return (
    <section className="h-[1594px]x bg-fill overflow-x-hidden bg-[url('/game-ui/assets/images/bg_section.jpg')] bg-top bg-no-repeat">
      <div className="mx-auto max-w-5xl">
        <CharacterDetail />
      </div>
    </section>
  );
};

export default Home;

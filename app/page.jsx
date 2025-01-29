import WhatIdo from "@/components/WhatIdo";
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <main className="w-full p-4">
      <Navbar />
      <HeroPage />
      <WhatIdo />
    </main>
  );
};

export default MainPage;

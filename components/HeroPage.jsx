import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";

const HeroPage = () => {
  return (
    <section id="hero" className="pt-20 text-center space-y-5">
      <div className="relative w-32 h-32 mx-auto">
        <Image
          className="rounded-full"
          src={"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"}
          alt="hero-image"
          objectFit="cover"
          fill
        />
      </div>
      <p className="text-stone-400">Hi, I'm Shabeer 👋</p>
      <div className="space-y-2">
        <h2 className="text-color text-4xl md:text-5xl">Web Developer &</h2>
        <h2 className="text-color text-4xl">React Native Expert</h2>
      </div>
      <button className="py-3 px-4 rounded-md shadow-md border border-gray-800 bg-[#1a1a1a] text-color">
        Download Resume
      </button>
      <ImageSlider />
    </section>
  );
};

export default HeroPage;

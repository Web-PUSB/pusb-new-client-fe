"use client";
import React, { useRef } from "react";
import HomeHeroSection from "./src/components/container/home-page/hero-section";
import HomeHeroCabinetSection from "./src/components/container/home-page/hero-cabinet";
import HomeMainWorkplanSection from "./src/components/container/home-page/workplan-section";
import HomeYoutubePlatformSection from "./src/components/container/home-page/platform-section/youtube";
import HomeSpotifyPlatformSection from "./src/components/container/home-page/platform-section/spotify";
import HomeInstagramPlatformSection from "./src/components/container/home-page/platform-section/instagram";
import HomeHighlightSection from "./src/components/container/home-page/highlight-section";
export default function Home() {
  const element = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeHeroSection handleScrollDown={handleScrollDown} />

      <HomeHeroCabinetSection />

      <HomeMainWorkplanSection element={element} />

      <HomeYoutubePlatformSection />

      <HomeHighlightSection />

      <HomeSpotifyPlatformSection />

      <HomeInstagramPlatformSection />
    </main>
  );
}

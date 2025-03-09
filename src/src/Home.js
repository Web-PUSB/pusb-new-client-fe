import React, { useRef } from "react";
import HomeHeroSection from "./components/container/home-page/hero-section";
import HomeHeroCabinetSection from "./components/container/home-page/hero-cabinet";
import HomeMainWorkplanSection from "./components/container/home-page/workplan-section";
import HomeYoutubePlatformSection from "./components/container/home-page/platform-section/youtube";
import HomeSpotifyPlatformSection from "./components/container/home-page/platform-section/spotify";
import HomeInstagramPlatformSection from "./components/container/home-page/platform-section/instagram";
import HomeHighlightSection from "./components/container/home-page/highlight-section";

export default function Home() {
  const element = useRef(null);

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

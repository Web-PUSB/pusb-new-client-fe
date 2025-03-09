"use client";
import React, { useState, useEffect } from "react";
import SplashScreen from "./src/components/shared/SplashScreen";
import { useRouter } from "next/navigation";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const lastSplashTime = localStorage.getItem("lastSplashTime");
    const currentTime = Date.now();
    const twoMinutes = 2 * 60 * 1000;

    if (lastSplashTime && currentTime - parseInt(lastSplashTime) < twoMinutes) {
      setLoading(false);
      router.push("/pusb");
    } else {
      setLoading(true);
      setSplash(true);
    }
  }, [router]);

  const finishLoading = () => {
    localStorage.setItem("lastSplashTime", Date.now().toString());
    setLoading(false);
    setSplash(false);
  };

  return (
    <div>
      {loading && splash && <SplashScreen finishLoading={finishLoading} />}
    </div>
  );
}

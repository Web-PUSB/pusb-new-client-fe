import React from "react";

const HomeSpotifyPlatformSection = () => {
  return (
    <section className="w-full lg:flex justify-center items-center flex-row-reverse bg-gray-900 px-8 lg:px-16 pt-6">
      <div className="w-full relative text-center p-4 lg:p-0 lg:-mt-8">
        <div className="w-full text-left lg:px-16">
          <h2 className="text-3xl font-extrabold leadi lg:text-5xl px-4">
            PUSB on
          </h2>
        </div>
        <h2 className="text-5xl font-extrabold leadi lg:text-7xl italic lg:-mt-2">
          Spotify!
        </h2>
      </div>
      <div className="w-full flex justify-center items-center h-64">
        <iframe
          src="https://open.spotify.com/embed/episode/3SZ645wXs5GDKW8X86daO3?utm_source=generator"
          className="w-full h-full"
          title="A Spotify podcast"
          frameBorder="0" // Use 'frameBorder' instead of 'frameborder'
          allowFullScreen // Simplified attribute for boolean values
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default HomeSpotifyPlatformSection;

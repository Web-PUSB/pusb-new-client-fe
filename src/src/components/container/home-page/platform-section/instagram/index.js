import React, { useEffect } from "react";

const HomeInstagramPlatformSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full lg:flex justify-center items-center bg-gray-900 px-8 lg:px-16 py-8">
      <div className="w-full relative text-center p-4 lg:p-0">
        <div className="w-full text-left px-4 lg:px-16">
          <h2 className="text-3xl font-extrabold leading lg:text-5xl">
            The Presunivers on
          </h2>
        </div>
        <h2 className="text-5xl font-extrabold lg:text-7xl italic lg:-mt-2">
          Instagram!
        </h2>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="max-w-sm w-full aspect-[4/5] overflow-hidden rounded-lg">
          <blockquote
            className="instagram-media w-full h-full"
            data-instgrm-permalink="https://www.instagram.com/p/Cx5Actryfyx/?utm_source=ig_web_copy_link"
            data-instgrm-version="12"
          ></blockquote>
        </div>
      </div>
    </section>
  );
};

export default HomeInstagramPlatformSection;

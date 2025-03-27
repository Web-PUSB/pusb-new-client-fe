import React from "react";

const HomeYoutubePlatformSection = () => {
  return (
    <section className="w-full lg:flex justify-center items-center bg-gray-900 px-8 lg:px-16 py-8">
      <div className="w-full relative text-center p-4 lg:p-0">
        <div className="w-full text-left px-4 lg:px-16">
          <h2 className="text-3xl font-extrabold leading lg:text-5xl">
            PUSB on
          </h2>
        </div>
        <h2 className="text-5xl font-extrabold leadi lg:text-7xl italic lg:-mt-2">
          Youtube!
        </h2>
      </div>
      <div className="w-full flex justify-center items-center h-96">
        <iframe
          src="https://www.youtube.com/embed/lei1bfTX-cs?si=PO0Wzf4lR648QWlQ?autoplay=1"
          className="w-full h-full"
          title="A YouTube video"
          frameBorder="0"
          allow="fullscreen"
        ></iframe>
      </div>
    </section>
  );
};

export default HomeYoutubePlatformSection;

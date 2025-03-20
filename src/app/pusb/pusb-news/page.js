import React from "react";
import ContainerCardNews from "./_components/ContainerCardNews";
import { GetPUSBNews } from "../../../pages/api/pusb-news";

const Page = async () => {
  let news = [];
  let error = null;

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    news = await GetPUSBNews();
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error = `Failed to load news.${err}`;
  }

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      <section className="w-full text-center pt-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          PUSB <span className="italic">NEWS</span>
        </h1>
        <div className="text-lg text-center mt-8 mb-4">
          <h3>
            This PUSB News page provides the latest news, updates on current
            events, and information on the newest programs.
          </h3>
          <p className="text-base mt-2">
            We are here to bring you relevant and reliable updates.
          </p>
        </div>
      </section>
      <ContainerCardNews isLatest={true} news={news} error={error} />
    </main>
  );
};

export default Page;

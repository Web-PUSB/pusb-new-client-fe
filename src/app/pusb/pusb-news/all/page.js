import React from "react";
import ContainerCardNews from "../_components/ContainerCardNews";
import { GetPUSBNews } from "../../../../pages/api/pusb-news";

const Page = async () => {
  let news = [];
  let error = null;

  try {
    news = await GetPUSBNews();
  } catch (err) {
    error = `Failed to load news.${err}`;
  }

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      <ContainerCardNews news={news} error={error} />
    </main>
  );
};

export default Page;

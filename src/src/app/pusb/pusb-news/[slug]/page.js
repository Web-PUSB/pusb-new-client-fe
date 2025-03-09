import React, { Suspense } from "react";
import { GetPUSBNewsBySlug } from "./src/pages/api/pusb-news";
import { News } from "./src/types/pusb-news-type";
import Loader from "./src/components/shared/Loader";
import ContainerNews from "./_components/ContainerNews";

const Page = async ({ params }: { params: { slug: string } }) => {
  const news: News = await GetPUSBNewsBySlug(params.slug);
  return (
    <div className="w-full flex justify-center items-center">
      <Suspense fallback={<Loader />}>
        <ContainerNews news={news} />
      </Suspense>
    </div>
  );
};

export default Page;

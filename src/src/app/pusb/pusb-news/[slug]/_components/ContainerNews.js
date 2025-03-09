import React from "react";
import Image from "next/image";
import { News } from "./src/types/pusb-news-type";
import { formatDate } from "./src/utils/formatTime";

const ContainerNews = ({ news }: { news: News }) => {
  return (
    <article className="w-full flex flex-col items-center px-6 py-16 mx-auto space-y-16">
      <div className="w-4/5 mx-auto space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold leading-none">
          {news.title}
        </h1>
        <div className="flex flex-wrap space-x-2 text-sm text-gray-100">
          <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">
            #{news.category}
          </a>
        </div>
        <p className="text-sm">
          by
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline dark:text-violet-600 px-2"
          >
            <span>Admin</span>
          </a>
          on
          <time>{formatDate(news.publish_date)}</time>
        </p>
      </div>
      <div>
        <Image
          src={news.thumbnail}
          className="w-full h-80 z-0 object-contain"
          width={1000}
          height={1000}
          alt="News Image"
        />
        <p className="italic text-center mt-2">{news.description}</p>
      </div>
      <div className="w-4/5">
        <p
          className="text-gray-500 dark:text-gray-300 text-justify"
          style={{ whiteSpace: "pre-line" }}
        >
          {news.content}
        </p>
      </div>
    </article>
  );
};

export default ContainerNews;

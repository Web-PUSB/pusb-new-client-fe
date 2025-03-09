"use client";

import React, { useState, useEffect } from "react";
import CardNews from "..src/app/pusb/pusb-news/_components/CardNews";
import { News } from "..src/types/pusb-news-type";
import Pagination from "..src/components/shared/Pagination";
import Sceleton from "..src/components/shared/Sceleton";
import Link from "next/link";
import { ITEMS_PER_PAGE } from "..src/lib/constants";

const ContainerCardNews = ({
  isLatest,
  news,
  error,
}: {
  isLatest?: boolean;
  news: News[] | null;
  error: string | null;
}) => {
  const [category, setCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (news) {
        let updatedNews = news;

        if (isLatest) {
          updatedNews = news.slice(0, 3);
        } else if (category !== "All") {
          updatedNews = news.filter((n) => n.category === category);
        }

        setFilteredNews(updatedNews);
        setCurrentPage(1);
      }
    }, 1000);
  }, [category, news, isLatest]);

  if (error) {
    return (
      <main className="w-full min-h-screen px-8 lg:px-16 flex items-center justify-center">
        <p>{error}</p>
      </main>
    );
  }

  if (!news || news.length === 0) {
    return (
      <main className="w-full min-h-screen px-8 lg:px-16 flex items-center justify-center">
        <p>No news available at the moment.</p>
      </main>
    );
  }

  const indexOfLastNews = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstNews = indexOfLastNews - ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      {!isLatest && (
        <div className="w-full flex justify-end my-4">
          <select
            className="bg-transparent border border-white px-4 py-2 rounded-xl"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option className="text-black" value="All">
              All Categories
            </option>
            <option className="text-black" value="Workplan">
              Workplan
            </option>
            <option className="text-black" value="Event">
              Event
            </option>
            <option className="text-black" value="Press Release">
              Press Release
            </option>
          </select>
        </div>
      )}

      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 my-16">
        {loading
          ? isLatest
            ? Array.from({ length: 3 }).map((_, index) => (
                <Sceleton key={index} />
              ))
            : Array.from({ length: currentNews.length }).map((_, index) => (
                <Sceleton key={index} />
              ))
          : currentNews.map((newsItem) => (
              <div key={newsItem.id}>
                <CardNews news={newsItem} />
              </div>
            ))}
      </section>

      {!loading && filteredNews.length > ITEMS_PER_PAGE && !isLatest && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {isLatest && (
        <div className="w-full flex justify-center mt-8">
          <Link href={`pusb-news/all`}>
            <p className="text-blue-400 hover:bg-white py-2 px-4 rounded-lg font-medium text-base hover:text-blue-800 animation-all duration-300">
              See All News
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContainerCardNews;

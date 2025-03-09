"use client";

import React, { useState, useEffect } from "react";
import { CNC } from "./src/types/pusb-cnc-type";
import Sceleton from "./src/components/shared/Sceleton";
import Pagination from "./src/components/shared/Pagination";
import Link from "next/link";
import CardCnC from "./CardCnC";
import { ITEMS_PER_PAGE } from "./src/lib/constants";

const ContainerCardCnC = ({
  isLatest,
  cnc,
  error,
}: {
  isLatest?: boolean;
  cnc: CNC[] | null;
  error: string | null;
}) => {
  const [category, setCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredcnc, setFilteredCnC] = useState<CNC[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (cnc) {
        let updatedCnC = cnc;

        if (isLatest) {
          updatedCnC = cnc.slice(0, 3);
        } else if (category !== "All") {
          updatedCnC = cnc.filter((n) => n.category === category);
        }

        setFilteredCnC(updatedCnC);
        setCurrentPage(1);
      }
    }, 1000);
  }, [category, cnc, isLatest]);

  if (error) {
    return (
      <main className="w-full min-h-screen px-8 lg:px-16 flex items-center justify-center">
        <p>{error}</p>
      </main>
    );
  }

  if (!cnc || cnc.length === 0) {
    return (
      <main className="w-full min-h-screen px-8 lg:px-16 flex items-center justify-center">
        <p>No cnc available at the moment.</p>
      </main>
    );
  }

  const indexOfLastCnc = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCnc = indexOfLastCnc - ITEMS_PER_PAGE;
  const currentCnc = filteredcnc.slice(indexOfFirstCnc, indexOfLastCnc);
  const totalPages = Math.ceil(filteredcnc.length / ITEMS_PER_PAGE);

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
            <option className="text-black" value="Art">
              Art & Culture
            </option>
            <option className="text-black" value="Sport">
              Sport
            </option>
            <option className="text-black" value="Society">
              Society & Religion
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
            : Array.from({ length: currentCnc.length }).map((_, index) => (
                <Sceleton key={index} />
              ))
          : currentCnc.map((cnc) => (
              <div key={cnc.id}>
                <CardCnC cnc={cnc} />
              </div>
            ))}
      </section>

      {!loading && filteredcnc.length > ITEMS_PER_PAGE && !isLatest && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {isLatest && (
        <div className="w-full flex justify-center mt-8">
          <Link href={`pusb-cnc/all`}>
            <p className="text-blue-400 hover:bg-white py-2 px-4 rounded-lg font-medium text-base hover:text-blue-800 animation-all duration-300">
              See All CnC&apos;s
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContainerCardCnC;

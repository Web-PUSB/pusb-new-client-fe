/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import {
  ExecTeamsContainer,
  MOCSTeamsContainer,
  MOFTeamsContainer,
  MOSATeamsContainer,
  MOSDTeamsContainer,
  MOCTeamsContainer,
} from "./pusb-structure/_components/CardTeamsContainer";
import Image from "next/image";
import pusblogo from "./public./assets/pusblogo.png";
const Page = () => {
  return (
    <main className="w-full min-h-screen pb-20">
      <section className="w-full h-[86vh] bg-gray-900 flex flex-col justify-center items-center gap-4 mochiy-pop-one-bold">
        <Image
          src={pusblogo}
          alt="PUSB Logo"
          width={500}
          height={500}
          className="w-44 lg:w-56"
        />
        <div className="text-center px-4">
          <h2 className="text-2xl lg:text-5xl tracking-wide font-extrabold text-white">
            Cabinet Structure
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold">
            President University Student Board 2025
          </h2>
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Sanctus Cabinet
          </h2>
        </div>
      </section>
      <h3 className="text-4xl  text-center font-extrabold mt-8 mb-4">
        WILL BE REVEALED SOON!
      </h3>
      {/* <section className="w-full h-full">
        <ExecTeamsContainer
          title={""}
          handleMinisterModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          openMinisterModal={false}
        />
      </section>
      <section className="w-full h-full">
        <MOCSTeamsContainer
          handleMinisterModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          openMinisterModal={false}
        />
      </section>
      <section className="w-full h-full">
        <MOFTeamsContainer
          handleMinisterModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          openMinisterModal={false}
        />
      </section>
      <section className="w-full h-full">
        <MOSATeamsContainer
          handleMinisterModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          openMinisterModal={false}
        />
      </section>
      <section className="w-full h-full">
        <MOSDTeamsContainer
          handleMinisterModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          openMinisterModal={false}
        />
      </section>
      <section className="w-full h-full">
        <MOCTeamsContainer
          handleMinisterModal={function (): void {
            throw new Error("Function not implemented.");
          }}
          openMinisterModal={false}
        />
      </section> */}

      {/* <ul>
        <li>President</li>
        <li>Vice President</li>
        <li>Secre</li>
        <li>Trea</li>
        <ul>
          Ministry
          <li>
            <ul>
              MOC
              <li>SA</li>
              <li></li>
              <li>SA</li>
            </ul>
            <ul>
              MOF
              <li>SA</li>
              <li></li>
              <li>SA</li>
            </ul>
          </li>
        </ul>
      </ul> */}
      {/* STRUKTURAL */}

      {/* namanya ada link ke detail based on nama  trus ada anggota + program kerja */}
    </main>
  );
};

export default Page;

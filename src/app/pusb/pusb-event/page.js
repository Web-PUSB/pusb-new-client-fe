import React from "react";
import CardHighlightContainer from "..pusb-event/_components/CardHighlightContainer";
/* import ContainerCardEvents from "..src/app/pusb/pusb-event/_components/ContainerCardEvents"; */
import { GetPUSBEvent } from "..src/pages/api/pusb-events";
import ContainerCardEvents from "./_components/ContainerCardEvents";
import Link from "next/link";
/* import Link from "next/link"; */

const Page = async () => {
  let pusbEvents = [];
  let error = null;
  let loading = true;

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pusbEvents = await GetPUSBEvent();
    loading = false;
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error = `Failed to load events.${err}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loading = false;
  }

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      <section className="w-full text-center pt-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          PUSB Events
        </h1>
        <h3 className="text-lg text-center mt-8 mb-4">
          This PUSB Events page provides a schedule of various activities,
          including workshops, seminars, events, and more, opportunities to
          learn, connect, and grow.
        </h3>
      </section>

      <section className="w-full min-h-[60vh] lg:flex lg:flex-col justify-center items-center gap-8 py-8">
        <div className="w-full">
          <h2 className="text-4xl font-bold lg:text-5xl mb-4 lg:mb-0">
            <span className="italic"> Event </span> HIGHLIGHTS
          </h2>
        </div>
        <div className="w-full">
          <div className="keen-slider">
            <div id="keen-slider" className="keen-slider">
              <CardHighlightContainer />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <h2 className="text-2xl font-bold lg:text-3xl">
          <span className="italic"> Previous </span>
          EVENTS
        </h2>

        <ContainerCardEvents
          pusbeEvents={pusbEvents}
          error={error}
          loading={loading}
          isLatest={true}
        />
      </section>

      <section className="w-full flex justify-center mt-8">
        <Link href={`pusb-event/all`}>
          <p className="text-blue-400 hover:bg-white py-2 px-4 rounded-lg font-medium text-base hover:text-blue-800 animation-all duration-300">
            See All Event&apos;s
          </p>
        </Link>
      </section>
    </main>
  );
};
export default Page;
